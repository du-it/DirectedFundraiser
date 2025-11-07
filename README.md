# 🎯 DirectedFundraiser – Zweckgebundenes Fundraising per Smart Contract


Dieses Projekt zeigt, wie man mit Solidity einen transparenten, zielgerichteten Spendenprozess auf Ethereum abbildet.

## 🚀 Was macht der Contract?
- 📥 Empfängt Spenden von beliebigen Adressen
- 🎯 Verfolgt einen definierten Zielbetrag
- 📊 Zeigt den Fortschritt in Prozent
- ⏳ Akzeptiert Spenden nur im festgelegten Zeitraum
- 🔐 Nur der Empfänger kann nach Ablauf die Mittel abheben

---

## 🔍 Features im Detail
- `donate(string message)` – Spendenfunktion mit optionaler Nachricht
- `getProgress() ` – Prozentanzeige des Spendenfortschritts
- `isGoalReached() ` – prüft, ob Zielbetrag erreicht wurde
- `withdrawFunds() ` – ermöglicht dem Empfänger die Auszahlung nach Ablauf
- `Donation[]` – vollständige Spendenhistorie inkl. Zeitstempel


Dieses Projekt demonstriert:
- saubere Rollenlogik (Initiator, Beneficiary, Spender)
- reproduzierbare Workflows für Solidity-Entwicklung
- Event-basierte Architektur für spätere Benachrichtigungen (z. B. E-Mail/SMS)
- klare Trennung von On-Chain und Off-Chain Logik

## 🧪 Testnet / Remix
Der Contract ist für Remix optimiert und kann direkt dort getestet werden.  
Ein Deployment kann auf Sepolia oder andere Testnets erfolgen.  
👉 Für Entwicklung mit Remix siehe [`README.remix.md`](./README.remix.md)  
👉 Für lokale Entwicklung siehe [`README.remix.md` auf GitHub](https://github.com/du-it/DirectedFundraiser/blob/main/README.remix.md)

## 📦 Deployment-Skript (optional)
Das Hardhat-Skript zur automatisierten Bereitstellung ist unter *`scripts/deploy_directedFundraiser.ts`** hinterlegt.  
👉 Für lokale Entwicklung mit Hardhat siehe [`README.hardhat.md`](./README.hardhat.md)  
👉 Für lokale Entwicklung siehe [`README.hardhat.md` auf GitHub](https://github.com/du-it/DirectedFundraiser/blob/main/README.hardhat.md)

## 🧠 Weiterentwicklung
Geplant ist die Ergänzung eines Skripts für ein geschedultes Deployment auf eine Blockchain – z. B. zeitgesteuert oder ereignisgesteuert.  
Das Projekt dient als Grundlage für weitere Experimente mit Off-Chain-Triggern, Event-Listenern und automatisierter Bereitstellung.

## 📘 Hintergrund
Dieses Repository ist Teil meines autodidaktischen Lernwegs rund um Smart Contracts, Solidity und Blockchain-Entwicklung.
Der Contract entstand im Rahmen praktischer Experimente mit Remix und dient der technischen Vertiefung sowie der Vorbereitung auf reale Anwendungsszenarien.

 ## 📬 Kontakt
Fragen, Feedback oder Interesse? Gerne per GitHub oder direkt.
