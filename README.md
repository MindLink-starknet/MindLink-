
# MindLink is a Web3 emotional journaling web app powered by Starknet, designed to protect users’ emotional privacy while encouraging healthy mental habits.

Users freely write about how they feel. A lightweight AI running locally in the browser detects the emotional tone. The app never stores or sends the original text. Instead, it stores a hash of the text, an emotion code, and the user’s signature on Starknet — ensuring privacy, data ownership, and emotional traceability.

To motivate consistent journaling, users who complete a 30-day streak are rewarded with NFTs representing their emotional journey.

## 🚀 Prerequisites

Before you begin, make sure you have installed:

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [Yarn](https://yarnpkg.com/) (version 3.2.3)
- [Git](https://git-scm.com/)
- [Cairo](https://www.cairo-lang.org/docs/quickstart.html) (for contract development)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/MindLink-starknet/MindLink-.git
cd MindLink
```

2. Install dependencies:
```bash
yarn install
```

3. Configure environment variables:
```bash
# In packages/nextjs
cp .env.example .env

# In packages/snfoundry
cp .env.example .env
```

## 🏗️ Development

### Start Local Network

To start a local Starknet network:

```bash
yarn chain
```

### Compile Contracts

To compile smart contracts:

```bash
yarn compile
```

### Deploy Contracts

To deploy contracts to the local network:

```bash
yarn deploy
```

### Start Frontend Application

To start the Next.js application in development mode:

```bash
yarn start
```

The application will be available at `http://localhost:3000`

## 📝 Available Scripts

- `yarn chain`: Starts the local Starknet network
- `yarn compile`: Compiles smart contracts
- `yarn deploy`: Deploys contracts to the local network
- `yarn start`: Starts the frontend application
- `yarn test`: Runs contract tests
- `yarn format`: Formats the code
- `yarn verify`: Verifies contracts on the block explorer

## 🏗️ Project Structure

```
MindLink/
├── packages/
│   ├── nextjs/          # Next.js Frontend
│   └── snfoundry/       # Smart contracts and deployment scripts
├── .github/             # GitHub Actions configuration
├── .husky/              # Git hooks
└── .yarn/              # Yarn configuration
```

## 👥 Authors

- 
-
-
