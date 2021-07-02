require("@nomiclabs/hardhat-waffle");
let key = require("./key.json");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    testnet: {
      url: `https://api.s0.b.hmny.io`,
      accounts: [`0x${key.HARMONY_PRIVATE_KEY}`],
    },
    mainnet: {
      url: `https://api.s0.t.hmny.io`,
      accounts: [`0x${key.HARMONY_PRIVATE_KEY}`],
    },
  },
};
