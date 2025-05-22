const hre = require("hardhat");

async function main() {
  const HelloPolygon = await hre.ethers.getContractFactory("HelloPolygon");
  const contract = await HelloPolygon.deploy();
  await contract.waitForDeployment();
  console.log(`HelloPolygon deployed to: ${contract.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
