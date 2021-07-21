import Link from "next/link";
import { HousesQuery_houses } from "src/generated/HousesQuery";
// import Image from "next/image";

interface IProps {
  houses: HousesQuery_houses[];
  setHighlightedId: (id: string | null) => void;
}

export default function HouseList({ nfts, setHighlightedId }: IProps) {
  console.log({ nfts });
  return (
    <>
      {nfts?.map((nft) => (
        <Link key={nft.tokenId} href={`/houses/${nft.tokenId}`}>
          <div
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
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}
