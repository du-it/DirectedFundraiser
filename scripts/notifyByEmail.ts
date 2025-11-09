import sgMail from "@sendgrid/mail";
import { ethers } from "ethers";
import { loadEnv } from "../../../scripts/loadEnv"; // lädt .env automatisch aus Projekt-Root

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function sendEmail(to: string, donor: string, amount: bigint, message: string) {
  const msg = {
    to,
    from: "noreply@fundraiser.org",
    subject: "Neue Spende erhalten",
    text: `Spender: ${donor}\nBetrag: ${ethers.formatEther(amount)} ETH\nNachricht: ${message}`,
  };
  await sgMail.send(msg);
}