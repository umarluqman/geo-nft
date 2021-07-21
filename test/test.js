const { expect } = require("chai");

describe("NFTMarketplace", function () {
  it("Should create token and market item", async function () {
    const NFTMarketplace = await ethers.getContractFactory("Marketplace");
    const marketplace = await NFTMarketplace.deploy();
    await marketplace.deployed();
    const marketContractAddress = marketplace.address;

    // console.log("marketContractAddress", marketContractAddress);

    const NFT = await ethers.getContractFactory("Token");
    const nft = await NFT.deploy(marketContractAddress);
    await nft.deployed();
    const nftContractAddress = nft.address;

    // console.log("nftContractAddress", nftContractAddress);

    const tokenURI = {
      name: "Great Wall of China, Huairou District, China",
      image: "QmcEKozMSmS4sV37wkuU9Xe8ctvpNaeKDfBFPRo4Uz8kFJ",
      attributes: {
        latitude: "40.4319077",
        longitude: "116.5703749",
      },
    };
    const price = "500";
    const marketplaceFee = "25.0";
    const priceWei = ethers.utils.parseUnits(price, "ether");

    let listingPrice = await marketplace.getListingPrice(priceWei);
    const marketplaceFeeAmount = ethers.utils.formatEther(listingPrice);

    expect(marketplaceFeeAmount.toString()).to.equal(marketplaceFee);
  });
});
