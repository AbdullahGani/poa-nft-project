// hardhat.config.ts

import "@nomicfoundation/hardhat-toolbox";
import { HardhatUserConfig } from "hardhat/config";
import "dotenv/config";

// Check for environment variables
const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL;
if (!SEPOLIA_RPC_URL) {
  throw new Error("Missing SEPOLIA_RPC_URL in .env file");
}

const PRIVATE_KEY = process.env.PRIVATE_KEY;
if (!PRIVATE_KEY) {
  throw new Error("Missing PRIVATE_KEY in .env file");
}

const config: HardhatUserConfig = {
  solidity: "0.8.24", // Or "0.8.28"
  networks: {
    sepolia: {
      // THE FIX IS HERE: Add the 'type' property
      type: "http", 
      url: SEPOLIA_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 11155111,
    },
  },
};

export default config;