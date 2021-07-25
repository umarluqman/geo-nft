/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Token, TokenInterface } from "../Token";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "marketplaceAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "baseURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "tokenURI",
        type: "string",
      },
    ],
    name: "createToken",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "latitude",
        type: "string",
      },
      {
        internalType: "string",
        name: "longitude",
        type: "string",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
    ],
    name: "getSVG",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620025903803806200259083398101604081905262000034916200029d565b604080518082018252600981526813d3914815dbdc9b1960ba1b6020808301919091528251808401909352600583526415d3d4931160da1b9083015290620000836301ffc9a760e01b62000168565b815162000098906006906020850190620001f1565b508051620000ae906007906020840190620001f1565b50620000c16380ac58cd60e01b62000168565b620000d3635b5e139f60e01b62000168565b620000e563780e9d6360e01b62000168565b5060009050620000f4620001ed565b600a80546001600160a01b0319166001600160a01b038316908117909155604051919250906000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350600c80546001600160a01b0319166001600160a01b0392909216919091179055620002cd565b6001600160e01b03198082161415620001c8576040805162461bcd60e51b815260206004820152601c60248201527f4552433136353a20696e76616c696420696e7465726661636520696400000000604482015290519081900360640190fd5b6001600160e01b0319166000908152602081905260409020805460ff19166001179055565b3390565b828054600181600116156101000203166002900490600052602060002090601f01602090048101928262000229576000855562000274565b82601f106200024457805160ff191683800117855562000274565b8280016001018555821562000274579182015b828111156200027457825182559160200191906001019062000257565b506200028292915062000286565b5090565b5b8082111562000282576000815560010162000287565b600060208284031215620002af578081fd5b81516001600160a01b0381168114620002c6578182fd5b9392505050565b6122b380620002dd6000396000f3fe608060405234801561001057600080fd5b50600436106101425760003560e01c80636c0360eb116100b8578063a22cb4651161007c578063a22cb46514610274578063a321615814610287578063b88d4fde1461029a578063c87b56dd146102ad578063e985e9c5146102c0578063f2fde38b146102d357610142565b80636c0360eb1461024157806370a0823114610249578063715018a61461025c5780638da5cb5b1461026457806395d89b411461026c57610142565b806323b872dd1161010a57806323b872dd146101cf5780632f745c59146101e257806342842e0e146101f557806345576f94146102085780634f6ccce71461021b5780636352211e1461022e57610142565b806301ffc9a71461014757806306fdde0314610170578063081812fc14610185578063095ea7b3146101a557806318160ddd146101ba575b600080fd5b61015a610155366004611d57565b6102e6565b6040516101679190611eff565b60405180910390f35b610178610309565b6040516101679190611f0a565b610198610193366004611e25565b61039f565b6040516101679190611eeb565b6101b86101b3366004611d2e565b610401565b005b6101c26104d7565b6040516101679190611f89565b6101b86101dd366004611c40565b6104e8565b6101c26101f0366004611d2e565b61053f565b6101b8610203366004611c40565b61056a565b6101c2610216366004611d7f565b610585565b6101c2610229366004611e25565b61063e565b61019861023c366004611e25565b610654565b61017861067c565b6101c2610257366004611bf4565b6106dd565b6101b8610745565b610198610803565b610178610812565b6101b8610282366004611cf4565b610873565b610178610295366004611e3d565b610978565b6101b86102a8366004611c7b565b610a36565b6101786102bb366004611e25565b610a94565b61015a6102ce366004611c0e565b610d15565b6101b86102e1366004611bf4565b610d43565b6001600160e01b0319811660009081526020819052604090205460ff165b919050565b60068054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156103955780601f1061036a57610100808354040283529160200191610395565b820191906000526020600020905b81548152906001019060200180831161037857829003601f168201915b5050505050905090565b60006103aa82610e58565b6103e55760405162461bcd60e51b815260040180806020018281038252602c81526020018061217c602c913960400191505060405180910390fd5b506000908152600460205260409020546001600160a01b031690565b600061040c82610654565b9050806001600160a01b0316836001600160a01b0316141561045f5760405162461bcd60e51b815260040180806020018281038252602181526020018061222c6021913960400191505060405180910390fd5b806001600160a01b0316610471610e65565b6001600160a01b0316148061048d575061048d816102ce610e65565b6104c85760405162461bcd60e51b81526004018080602001828103825260388152602001806120cf6038913960400191505060405180910390fd5b6104d28383610e69565b505050565b60006104e36002610ed7565b905090565b6104f96104f3610e65565b82610ee2565b6105345760405162461bcd60e51b815260040180806020018281038252603181526020018061224d6031913960400191505060405180910390fd5b6104d2838383610f7e565b6001600160a01b038216600090815260016020526040812061056190836110ca565b90505b92915050565b6104d283838360405180602001604052806000815250610a36565b600061058f610e65565b6001600160a01b03166105a0610803565b6001600160a01b0316146105fb576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b610605600b6110d6565b6000610611600b6110df565b905061061d33826110e3565b6106278184611101565b600c54610564906001600160a01b03166001610873565b60008061064c600284611164565b509392505050565b6000610564826040518060600160405280602981526020016121316029913960029190611180565b60098054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156103955780601f1061036a57610100808354040283529160200191610395565b60006001600160a01b0382166107245760405162461bcd60e51b815260040180806020018281038252602a815260200180612107602a913960400191505060405180910390fd5b6001600160a01b038216600090815260016020526040902061056490610ed7565b61074d610e65565b6001600160a01b031661075e610803565b6001600160a01b0316146107b9576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b600a546040516000916001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600a80546001600160a01b0319169055565b600a546001600160a01b031690565b60078054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156103955780601f1061036a57610100808354040283529160200191610395565b61087b610e65565b6001600160a01b0316826001600160a01b031614156108e1576040805162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604482015290519081900360640190fd5b80600560006108ee610e65565b6001600160a01b03908116825260208083019390935260409182016000908120918716808252919093529120805460ff191692151592909217909155610932610e65565b6001600160a01b03167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318360405180821515815260200191505060405180910390a35050565b606073__$2759669c60850940da18034c6fe7a7457b$__630e1d809e6040518060a00160405280888152602001438152602001878152602001868152602001858152506040518263ffffffff1660e01b81526004016109d79190611f1d565b60006040518083038186803b1580156109ef57600080fd5b505af4158015610a03573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610a2b9190810190611db2565b90505b949350505050565b610a47610a41610e65565b83610ee2565b610a825760405162461bcd60e51b815260040180806020018281038252603181526020018061224d6031913960400191505060405180910390fd5b610a8e84848484611197565b50505050565b6060610a9f82610e58565b610ada5760405162461bcd60e51b815260040180806020018281038252602f8152602001806121fd602f913960400191505060405180910390fd5b60008281526008602090815260408083208054825160026001831615610100026000190190921691909104601f810185900485028201850190935282815292909190830182828015610b6d5780601f10610b4257610100808354040283529160200191610b6d565b820191906000526020600020905b815481529060010190602001808311610b5057829003601f168201915b505050505090506000610b7e61067c565b9050805160001415610b9257509050610304565b815115610c535780826040516020018083805190602001908083835b60208310610bcd5780518252601f199092019160209182019101610bae565b51815160209384036101000a600019018019909216911617905285519190930192850191508083835b60208310610c155780518252601f199092019160209182019101610bf6565b6001836020036101000a0380198251168184511680821785525050505050509050019250505060405160208183030381529060405292505050610304565b80610c5d856111e9565b6040516020018083805190602001908083835b60208310610c8f5780518252601f199092019160209182019101610c70565b51815160209384036101000a600019018019909216911617905285519190930192850191508083835b60208310610cd75780518252601f199092019160209182019101610cb8565b6001836020036101000a0380198251168184511680821785525050505050509050019250505060405160208183030381529060405292505050919050565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b610d4b610e65565b6001600160a01b0316610d5c610803565b6001600160a01b031614610db7576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6001600160a01b038116610dfc5760405162461bcd60e51b81526004018080602001828103825260268152602001806120596026913960400191505060405180910390fd5b600a546040516001600160a01b038084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3600a80546001600160a01b0319166001600160a01b0392909216919091179055565b60006105646002836112c4565b3390565b600081815260046020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610e9e82610654565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000610564826110df565b6000610eed82610e58565b610f285760405162461bcd60e51b815260040180806020018281038252602c8152602001806120a3602c913960400191505060405180910390fd5b6000610f3383610654565b9050806001600160a01b0316846001600160a01b03161480610f6e5750836001600160a01b0316610f638461039f565b6001600160a01b0316145b80610a2e5750610a2e8185610d15565b826001600160a01b0316610f9182610654565b6001600160a01b031614610fd65760405162461bcd60e51b81526004018080602001828103825260298152602001806121d46029913960400191505060405180910390fd5b6001600160a01b03821661101b5760405162461bcd60e51b815260040180806020018281038252602481526020018061207f6024913960400191505060405180910390fd5b6110268383836104d2565b611031600082610e69565b6001600160a01b038316600090815260016020526040902061105390826112d0565b506001600160a01b038216600090815260016020526040902061107690826112dc565b50611083600282846112e8565b5080826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b600061056183836112fe565b80546001019055565b5490565b6110fd828260405180602001604052806000815250611362565b5050565b61110a82610e58565b6111455760405162461bcd60e51b815260040180806020018281038252602c8152602001806121a8602c913960400191505060405180910390fd5b600082815260086020908152604090912082516104d292840190611adf565b600080808061117386866113b4565b9097909650945050505050565b600061118d84848461142f565b90505b9392505050565b6111a2848484610f7e565b6111ae848484846114f9565b610a8e5760405162461bcd60e51b81526004018080602001828103825260328152602001806120276032913960400191505060405180910390fd5b60608161120e57506040805180820190915260018152600360fc1b6020820152610304565b8160005b811561122657600101600a82049150611212565b60008167ffffffffffffffff8111801561123f57600080fd5b506040519080825280601f01601f19166020018201604052801561126a576020820181803683370190505b50859350905060001982015b83156112bb57600a840660300160f81b8282806001900393508151811061129957fe5b60200101906001600160f81b031916908160001a905350600a84049350611276565b50949350505050565b60006105618383611661565b60006105618383611679565b6000610561838361173f565b600061118d84846001600160a01b038516611789565b815460009082106113405760405162461bcd60e51b81526004018080602001828103825260228152602001806120056022913960400191505060405180910390fd5b82600001828154811061134f57fe5b9060005260206000200154905092915050565b61136c8383611820565b61137960008484846114f9565b6104d25760405162461bcd60e51b81526004018080602001828103825260328152602001806120276032913960400191505060405180910390fd5b8154600090819083106113f85760405162461bcd60e51b815260040180806020018281038252602281526020018061215a6022913960400191505060405180910390fd5b600084600001848154811061140957fe5b906000526020600020906002020190508060000154816001015492509250509250929050565b600082815260018401602052604081205482816114ca5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561148f578181015183820152602001611477565b50505050905090810190601f1680156114bc5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b508460000160018203815481106114dd57fe5b9060005260206000209060020201600101549150509392505050565b600061150d846001600160a01b031661194e565b61151957506001610a2e565b6000611627630a85bd0160e11b61152e610e65565b88878760405160240180856001600160a01b03168152602001846001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561159557818101518382015260200161157d565b50505050905090810190601f1680156115c25780820380516001836020036101000a031916815260200191505b5095505050505050604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b038381831617835250505050604051806060016040528060328152602001612027603291396001600160a01b0388169190611954565b9050600081806020019051602081101561164057600080fd5b50516001600160e01b031916630a85bd0160e11b1492505050949350505050565b60009081526001919091016020526040902054151590565b6000818152600183016020526040812054801561173557835460001980830191908101906000908790839081106116ac57fe5b90600052602060002001549050808760000184815481106116c957fe5b6000918252602080832090910192909255828152600189810190925260409020908401905586548790806116f957fe5b60019003818190600052602060002001600090559055866001016000878152602001908152602001600020600090556001945050505050610564565b6000915050610564565b600061174b8383611661565b61178157508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610564565b506000610564565b6000828152600184016020526040812054806117ee575050604080518082018252838152602080820184815286546001818101895560008981528481209551600290930290950191825591519082015586548684528188019092529290912055611190565b8285600001600183038154811061180157fe5b9060005260206000209060020201600101819055506000915050611190565b6001600160a01b03821661187b576040805162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f2061646472657373604482015290519081900360640190fd5b61188481610e58565b156118d6576040805162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000604482015290519081900360640190fd5b6118e2600083836104d2565b6001600160a01b038216600090815260016020526040902061190490826112dc565b50611911600282846112e8565b5060405181906001600160a01b038416906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b3b151590565b606061118d8484600085856119688561194e565b6119b9576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b600080866001600160a01b031685876040518082805190602001908083835b602083106119f75780518252601f1990920191602091820191016119d8565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114611a59576040519150601f19603f3d011682016040523d82523d6000602084013e611a5e565b606091505b5091509150611a6e828286611a79565b979650505050505050565b60608315611a88575081611190565b825115611a985782518084602001fd5b60405162461bcd60e51b815260206004820181815284516024840152845185939192839260440191908501908083836000831561148f578181015183820152602001611477565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282611b155760008555611b5b565b82601f10611b2e57805160ff1916838001178555611b5b565b82800160010185558215611b5b579182015b82811115611b5b578251825591602001919060010190611b40565b50611b67929150611b6b565b5090565b5b80821115611b675760008155600101611b6c565b6000611b93611b8e84611fb6565b611f92565b9050828152838383011115611ba757600080fd5b828260208301376000602084830101529392505050565b80356001600160a01b038116811461030457600080fd5b600082601f830112611be5578081fd5b61056183833560208501611b80565b600060208284031215611c05578081fd5b61056182611bbe565b60008060408385031215611c20578081fd5b611c2983611bbe565b9150611c3760208401611bbe565b90509250929050565b600080600060608486031215611c54578081fd5b611c5d84611bbe565b9250611c6b60208501611bbe565b9150604084013590509250925092565b60008060008060808587031215611c90578081fd5b611c9985611bbe565b9350611ca760208601611bbe565b925060408501359150606085013567ffffffffffffffff811115611cc9578182fd5b8501601f81018713611cd9578182fd5b611ce887823560208401611b80565b91505092959194509250565b60008060408385031215611d06578182fd5b611d0f83611bbe565b915060208301358015158114611d23578182fd5b809150509250929050565b60008060408385031215611d40578182fd5b611d4983611bbe565b946020939093013593505050565b600060208284031215611d68578081fd5b81356001600160e01b031981168114611190578182fd5b600060208284031215611d90578081fd5b813567ffffffffffffffff811115611da6578182fd5b610a2e84828501611bd5565b600060208284031215611dc3578081fd5b815167ffffffffffffffff811115611dd9578182fd5b8201601f81018413611de9578182fd5b8051611df7611b8e82611fb6565b818152856020838501011115611e0b578384fd5b611e1c826020830160208601611fd8565b95945050505050565b600060208284031215611e36578081fd5b5035919050565b60008060008060808587031215611e52578384fd5b84359350602085013567ffffffffffffffff80821115611e70578485fd5b611e7c88838901611bd5565b94506040870135915080821115611e91578384fd5b611e9d88838901611bd5565b93506060870135915080821115611eb2578283fd5b50611ce887828801611bd5565b60008151808452611ed7816020860160208601611fd8565b601f01601f19169290920160200192915050565b6001600160a01b0391909116815260200190565b901515815260200190565b6000602082526105616020830184611ebf565b6000602082528251602083015260208301516040830152604083015160a06060840152611f4d60c0840182611ebf565b90506060840151601f1980858403016080860152611f6b8383611ebf565b925060808601519150808584030160a086015250611e1c8282611ebf565b90815260200190565b60405181810167ffffffffffffffff81118282101715611fae57fe5b604052919050565b600067ffffffffffffffff821115611fca57fe5b50601f01601f191660200190565b60005b83811015611ff3578181015183820152602001611fdb565b83811115610a8e575050600091015256fe456e756d657261626c655365743a20696e646578206f7574206f6620626f756e64734552433732313a207472616e7366657220746f206e6f6e20455243373231526563656976657220696d706c656d656e7465724f776e61626c653a206e6577206f776e657220697320746865207a65726f20616464726573734552433732313a207472616e7366657220746f20746865207a65726f20616464726573734552433732313a206f70657261746f7220717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76652063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f76656420666f7220616c6c4552433732313a2062616c616e636520717565727920666f7220746865207a65726f20616464726573734552433732313a206f776e657220717565727920666f72206e6f6e6578697374656e7420746f6b656e456e756d657261626c654d61703a20696e646578206f7574206f6620626f756e64734552433732313a20617070726f76656420717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732314d657461646174613a2055524920736574206f66206e6f6e6578697374656e7420746f6b656e4552433732313a207472616e73666572206f6620746f6b656e2074686174206973206e6f74206f776e4552433732314d657461646174613a2055524920717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76616c20746f2063757272656e74206f776e65724552433732313a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564a2646970667358221220181dade0dabaaf585c63455395136a87d2370e46b0fca06bff20a939c51ace8964736f6c63430007060033";

export class Token__factory extends ContractFactory {
  constructor(linkLibraryAddresses: TokenLibraryAddresses, signer?: Signer) {
    super(_abi, Token__factory.linkBytecode(linkLibraryAddresses), signer);
  }

  static linkBytecode(linkLibraryAddresses: TokenLibraryAddresses): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$2759669c60850940da18034c6fe7a7457b\\$__", "g"),
      linkLibraryAddresses["contracts/GenerativeNFT.sol:NFTDescriptor"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  deploy(
    marketplaceAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Token> {
    return super.deploy(marketplaceAddress, overrides || {}) as Promise<Token>;
  }
  getDeployTransaction(
    marketplaceAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(marketplaceAddress, overrides || {});
  }
  attach(address: string): Token {
    return super.attach(address) as Token;
  }
  connect(signer: Signer): Token__factory {
    return super.connect(signer) as Token__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenInterface {
    return new utils.Interface(_abi) as TokenInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Token {
    return new Contract(address, _abi, signerOrProvider) as Token;
  }
}

export interface TokenLibraryAddresses {
  ["contracts/GenerativeNFT.sol:NFTDescriptor"]: string;
}
