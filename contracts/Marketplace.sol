// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

import "hardhat/console.sol";

contract NFT is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    address contractAddress;
    
    constructor(address marketplaceAddress) ERC721("Digital Marketplace", "ONEW") {
        contractAddress = marketplaceAddress;
    }
    
    function createToken(string memory tokenURI) public returns (uint) {
        _tokenIds.increment();
        uint newItemId = _tokenIds.current();
        
        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI);
        setApprovalForAll(contractAddress, true);
        return newItemId;
    }
}

contract NFTMarket is ReentrancyGuard {
      using Counters for Counters.Counter;
      Counters.Counter private _itemIds; // to keep track of all items in marketplace
      Counters.Counter private _itemSold;
      
      address payable owner;
      uint256 listingPrice = 10 ether;
      
      constructor(){
        owner = payable(msg.sender);
    }
      
      struct MarketItem {
          uint itemId;
          address nftContract;
          uint256 tokenId;
          address payable seller;
          address payable owner;
          uint256 price;
      }
      
      mapping(uint256 => MarketItem) private idToMarketItem;
      
      event MarketItemCreated (
            uint indexed itemId,
            address indexed nftContract,
            uint256 indexed tokenId,
            address seller,
            address owner,
            uint price
            
        );
    
    function createMarketItem(
        address nftContract,
        uint256 tokenId,
        uint256 price
    ) public payable nonReentrant {
       require(price > 0, "Price must be at least 1 wei");
       require(msg.value == listingPrice, "Price must be equal to the listing price.");
       
       _itemIds.increment();
       uint256 itemId = _itemIds.current();
       
       idToMarketItem[itemId] = MarketItem(
           itemId, 
           nftContract,
           tokenId,
           payable(msg.sender),
           payable(address(0)), // pass as empty address
           price
        );
        
        IERC721(nftContract).transferFrom(msg.sender, address(this),tokenId); 
        // transfer the nftContract from the sender address to the address of this contract;
        
        emit MarketItemCreated(
            itemId, 
            nftContract, 
            tokenId, 
            msg.sender, 
            address(0), 
            price
        );
    }  
        function createMarketSale(
                address nftContract,
                uint itemId
            ) public payable nonReentrant {
                
                uint price = idToMarketItem[itemId].price;
                uint tokenId = idToMarketItem[itemId].tokenId;
                
                require(msg.value == price, "Please submit the asking price in order to complete the purchase");
                
                idToMarketItem[itemId].seller.transfer(msg.value); // transfer the price to seller;
                
                IERC721(nftContract).transferFrom(address(this), msg.sender, tokenId); // transfer the tokenId (nft) from the address that hold the nft to the buyer address
                
                idToMarketItem[itemId].owner = payable(msg.sender);
                _itemSold.increment();
                
                payable(owner).transfer(listingPrice);
        }
        
        function fetchMarketItems() public view returns (MarketItem[] memory) {
            uint totalItemCount = _itemIds.current();
            uint unsoldItemCount = totalItemCount - _itemSold.current();
            uint currentIndex = 0;
            
            MarketItem[] memory items = new MarketItem[](unsoldItemCount);
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
        
}
    
    
    