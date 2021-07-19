// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


import "hardhat/console.sol";

/**
@title NFT token for tokenized world
@author Umar Luqman
@dev Ownable because all NFTs are pre-minted
 */

contract Token is Ownable, ERC721URIStorage {
  using Counters for Counters.Counter;
  Counters.Counter private _tokenIds;
  address contractAddress;
  
  /// @param marketplaceAddress address that have the permission to transfer the token on behalf of the owner
  constructor(address marketplaceAddress) ERC721("ONE World", "WORLD") {
    contractAddress = marketplaceAddress;
  }

  /// @param tokenURI store name, description, longitude and latitude
  function createToken(string memory tokenURI) public onlyOwner returns (uint)  {
    _tokenIds.increment();
    uint newItemId = _tokenIds.current();
    _safeMint(msg.sender, newItemId);
    _setTokenURI(newItemId, tokenURI);
    setApprovalForAll(contractAddress, true);
    return newItemId;
  }
}

contract NFTMarketplace is ReentrancyGuard {
  using Counters for Counters.Counter;
  Counters.Counter private _itemIds; // to keep track of all items in marketplace
  Counters.Counter private _itemSold;

  address payable owner;

  constructor() {
    owner = payable(msg.sender); // deployer of the marketplace contract
  }

  struct MarketItem {
    uint itemId;
    address nftContract;
    uint256 tokenId;
    address payable seller;
    address payable owner;
    uint256 price;
    bool sold;
  }

  mapping(uint256 => MarketItem) private idToMarketItem;

  event MarketItemCreated (
    uint indexed itemId,
    address indexed nftContract,
    uint256 indexed tokenId,
    address seller,
    address owner,
    uint price,
    bool sold
  );

  function fivePercentOf(uint256 _value) private pure returns (uint256)  {
    require((_value/10000) * 10000 == _value, 'Value is too small');
    return _value * 500/10000;
  }

  function getListingPrice(uint price) public pure returns (uint) {
    return fivePercentOf(price);
  }

  /// @param nftContract address for the NFT to sell
  /// @param tokenId NFT id
  /// @param price NFT price
  function createMarketItem(
    address nftContract,
    uint tokenId,
    uint price
  ) public payable nonReentrant {



    require(price > 0, "Price must be at least 1 wei");
    require(msg.value == fivePercentOf(price), "Price must be equal to the 5 percent of the price.");
    

    console.log("price", price);
    console.log("listing price", fivePercentOf(price));

    _itemIds.increment();
    uint itemId = _itemIds.current();

    idToMarketItem[itemId] = MarketItem(
      itemId, 
      nftContract,
      tokenId,
      payable(msg.sender),
      payable(address(0)), // pass as empty address
      price,
      false
    );        

    // transfer the nftContract from the sender address to the address of the marketplace contract;
    IERC721(nftContract).transferFrom(msg.sender, address(this), tokenId);

    emit MarketItemCreated(
      itemId, 
      nftContract, 
      tokenId, 
      msg.sender, 
      address(0), 
      price, false
    );   
  }

  function createMarketSale(
    address nftContract,
    uint itemId
  ) public payable nonReentrant {

    uint price = idToMarketItem[itemId].price;
    uint tokenId = idToMarketItem[itemId].tokenId;

    require(msg.value == price, "Please submit the asking price in order to complete the purchase");

    idToMarketItem[itemId].seller.transfer(msg.value); // transfer the price amount to the seller

    IERC721(nftContract).transferFrom(address(this), msg.sender, tokenId); // transfer the NFT from marketplace address to the buyer address

    idToMarketItem[itemId].owner = payable(msg.sender);
    _itemSold.increment();

    payable(owner).transfer(fivePercentOf(price)); // pay the marketplace fee when a sale is created
  }

  function fetchMarketItems() public view returns (MarketItem[] memory) {
    uint totalItemCount = _itemIds.current(); // get market item count
    uint unsoldItemCount = totalItemCount - _itemSold.current();
    uint currentIndex = 0;
    
    MarketItem[] memory items = new MarketItem[](unsoldItemCount); // array of unsold items

    for (uint i = 0; i < totalItemCount; i++) {
        if (idToMarketItem[i+1].owner == address(0)) {
            uint currentId = idToMarketItem[i+1].itemId;
            MarketItem storage currentItem = idToMarketItem[currentId];
            items[currentIndex] = currentItem;
            currentIndex += 1;
        }
    }
    return items;  
  }

  function fetchMyNfts() public view returns (MarketItem[] memory) {
    uint totalItemCount = _itemIds.current();
    uint itemCount = 0;
    uint currentIndex = 0;
    
    // get the user NFT count
    for (uint i = 0; i < totalItemCount; i++) {
        if (idToMarketItem[i+1].owner == msg.sender) {
            itemCount += 1;
        }
    }
    
    MarketItem[] memory items = new MarketItem[](itemCount);
    for (uint i = 0; i < totalItemCount; i++) {
        uint currentId = idToMarketItem[i+1].itemId;
        MarketItem storage currentItem = idToMarketItem[currentId];
        items[currentIndex] = currentItem;
        currentIndex +=1;
    }
    
    return items;
  }

  function fetchItemsCreated() public view returns (MarketItem[] memory) {
    uint totalItemCount = _itemIds.current();
    uint itemCount = 0;
    uint currentIndex = 0;

    for (uint i = 0; i < totalItemCount; i++) {
      if (idToMarketItem[i+1].seller == msg.sender) {
        itemCount +=1;
      }
    }

    MarketItem[] memory items = new MarketItem[](itemCount);

    for (uint i = 0; i < totalItemCount; i++) {
      if (idToMarketItem[i+1].seller == msg.sender) {
      uint currentId = i +1;
      MarketItem storage currentItem = idToMarketItem[currentId];
      items[currentIndex] = currentItem;
      currentIndex +=1;
      }    
    }
    return items;
  }
        
}



