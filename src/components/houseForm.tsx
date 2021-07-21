import { ethers } from "ethers";
import { create as createIPFS } from "ipfs-http-client";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import NFTMarketplace from "../../artifacts/contracts/OneWorld.sol/Marketplace.json";
import Token from "../../artifacts/contracts/OneWorld.sol/Token.json";
import { SearchBox } from "./searchBox";

interface IFormData {
  address: string;
  latitude: number;
  longitude: number;
  price: string;
  image: FileList;
}

interface IHouse {
  id: string;
  address: string;
  latitude: number;
  longitude: number;
  image: string;
  publicId: string;
  price: number;
}

interface IProps {
  house?: IHouse;
}

export default function HouseForm({ house }: IProps) {
  const tokenAddress = process.env.NEXT_PUBLIC_NFT_ADDRESS;
  const nftMarketplaceAddress = process.env.NEXT_PUBLIC_MARKETPLACE_ADDRESS;
  const router = useRouter();

  const [submitting, setSubmitting] = useState(false);
  const [previewImage, setPreviewImage] = useState("");

  const { register, handleSubmit, setValue, errors, watch } = useForm<
    IFormData
  >({
    defaultValues: house
      ? {
          address: house.address,
          latitude: house.latitude,
          longitude: house.longitude,
          price: house.price.toString(),
        }
      : {},
  });

  const address = watch("address");

  useEffect(() => {
    register({ name: "address" }, { required: "Please enter your address" });
    register({ name: "latitude" }, { required: true, min: -90, max: 90 });
    register({ name: "longitude" }, { required: true, min: -180, max: 180 });
  }, [register]);

  const ipfs = createIPFS({
    host: "ipfs.infura.io",
    port: 5001,
    protocol: "https",
  });

  console.log("token address", tokenAddress);
  console.log("nft marketplace address", nftMarketplaceAddress);

  async function requestAccount() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }

  const handleCreate = async (data: IFormData) => {
    console.log("ipfs", ipfs);
    if (ipfs) {
      setSubmitting(false);
      try {
        const result = await ipfs.add(data.image[0]);
        const tokenURI = {
          name: data.address,
          image: result.path,
          attributes: {
            latitude: data.latitude,
            longitude: data.longitude,
          },
        };
        console.log({ tokenURI, window, tokenAddress });
        if (typeof window.ethereum !== "undefined" && tokenAddress) {
          console.log({ eth: window.ethereum });
          await requestAccount();
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();
          let contract = new ethers.Contract(tokenAddress, Token.abi, signer);
          let transaction = await contract.createToken(
            JSON.stringify(tokenURI)
          );
          const tx = await transaction.wait();
          let event = tx.events[0];
          let value = event.args[2];
          let tokenId = value.toNumber();

          const price = ethers.utils.parseUnits(data.price, "ether");
          console.log({ price });

          contract = new ethers.Contract(
            nftMarketplaceAddress,
            NFTMarketplace.abi,
            signer
          );

          let listingPrice = await contract.getListingPrice(price);
          listingPrice = listingPrice.toString();

          transaction = await contract.createMarketItem(
            tokenAddress,
            tokenId,
            price,
            { value: listingPrice }
          );
          await transaction.wait();
          router.push("/");
        }
      } catch (error) {
        console.log({ error });
      }
    }
  };

  const onSubmit = (data: IFormData) => {
    setSubmitting(true);

    handleCreate(data);
  };

  return (
    <form className="mx-auto max-w-xl py-4" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-xl">
        {house ? `Editing ${house.address}` : `Add a new spot`}{" "}
      </h1>
      <div className="mt-4">
        <label htmlFor="search" className="block">
          Search for the spot address to mint
        </label>
        <SearchBox
          onSelectAddress={(address, latitude, longitude) => {
            setValue("address", address);
            setValue("latitude", latitude);
            setValue("longitude", longitude);
          }}
          defaultValue={house ? house.address : ""}
        />
        {errors.address && <p>{errors.address.message}</p>}
      </div>

      {address && (
        <>
          {" "}
          <div className="mt-4">
            <label
              htmlFor="image"
              className="p-4 border-dashed border-4 border-gray-600 block cursor-pointer"
            >
              Click to add image (16:9)
            </label>
            <input
              id="image"
              name="image"
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              ref={register({
                validate: (fileList: FileList) => {
                  if (house || fileList.length === 1) return true;
                  return "Plese upload one file";
                },
              })}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                if (event?.target?.files?.[0]) {
                  const file = event.target.files[0];

                  const reader = new FileReader();

                  reader.onloadend = async () => {
                    setPreviewImage(reader.result as string);
                  };

                  reader.readAsDataURL(file);
                }
              }}
            />
            {previewImage && (
              <img
                src={previewImage}
                className="mt-4 object-cover"
                style={{ width: "576px", height: `${(9 / 16) * 575}px` }}
              ></img>
            )}
            {errors.image && <p>{errors.image.message}</p>}
          </div>
          <div className="mt-4">
            <label htmlFor="price" className="block">
              {" "}
              Price
            </label>{" "}
            <input
              className="p-2"
              type="number"
              name="price"
              id="price"
              ref={register({
                required: "Please enter the price",
                // max: { value: 10, message: "Woahh, too big of a house" },
                min: { value: 5, message: "Must be more than 5 ETH" },
              })}
            ></input>
            {errors.price && <p>{errors.price.message}</p>}
          </div>
          <div className="mt-4">
            <button
              className="bg-blue-500 hover:bg-blue-700
          font-bold
          py-2
          px-4
          rounded"
              type="submit"
              disabled={submitting}
            >
              Save
            </button>{" "}
            <Link href={house ? `/houses/${house.id}` : "/"}>
              <a>Cancel</a>
            </Link>
          </div>
        </>
      )}
    </form>
  );
}
