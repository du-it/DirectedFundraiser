# 🎯 DirectedFundraiser – Zweckgebundenes Fundraising per Smart Contract


## ⚙️ Setup und Ausführung (Hardhat Monorepo)

Dieses Projekt verwendet eine **zentrale Hardhat-Struktur** (Monorepo), um zukünftige Contracts im selben Repository zu verwalten. Die folgenden Schritte beschreiben, wie man das Projekt lokal einrichtet und den Contract deployt.

### Voraussetzungen
1.  **Node.js LTS v20** oder neuer (Node.js LTS v20 wird empfohlen).
2.  **npm** (Node Package Manager).

### 1. Struktur und Dateien anlegen

Navigieren Sie in das Stammverzeichnis (`/Ethereum`) und erstellen Sie die notwendige, Hardhat-konforme Monorepo-Struktur:

```
# Basisstruktur initialisieren und Ordner erstellen
npm init -y
mkdir contracts
mkdir scripts
mkdir contracts/DirectFundraiser
```

> **Wichtig:** Ihr Contract (`DirectedFundraiser.sol`) muss in `contracts/DirectFundraiser/` und Ihr Deployment-Skript (`deploy_directedFundraiser.ts`) in `scripts/` liegen.

### 2. Hardhat und Tools installieren

Installieren Sie Hardhat (v2.22.0), die kompatiblen Ethers v6 Plugins (`@nomicfoundation`) sowie TypeScript für die Skriptausführung:

```
# Hardhat Core und kompatible Plugins (Ethers v6) installieren
npm install --save-dev hardhat@2.22.0 @nomicfoundation/hardhat-ethers@3.1.2 @nomicfoundation/hardhat-chai-matchers@2.1.0

# TypeScript und ts-node für die Skriptausführung installieren
npm install --save-dev typescript @types/node ts-node
```

### 3. Konfigurationsdateien hinzufügen

Erstellen Sie die folgenden Konfigurationsdateien im Stammverzeichnis (`/Ethereum`):

#### A. `hardhat.config.ts`

Diese Konfiguration nutzt den Standardpfad `./contracts` und bindet die Ethers v6 Plugins ein:

```typescript
// hardhat.config.ts
import type { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-ethers"; 
import "@nomicfoundation/hardhat-chai-matchers";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.20", 
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  
  paths: {
    sources: "./contracts", 
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",
    },
  },
};

export default config;
```

#### B. `tsconfig.json`

Diese TypeScript-Konfiguration behebt Kompatibilitätsprobleme mit Node.js v20:

```json
// tsconfig.json
{
  "compilerOptions": {
    "module": "NodeNext",
    "moduleResolution": "NodeNext", 
    "target": "es2020",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  },
  "include": ["./scripts", "./test", "./typechain-types"],
  "files": ["./hardhat.config.ts"]
}
```

### 4. Contract Deployment (Lokales Testnetz)

Führen Sie das vorbereitete Deployment-Skript aus, um den Contract auf dem lokalen Hardhat Network bereitzustellen:

```
npx hardhat run scripts/deploy_directedFundraiser.ts
```

**Erwartete Ausgabe:** Das Skript kompiliert den Contract und gibt die Adresse aus, unter der der `DirectedFundraiser` Contract deployt wurde.

```
...
✅ DirectedFundraiser deployed to: 0x...
```

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

## 📦 Deployment-Skript (optional)
Das Hardhat-Skript zur automatisierten Bereitstellung ist unter *`scripts/deploy_directedFundraiser.ts`** hinterlegt.

## 🧠 Weiterentwicklung
Geplant ist die Ergänzung eines Skripts für ein geschedultes Deployment auf eine Blockchain – z. B. zeitgesteuert oder ereignisgesteuert.  
Das Projekt dient als Grundlage für weitere Experimente mit Off-Chain-Triggern, Event-Listenern und automatisierter Bereitstellung.

## 📘 Hintergrund
Dieses Repository ist Teil meines autodidaktischen Lernwegs rund um Smart Contracts, Solidity und Blockchain-Entwicklung.
Der Contract entstand im Rahmen praktischer Experimente mit Remix und dient der technischen Vertiefung sowie der Vorbereitung auf reale Anwendungsszenarien.

 ## 📬 Kontakt
Fragen, Feedback oder Interesse? Gerne per GitHub oder direkt.
