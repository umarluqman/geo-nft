import { ethers } from "ethers";
import router, { useRouter } from "next/router";
import { HousesQuery_houses } from "src/generated/HousesQuery";
// import { Marketplace } from "types";
import Web3Modal from "web3modal";
import Marketplace from "../../artifacts/contracts/OneWorld.sol/Marketplace.json";
import Token from "../../artifacts/contracts/OneWorld.sol/Token.json";
// import Image from "next/image";

interface IProps {
  houses: HousesQuery_houses[];
  setHighlightedId: (id: string | null) => void;
}

const tokenAddress = process.env.NEXT_PUBLIC_NFT_ADDRESS;
const marketplaceAddress = process.env.NEXT_PUBLIC_MARKETPLACE_ADDRESS;

export default function HouseList({
  nfts,
  setHighlightedId,
  loadNFTs,
}: IProps) {
  console.log({ nfts });

  const router = useRouter();

  async function buyNft(nft) {
    console.log({ nft });
    try {
      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        marketplaceAddress,
        Marketplace.abi,
        signer
      );

      const price = ethers.utils.parseUnits(nft.price.toString(), "ether");
      // console.log({ price, o: parseInt(nft.price) });
      const transaction = await contract.createMarketSale(
        tokenAddress,
        nft.tokenId,
        {
          value: price,
        }
      );
      await transaction.wait();
      // loadNFTs();
      router.push("/my-assets");
    } catch (error) {
      console.log({ error });
    }
  }

  return (
    <>
      {nfts?.map((nft) => (
        <div
          key={nft.tokenId}
          className="px-6 pt-4 cursor-pointer flex flex-wrap"
          onMouseEnter={() => setHighlightedId(nft.tokenId)}
          onMouseLeave={() => setHighlightedId(null)}
        >
          <div className="sm:w-full md:w-1/2">
            <img
              alt={nft.address}
              width={350}
              height={Math.floor((9 / 16) * 350)}
              src={nft.image}
            />
          </div>
          <div className="sm:w-full md:w-1/2 sm:pl-0 md:pl-4">
            <h2 className="text-lg">{nft.address}</h2>
            <p>{nft.price} ONE</p>
            <button
              className="bg-green-500 text-white font-bold py-2 px-12 rounded"
              onClick={() => buyNft(nft)}
            >
              Buy
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
