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
  "0x60806040523480156200001157600080fd5b506040516200340b3803806200340b8339818101604052810190620000379190620002d2565b6040518060400160405280600981526020017f4f4e4520576f726c6400000000000000000000000000000000000000000000008152506040518060400160405280600581526020017f574f524c44000000000000000000000000000000000000000000000000000000815250620000c3620000b76200013f60201b60201c565b6200014760201b60201c565b8160019080519060200190620000db9291906200020b565b508060029080519060200190620000f49291906200020b565b50505080600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050620003b1565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b828054620002199062000332565b90600052602060002090601f0160209004810192826200023d576000855562000289565b82601f106200025857805160ff191683800117855562000289565b8280016001018555821562000289579182015b82811115620002885782518255916020019190600101906200026b565b5b5090506200029891906200029c565b5090565b5b80821115620002b75760008160009055506001016200029d565b5090565b600081519050620002cc8162000397565b92915050565b600060208284031215620002e557600080fd5b6000620002f584828501620002bb565b91505092915050565b60006200030b8262000312565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600060028204905060018216806200034b57607f821691505b6020821081141562000362576200036162000368565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b620003a281620002fe565b8114620003ae57600080fd5b50565b61304a80620003c16000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c806370a08231116100a2578063a22cb46511610071578063a22cb465146102b8578063b88d4fde146102d4578063c87b56dd146102f0578063e985e9c514610320578063f2fde38b146103505761010b565b806370a0823114610242578063715018a6146102725780638da5cb5b1461027c57806395d89b411461029a5761010b565b806323b872dd116100de57806323b872dd146101aa57806342842e0e146101c657806345576f94146101e25780636352211e146102125761010b565b806301ffc9a71461011057806306fdde0314610140578063081812fc1461015e578063095ea7b31461018e575b600080fd5b61012a60048036038101906101259190611fb8565b61036c565b6040516101379190612445565b60405180910390f35b61014861044e565b6040516101559190612460565b60405180910390f35b6101786004803603810190610173919061204b565b6104e0565b60405161018591906123de565b60405180910390f35b6101a860048036038101906101a39190611f7c565b610565565b005b6101c460048036038101906101bf9190611e76565b61067d565b005b6101e060048036038101906101db9190611e76565b6106dd565b005b6101fc60048036038101906101f7919061200a565b6106fd565b60405161020991906126c2565b60405180910390f35b61022c6004803603810190610227919061204b565b6107dd565b60405161023991906123de565b60405180910390f35b61025c60048036038101906102579190611e11565b61088f565b60405161026991906126c2565b60405180910390f35b61027a610947565b005b6102846109cf565b60405161029191906123de565b60405180910390f35b6102a26109f8565b6040516102af9190612460565b60405180910390f35b6102d260048036038101906102cd9190611f40565b610a8a565b005b6102ee60048036038101906102e99190611ec5565b610c0b565b005b61030a6004803603810190610305919061204b565b610c6d565b6040516103179190612460565b60405180910390f35b61033a60048036038101906103359190611e3a565b610dbf565b6040516103479190612445565b60405180910390f35b61036a60048036038101906103659190611e11565b610e53565b005b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061043757507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610447575061044682610f4b565b5b9050919050565b60606001805461045d90612918565b80601f016020809104026020016040519081016040528092919081815260200182805461048990612918565b80156104d65780601f106104ab576101008083540402835291602001916104d6565b820191906000526020600020905b8154815290600101906020018083116104b957829003601f168201915b5050505050905090565b60006104eb82610fb5565b61052a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161052190612602565b60405180910390fd5b6005600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000610570826107dd565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156105e1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105d890612682565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610600611021565b73ffffffffffffffffffffffffffffffffffffffff16148061062f575061062e81610629611021565b610dbf565b5b61066e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161066590612542565b60405180910390fd5b6106788383611029565b505050565b61068e610688611021565b826110e2565b6106cd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106c4906126a2565b60405180910390fd5b6106d88383836111c0565b505050565b6106f883838360405180602001604052806000815250610c0b565b505050565b6000610707611021565b73ffffffffffffffffffffffffffffffffffffffff166107256109cf565b73ffffffffffffffffffffffffffffffffffffffff161461077b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161077290612622565b60405180910390fd5b610785600861141c565b60006107916008611432565b905061079d3382611440565b6107a7818461145e565b6107d4600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166001610a8a565b80915050919050565b6000806003600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610886576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161087d90612582565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610900576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108f790612562565b60405180910390fd5b600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b61094f611021565b73ffffffffffffffffffffffffffffffffffffffff1661096d6109cf565b73ffffffffffffffffffffffffffffffffffffffff16146109c3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109ba90612622565b60405180910390fd5b6109cd60006114d2565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b606060028054610a0790612918565b80601f0160208091040260200160405190810160405280929190818152602001828054610a3390612918565b8015610a805780601f10610a5557610100808354040283529160200191610a80565b820191906000526020600020905b815481529060010190602001808311610a6357829003601f168201915b5050505050905090565b610a92611021565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610b00576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610af790612502565b60405180910390fd5b8060066000610b0d611021565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff16610bba611021565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051610bff9190612445565b60405180910390a35050565b610c1c610c16611021565b836110e2565b610c5b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c52906126a2565b60405180910390fd5b610c6784848484611596565b50505050565b6060610c7882610fb5565b610cb7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cae906125e2565b60405180910390fd5b6000600760008481526020019081526020016000208054610cd790612918565b80601f0160208091040260200160405190810160405280929190818152602001828054610d0390612918565b8015610d505780601f10610d2557610100808354040283529160200191610d50565b820191906000526020600020905b815481529060010190602001808311610d3357829003601f168201915b505050505090506000610d616115f2565b9050600081511415610d77578192505050610dba565b600082511115610dac578082604051602001610d949291906123ba565b60405160208183030381529060405292505050610dba565b610db584611609565b925050505b919050565b6000600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b610e5b611021565b73ffffffffffffffffffffffffffffffffffffffff16610e796109cf565b73ffffffffffffffffffffffffffffffffffffffff1614610ecf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ec690612622565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610f3f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f36906124a2565b60405180910390fd5b610f48816114d2565b50565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166003600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b600033905090565b816005600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff1661109c836107dd565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60006110ed82610fb5565b61112c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161112390612522565b60405180910390fd5b6000611137836107dd565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614806111a657508373ffffffffffffffffffffffffffffffffffffffff1661118e846104e0565b73ffffffffffffffffffffffffffffffffffffffff16145b806111b757506111b68185610dbf565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff166111e0826107dd565b73ffffffffffffffffffffffffffffffffffffffff1614611236576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161122d90612642565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156112a6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161129d906124e2565b60405180910390fd5b6112b18383836116b0565b6112bc600082611029565b6001600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461130c919061282e565b925050819055506001600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461136391906127a7565b92505081905550816003600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b6001816000016000828254019250508190555050565b600081600001549050919050565b61145a8282604051806020016040528060008152506116b5565b5050565b61146782610fb5565b6114a6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161149d906125a2565b60405180910390fd5b806007600084815260200190815260200160002090805190602001906114cd929190611c35565b505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6115a18484846111c0565b6115ad84848484611710565b6115ec576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115e390612482565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b606061161482610fb5565b611653576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161164a90612662565b60405180910390fd5b600061165d6115f2565b9050600081511161167d57604051806020016040528060008152506116a8565b80611687846118a7565b6040516020016116989291906123ba565b6040516020818303038152906040525b915050919050565b505050565b6116bf8383611a54565b6116cc6000848484611710565b61170b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161170290612482565b60405180910390fd5b505050565b60006117318473ffffffffffffffffffffffffffffffffffffffff16611c22565b1561189a578373ffffffffffffffffffffffffffffffffffffffff1663150b7a0261175a611021565b8786866040518563ffffffff1660e01b815260040161177c94939291906123f9565b602060405180830381600087803b15801561179657600080fd5b505af19250505080156117c757506040513d601f19601f820116820180604052508101906117c49190611fe1565b60015b61184a573d80600081146117f7576040519150601f19603f3d011682016040523d82523d6000602084013e6117fc565b606091505b50600081511415611842576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161183990612482565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161491505061189f565b600190505b949350505050565b606060008214156118ef576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050611a4f565b600082905060005b6000821461192157808061190a9061297b565b915050600a8261191a91906127fd565b91506118f7565b60008167ffffffffffffffff811115611963577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f1916602001820160405280156119955781602001600182028036833780820191505090505b5090505b60008514611a48576001826119ae919061282e565b9150600a856119bd91906129c4565b60306119c991906127a7565b60f81b818381518110611a05577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a85611a4191906127fd565b9450611999565b8093505050505b919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611ac4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611abb906125c2565b60405180910390fd5b611acd81610fb5565b15611b0d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b04906124c2565b60405180910390fd5b611b19600083836116b0565b6001600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611b6991906127a7565b92505081905550816003600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b600080823b905060008111915050919050565b828054611c4190612918565b90600052602060002090601f016020900481019282611c635760008555611caa565b82601f10611c7c57805160ff1916838001178555611caa565b82800160010185558215611caa579182015b82811115611ca9578251825591602001919060010190611c8e565b5b509050611cb79190611cbb565b5090565b5b80821115611cd4576000816000905550600101611cbc565b5090565b6000611ceb611ce684612702565b6126dd565b905082815260208101848484011115611d0357600080fd5b611d0e8482856128d6565b509392505050565b6000611d29611d2484612733565b6126dd565b905082815260208101848484011115611d4157600080fd5b611d4c8482856128d6565b509392505050565b600081359050611d6381612fb8565b92915050565b600081359050611d7881612fcf565b92915050565b600081359050611d8d81612fe6565b92915050565b600081519050611da281612fe6565b92915050565b600082601f830112611db957600080fd5b8135611dc9848260208601611cd8565b91505092915050565b600082601f830112611de357600080fd5b8135611df3848260208601611d16565b91505092915050565b600081359050611e0b81612ffd565b92915050565b600060208284031215611e2357600080fd5b6000611e3184828501611d54565b91505092915050565b60008060408385031215611e4d57600080fd5b6000611e5b85828601611d54565b9250506020611e6c85828601611d54565b9150509250929050565b600080600060608486031215611e8b57600080fd5b6000611e9986828701611d54565b9350506020611eaa86828701611d54565b9250506040611ebb86828701611dfc565b9150509250925092565b60008060008060808587031215611edb57600080fd5b6000611ee987828801611d54565b9450506020611efa87828801611d54565b9350506040611f0b87828801611dfc565b925050606085013567ffffffffffffffff811115611f2857600080fd5b611f3487828801611da8565b91505092959194509250565b60008060408385031215611f5357600080fd5b6000611f6185828601611d54565b9250506020611f7285828601611d69565b9150509250929050565b60008060408385031215611f8f57600080fd5b6000611f9d85828601611d54565b9250506020611fae85828601611dfc565b9150509250929050565b600060208284031215611fca57600080fd5b6000611fd884828501611d7e565b91505092915050565b600060208284031215611ff357600080fd5b600061200184828501611d93565b91505092915050565b60006020828403121561201c57600080fd5b600082013567ffffffffffffffff81111561203657600080fd5b61204284828501611dd2565b91505092915050565b60006020828403121561205d57600080fd5b600061206b84828501611dfc565b91505092915050565b61207d81612862565b82525050565b61208c81612874565b82525050565b600061209d82612764565b6120a7818561277a565b93506120b78185602086016128e5565b6120c081612ab1565b840191505092915050565b60006120d68261276f565b6120e0818561278b565b93506120f08185602086016128e5565b6120f981612ab1565b840191505092915050565b600061210f8261276f565b612119818561279c565b93506121298185602086016128e5565b80840191505092915050565b600061214260328361278b565b915061214d82612ac2565b604082019050919050565b600061216560268361278b565b915061217082612b11565b604082019050919050565b6000612188601c8361278b565b915061219382612b60565b602082019050919050565b60006121ab60248361278b565b91506121b682612b89565b604082019050919050565b60006121ce60198361278b565b91506121d982612bd8565b602082019050919050565b60006121f1602c8361278b565b91506121fc82612c01565b604082019050919050565b600061221460388361278b565b915061221f82612c50565b604082019050919050565b6000612237602a8361278b565b915061224282612c9f565b604082019050919050565b600061225a60298361278b565b915061226582612cee565b604082019050919050565b600061227d602e8361278b565b915061228882612d3d565b604082019050919050565b60006122a060208361278b565b91506122ab82612d8c565b602082019050919050565b60006122c360318361278b565b91506122ce82612db5565b604082019050919050565b60006122e6602c8361278b565b91506122f182612e04565b604082019050919050565b600061230960208361278b565b915061231482612e53565b602082019050919050565b600061232c60298361278b565b915061233782612e7c565b604082019050919050565b600061234f602f8361278b565b915061235a82612ecb565b604082019050919050565b600061237260218361278b565b915061237d82612f1a565b604082019050919050565b600061239560318361278b565b91506123a082612f69565b604082019050919050565b6123b4816128cc565b82525050565b60006123c68285612104565b91506123d28284612104565b91508190509392505050565b60006020820190506123f36000830184612074565b92915050565b600060808201905061240e6000830187612074565b61241b6020830186612074565b61242860408301856123ab565b818103606083015261243a8184612092565b905095945050505050565b600060208201905061245a6000830184612083565b92915050565b6000602082019050818103600083015261247a81846120cb565b905092915050565b6000602082019050818103600083015261249b81612135565b9050919050565b600060208201905081810360008301526124bb81612158565b9050919050565b600060208201905081810360008301526124db8161217b565b9050919050565b600060208201905081810360008301526124fb8161219e565b9050919050565b6000602082019050818103600083015261251b816121c1565b9050919050565b6000602082019050818103600083015261253b816121e4565b9050919050565b6000602082019050818103600083015261255b81612207565b9050919050565b6000602082019050818103600083015261257b8161222a565b9050919050565b6000602082019050818103600083015261259b8161224d565b9050919050565b600060208201905081810360008301526125bb81612270565b9050919050565b600060208201905081810360008301526125db81612293565b9050919050565b600060208201905081810360008301526125fb816122b6565b9050919050565b6000602082019050818103600083015261261b816122d9565b9050919050565b6000602082019050818103600083015261263b816122fc565b9050919050565b6000602082019050818103600083015261265b8161231f565b9050919050565b6000602082019050818103600083015261267b81612342565b9050919050565b6000602082019050818103600083015261269b81612365565b9050919050565b600060208201905081810360008301526126bb81612388565b9050919050565b60006020820190506126d760008301846123ab565b92915050565b60006126e76126f8565b90506126f3828261294a565b919050565b6000604051905090565b600067ffffffffffffffff82111561271d5761271c612a82565b5b61272682612ab1565b9050602081019050919050565b600067ffffffffffffffff82111561274e5761274d612a82565b5b61275782612ab1565b9050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b60006127b2826128cc565b91506127bd836128cc565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156127f2576127f16129f5565b5b828201905092915050565b6000612808826128cc565b9150612813836128cc565b92508261282357612822612a24565b5b828204905092915050565b6000612839826128cc565b9150612844836128cc565b925082821015612857576128566129f5565b5b828203905092915050565b600061286d826128ac565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b838110156129035780820151818401526020810190506128e8565b83811115612912576000848401525b50505050565b6000600282049050600182168061293057607f821691505b6020821081141561294457612943612a53565b5b50919050565b61295382612ab1565b810181811067ffffffffffffffff8211171561297257612971612a82565b5b80604052505050565b6000612986826128cc565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156129b9576129b86129f5565b5b600182019050919050565b60006129cf826128cc565b91506129da836128cc565b9250826129ea576129e9612a24565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b7f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760008201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000602082015250565b7f4552433732313a2062616c616e636520717565727920666f7220746865207a6560008201527f726f206164647265737300000000000000000000000000000000000000000000602082015250565b7f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460008201527f656e7420746f6b656e0000000000000000000000000000000000000000000000602082015250565b7f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60008201527f6578697374656e7420746f6b656e000000000000000000000000000000000000602082015250565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b7f45524337323155524953746f726167653a2055524920717565727920666f722060008201527f6e6f6e6578697374656e7420746f6b656e000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960008201527f73206e6f74206f776e0000000000000000000000000000000000000000000000602082015250565b7f4552433732314d657461646174613a2055524920717565727920666f72206e6f60008201527f6e6578697374656e7420746f6b656e0000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60008201527f776e6572206e6f7220617070726f766564000000000000000000000000000000602082015250565b612fc181612862565b8114612fcc57600080fd5b50565b612fd881612874565b8114612fe357600080fd5b50565b612fef81612880565b8114612ffa57600080fd5b50565b613006816128cc565b811461301157600080fd5b5056fea2646970667358221220c74d5f3c91e3ec72ba4ada8e37c10c571629105b9277c23439ff60a43e295cfd64736f6c63430008040033";

export class Token__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
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