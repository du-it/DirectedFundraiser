# 🎯 DirectedFundraiser – Zweckgebundenes Fundraising per Smart Contract

---

## ⚡ Deployment mit Remix (Sepolia Testnet)

Der Contract wurde erfolgreich über [Remix IDE](https://remix.ethereum.org) auf dem Sepolia-Testnetz deployed.

### Voraussetzungen
- MetaMask Plugin im Browser installiert und entsperrt
- Sepolia Test Network in MetaMask aktiviert
- SepoliaETH vom Faucet (z.\_B. [Alchemy Faucet](https://sepoliafaucet.com))

### Schritte
1. Remix öffnen und Contract kompilieren
2. „Injected Provider – MetaMask“ auswählen
3. Constructor-Parameter setzen:
   ```plaintext
   0x807c63f806e839465ef239613539b3ca57a7fa1a8, 10000000000000000000
   ```
   → Empfängeradresse, Zielbetrag in Wei (10 ETH)
4. Gas Limit: „Estimated Gas“ verwenden
5. Transaktion in MetaMask bestätigen

### Deployment-Historie
- ✅ Sepolia Deployment am 7. November 2025  
  - Contract-Adresse: `0x...`  
  - Zielbetrag: `10 ETH`  
  - Empfänger: `0x807c63f806e839465ef239613539b3ca57a7fa1a8`

---

## 🔍 Funktionen
- `donate(string message)` – Spenden mit Nachricht
- `getProgress()` – Fortschritt in Prozent
- `withdrawFunds()` – Auszahlung nach Zielerreichung

---
