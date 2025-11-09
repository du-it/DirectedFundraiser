// D:\develop\DLT\Ethereum\scripts\deploy_DirectFundraiser.ts

import { ethers } from "hardhat"; 

async function main() {
    console.log("--- Deployment gestartet ---");
    
    // 1. Signer abrufen (Sollte jetzt dank sauberer Installation funktionieren!)
    const [deployer] = await ethers.getSigners(); 
    console.log(`Deploying contract with the account: ${deployer.address}`);

    // 2. Contract Factory abrufen
    // Hardhat findet "DirectedFundraiser" automatisch in contracts/DirectFundraiser/
    const Contract = await ethers.getContractFactory("DirectedFundraiser");

    // 3. Deployment-Argumente definieren
    const beneficiary = "0x807c3F806e839465EF239613539b3cA57a7fA1a8";
    const goalAmount = ethers.parseEther("10.0"); // 10 ETH in Wei

    console.log(`Beneficiary set to: ${beneficiary}`);
    console.log(`Goal Amount set to (10 ETH in Wei): ${goalAmount.toString()}`);

	// 4. Contract deployen (Das 'await' hier sendet die Transaktion)
    const description = "Diese Spendenaktion unterstützt den Wiederaufbau der Grundschule in Schönwalde-Glien nach dem Hochwasser im Oktober 2025.";
    const contract = await Contract.deploy(beneficiary, goalAmount, description);
    
    // 💡 NEU: Auf das Transaction Receipt warten, um die Adresse zu extrahieren.
    const receipt = await contract.deploymentTransaction()?.wait();
    const contractAddress = receipt?.contractAddress; 

    // Sicherstellen, dass die Adresse existiert
    if (!contractAddress) {
        throw new Error("Deployment successful, but address could not be retrieved from receipt.");
    }

    console.log(`\n✅ DirectedFundraiser deployed to: ${contractAddress}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});