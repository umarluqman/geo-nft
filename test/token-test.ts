import { ethers } from "hardhat";
import chai, { expect } from "chai";
import { solidity } from "ethereum-waffle";
import {
  Token,
  Token__factory,
  Marketplace,
  Marketplace__factory,
} from "../types";

chai.use(solidity);

describe("Token contract", function () {
  let NFTMarketplace: Marketplace__factory;
  let marketplace: Marketplace;
  let marketContractAddress;

  let NFTToken: Token__factory;
  let token: Token;
  let tokenContractAddress;

  let ownerAddress: any;
  let buyer;
  let address2;
  let otherAddressList;

  beforeEach(async function () {
    NFTMarketplace = await ethers.getContractFactory("Marketplace");
    marketplace = await NFTMarketplace.deploy();
    await marketplace.deployed();
    marketContractAddress = marketplace.address;

    NFTToken = await ethers.getContractFactory("Token");
    token = await NFTToken.deploy(marketContractAddress);
    await token.deployed();
    tokenContractAddress = token.address;

    const [owner, address1, ...otherAddresses] = await ethers.getSigners();

    ownerAddress = owner;
    token.isApprovedForAll;
    token.buyer = address1;
    otherAddressList = otherAddresses;
  });

  it("Should set the right owner", async function () {
    expect(await token.owner()).to.equal(ownerAddress);
  });
});
