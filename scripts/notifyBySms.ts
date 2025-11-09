import twilio from "twilio";
import { ethers } from "ethers";
import { loadEnv } from "../../../scripts/loadEnv"; // Lädt .env automatisch aus Projekt-Root

const client = twilio(process.env.TWILIO_SID!, process.env.TWILIO_TOKEN!);

export async function sendSMS(to: string, donor: string, amount: bigint) {
  await client.messages.create({
    body: `Neue Spende von ${donor}: ${ethers.formatEther(amount)} ETH`,
    from: process.env.TWILIO_FROM!,
    to,
  });
}