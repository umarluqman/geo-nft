import { ethers } from "ethers";
import { useEffect, useMemo, useState } from "react";
import axios from "redaxios";
import HouseList from "src/components/houseList";
import Layout from "src/components/layout";
import Map from "src/components/map";
import { useLastData } from "src/utils/useLastData";
import { useLocalState } from "src/utils/useLocalState";
import { useDebounce } from "use-debounce";
import Marketplace from "../artifacts/contracts/OneWorld.sol/Marketplace.json";
import Token from "../artifacts/contracts/OneWorld.sol/Token.json";
import type { Marketplace as marketplaceType } from "types";
import useUserAddress from "src/account/hooks/useUserAddress";

const tokenAddress = process.env.NEXT_PUBLIC_NFT_ADDRESS;
const marketplaceAddress = process.env.NEXT_PUBLIC_MARKETPLACE_ADDRESS;

type BoundsArray = [[number, number], [number, number]];

const parseBounds = (boundsString: string) => {
  const bounds = JSON.parse(boundsString) as BoundsArray;

  return {
    sw: {
      latitude: bounds?.[0]?.[1],
      longitude: bounds?.[0]?.[0],
    },
    ne: {
      latitude: bounds?.[1]?.[1],
      longitude: bounds?.[1]?.[0],
    },
  };
};

export default function MyNFTs() {
  const [highlightedId, setHighlightedId] = useState<string | null>(null);
  const [nfts, setNfts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function loadNFTs() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const signer = provider.getSigner();

    const tokenContract = new ethers.Contract(
      tokenAddress,
      Token.abi,
      provider
    );
    const marketContract = new ethers.Contract(
      marketplaceAddress,
      Marketplace.abi,
      signer
    );

    setIsLoading(true);
    try {
      const data = await marketContract.fetchMyNfts();
      console.log({ mynft: data, provider });

      const items = await Promise.all(
        data.map(async (i) => {
          let tokenURI = await tokenContract.tokenURI(i.tokenId);

          tokenURI = JSON.parse(tokenURI);

          const meta = await axios.get(
            "https://ipfs.infura.io/ipfs/" + tokenURI.image
          );
          let price = ethers.utils.formatUnits(i.price.toString(), "ether");

          let item = {
            price,
            tokenId: i.tokenId.toNumber(),
            seller: i.seller,
            owner: i.owner,
            image: meta.url,
            address: tokenURI.name,
            // description: tokenURI.description,
            attributes: tokenURI.attributes,
          };
          console.log({ item });
          return item;
        })
      );

      setNfts(items);
    } catch (error) {
      console.log("error", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadNFTs();
  }, []);

  const [dataBounds, setDataBounds] = useLocalState<string>(
    "bounds",
    "[[0,0],[0,0]]"
  );

  const [debouncedDataBounds] = useDebounce(dataBounds, 200);

  const bounds = parseBounds(debouncedDataBounds);

  const data = useMemo(() => {
    return nfts.filter(({ attributes }) => {
      return (
        attributes.latitude >= bounds.sw.latitude &&
        attributes.latitude <= bounds.ne.latitude &&
        attributes.longitude >= bounds.sw.longitude &&
        attributes.longitude <= bounds.ne.longitude
      );
    });
  }, [bounds, nfts]);

  const lastData = useLastData(data);

  return (
    <Layout
      main={
        <div className="flex">
          <div
            className="w-1/2 pb-4"
            style={{ maxHeight: "calc(100vh - 64px)", overflowX: "scroll" }}
          >
            <HouseList
              nfts={lastData ? lastData : []}
              setHighlightedId={setHighlightedId}
              loadNFTs={loadNFTs}
            />
          </div>

          <div className="w-1/2">
            <Map
              setDataBounds={setDataBounds}
              nfts={lastData ? lastData : []}
              highlightedId={highlightedId}
            />
          </div>
        </div>
      }
    />
  );
}
