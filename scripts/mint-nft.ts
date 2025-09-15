import hre from "hardhat";

async function main() {
  const contractAddress = "0x2Ea8946631e216dfC3c2330d464cF1dF0201424B";
  const recipientAddress = "0x9B63528D2335ac3f6a2de10436508848B217003E";
  const tokenURI = "ipfs://bafkreig4mj6duyumpjgzrkn54bffcqztlpvp6nu2spbr47zx5tg2sf7vca";

  console.log("Connecting to the PoANFT contract...");

  // We are accessing ethers through the Hardhat Runtime Environment (hre)
  const poaNft = await hre.ethers.getContractAt("PoANFT", contractAddress);

  console.log(`Minting NFT for ${recipientAddress}...`);
  const tx = await poaNft.safeMint(recipientAddress, tokenURI);
  
  await tx.wait(); // Wait for the transaction to be mined

  console.log(`✅ NFT successfully minted! Transaction Hash: ${tx.hash}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});