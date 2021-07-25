const { ethers, waffle } = require("hardhat");
const fs = require("fs");
const chai = require("chai");

const { expect } = chai;

const toWei = ethers.utils.parseEther;
chai.use(require("chai-bignumber")());

const overrides = { gasLimit: 9500000 };
const amount = toWei("100");

describe("Generative NFT on-chain", async function () {
  const provider = waffle.provider;
  const wallets = provider.getWallets();
  const [wallet, other] = wallets;

  let token;
  let nftDescriptor;
  let loadFixture;

  const generativeNFTFixture = async () => {
    const generativeNFT = await ethers.getContractFactory("NFTDescriptor");
    const generativeNFTContract = await generativeNFT.deploy();

    const [ERC20MockFactory, NFTDescriptorTestFactory] = await Promise.all([
      ethers.getContractFactory("ERC20Mock"),
      ethers.getContractFactory("NFTDescriptorTest", {
        libraries: {
          NFTDescriptor: generativeNFTContract.address,
        },
      }),
    ]);
    const token = await ERC20MockFactory.deploy();
    const nftDescriptor = await NFTDescriptorTestFactory.deploy(overrides);

    return { token, nftDescriptor };
  };

  before("create fixture loader", async () => {
    loadFixture = waffle.createFixtureLoader(wallets);
  });

  beforeEach("load fixture", async function () {
    ({ token, nftDescriptor } = await loadFixture(generativeNFTFixture));

    await token.mint(wallet.address, amount);
    await token.mint(other.address, amount);
  });

  function extractJSONFromURI(uri) {
    const encodedJSON = uri.substr("data:application/json;base64,".length);
    const decodedJSON = Buffer.from(encodedJSON, "base64").toString("utf8");
    return JSON.parse(decodedJSON);
  }
  it("constructURIParams", async function () {
    const params = {
      tokenId: 10,
      blockNumber: 5321,
      stakeAmount: 10000,
      uTokenAddress: token.address,
      // uTokenAddress: 4043190771165703749,
      name: "Kuala Lumpur",
    };

    console.log("tokenAddress", token.address);

    const params2 = {
      name: "Tokyo",
      blockNumber: 5321,
      tokenId: 10,
      address: "Tokyo, Japan",
      image: "QmcEKozMSmS4sV37wkuU9Xe8ctvpNaeKDfBFPRo4Uz8kFJ",
      attributes: {
        latitude: "40.4319077",
        longitude: "116.5703749",
      },
    };

    console.log({ params });
    const expectedTokenUri = {
      name: "Kuala Lumpur NFT",
      description: "This NFT represents a top 200 cities in the planet Earth\n",
    };
    const json = extractJSONFromURI(
      await nftDescriptor.constructTokenURI(params)
    );
    console.log("json.image :>> ", json.image);

    const base64Str = json.image.replace("data:image/svg+xml;base64,", "");
    await fs.promises.writeFile("images/nft-example.svg", base64Str, {
      encoding: "base64",
    });

    expect(json.description).to.equal(expectedTokenUri.description);
    expect(json.name).to.equal(expectedTokenUri.name);
  });
});
