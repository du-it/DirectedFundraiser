# 🎯 DirectedFundraiser – Zweckgebundenes Fundraising per Smart Contract


## ⚡ Deployment mit Remix (Sepolia Testnet)

### Voraussetzungen
- MetaMask Plugin im Browser installiert und entsperrt
- Sepolia Test Network in MetaMask aktiviert
- SepoliaETH vom Faucet (z.\_B. [Alchemy Faucet](https://sepoliafaucet.com), [Google Cloud Web3](https://cloud.google.com/application/web3/faucet/ethereum/sepolia), [ETH Faucet](https://testnet.help/en/ethfaucet/sepolia#log))

### Schritte
1. Remix öffnen und Contract kompilieren
2. „Injected Provider – MetaMask“ auswählen
3. Constructor-Parameter setzen:
   ```plaintext
   0x..., 10000000000000000000
   ```
   → Empfängeradresse, Zielbetrag in Wei (10 ETH)
4. Gas Limit: „Estimated Gas“ verwenden
5. Transaktion in MetaMask bestätigen

### Ergebnis
Der Contract wurde erfolgreich über [Remix IDE](https://remix.ethereum.org) auf dem Sepolia-Testnetz deployed und hat eine eigene 
Netzwerk-Adresse erhalten.  
Der delpoyte Smart Contract kann unter [Etherscan](https://sepolia.etherscan.io/) eingesehen werden.

![Directed_FundRaiser Smart Contract](https://github.com/du-it/DirectedFundraiser/blob/main/images/Etherscan%20-%20Smart%20Contract%20deployed.png)

---

## 🔍 Funktionen
Folgende Funktionen des Smart Contracts können nun verwendet werden:  
- `donate(string message)` – Spenden mit Nachricht
- `getProgress()` – Fortschritt in Prozent
- `withdrawFunds()` – Auszahlung nach Zielerreichung

---
