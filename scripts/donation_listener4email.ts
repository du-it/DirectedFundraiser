import { ethers } from "ethers";
import { sendEmail } from "./notifyByEmail";


const provider = new ethers.JsonRpcProvider("https://mainnet.infura.io/v3/b01d342827ae465ca56906b069c9eefc");
const contractAddress = "0xeA1B9dfe31F56B78900c4d0E6682f77e939c5794";
const abi = [ // Nur das Event reicht
  "event DonationReceived(address indexed donor, uint amount, string message, uint timestamp)"
];

const contract = new ethers.Contract(contractAddress, abi, provider);

contract.on("DonationReceived", async (donor, amount, message, timestamp) => {
  console.log(`💰 Neue Spende von ${donor}: ${ethers.formatEther(amount)} ETH`);

  const email = "beneficiary@example.com";
  const phone = "+491751234567";

  await sendEmail(email, donor, amount, message);
});