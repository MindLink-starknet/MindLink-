
# MindLink is a web and mobile application where users record how they feel, analyze their emotions using lightweight on-device AI, and store a summary on the Starknet blockchain.
The original content is never exposed: only a hash of the text, the emotion code, and the user's signature are saved, ensuring complete privacy and emotional traceability.
Additionally, it optionally connects with Pragma Feeds to explore correlations between collective emotions and market events such as BTC volatility.

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

- [@mildredbonillav]([https://github.com/usuario1](https://github.com/mildredbonillav))

-
-
