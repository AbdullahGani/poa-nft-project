import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PoANFTModule = buildModule("PoANFTModule", (m) => {
  // Get the deployer's address to set as the initial owner
  const initialOwner = m.getAccount(0);

  // Deploy the PoANFT contract, passing the initialOwner to the constructor
  const poaNft = m.contract("PoANFT", [initialOwner]);

  return { poaNft };
});

export default PoANFTModule;