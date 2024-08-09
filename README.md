# KriyaMiniDEX

## Overview

This project is a Telegram Mini App that integrates with Sui blockchain using ZK login for wallet creation. It provides functionality for wallet management, token swapping, liquidity provision, staking, and portfolio overview using KriyaDex.

## Features

- Sui ZK Login integration for secure wallet creation
- Wallet management (balance check, transaction history)
- Token swapping interface
- Liquidity provision and removal
- Staking and unstaking capabilities
- Portfolio overview

## Technology Stack

- React
- TypeScript
- Vite
- Sui SDK
- Telegram Mini App API

## Project Structure

```
.
├── public
│   └── tonconnect-manifest.json
├── src
│   ├── components
│   │   ├── common
│   │   ├── layout
│   │   ├── wallet
│   │   ├── swap
│   │   ├── liquidity
│   │   ├── staking
│   │   └── portfolio
│   ├── pages
│   ├── services
│   ├── hooks
│   ├── contexts
│   ├── utils
│   ├── styles
│   ├── constants
│   ├── types
│   ├── App.tsx
│   └── main.tsx
├── .env
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Setup and Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/telegram-mini-app-sui.git
   cd telegram-mini-app-sui
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add necessary environment variables:
   ```
   VITE_TELEGRAM_BOT_TOKEN=your_telegram_bot_token
   VITE_SUI_NETWORK=devnet
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Build for production:
   ```
   npm run build
   ```

## Configuration

### Telegram Mini App

1. Create a new bot on Telegram using BotFather.
2. Set up your Mini App in BotFather and obtain the necessary credentials.
3. Update the `tonconnect-manifest.json` file in the `public` directory with your app's information.

### Sui ZK Login

1. Set up a Sui wallet and obtain necessary credentials for ZK login integration.
2. Update the `src/services/suiZKLogin.ts` file with your Sui ZK login configuration.

## Usage

1. Open the Telegram bot associated with this Mini App.
2. Start the Mini App through the bot interface.
3. Create a wallet using Sui ZK login or connect an existing wallet.
4. Explore features such as token swapping, liquidity provision, and staking.

## Development

### Key Components

- `src/components/wallet/WalletCreation.tsx`: Handles Sui ZK login and wallet creation process.
- `src/services/suiZKLogin.ts`: Implements Sui ZK login logic.
- `src/services/telegramWebApp.ts`: Interfaces with Telegram Mini App API.
- `src/hooks/useWallet.ts`: Custom hook for wallet-related operations.
- `src/contexts/WalletContext.tsx`: Provides wallet state across the app.

### Adding New Features

1. Create new components in the appropriate subdirectory under `src/components`.
2. Add new pages in the `src/pages` directory.
3. Implement new services or hooks as needed.
4. Update the main `App.tsx` and routing to include new pages or features.

## Testing

Run tests using:

```
npm run test
```

## Deployment

1. Build the project:
   ```
   npm run build
   ```

2. Deploy the contents of the `dist` directory to your chosen hosting platform.

3. Update your Telegram bot with the new Mini App URL.

## Contributing

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with descriptive commit messages.
4. Push your changes to your fork.
5. Create a pull request to the main repository.

## License

[MIT License](LICENSE)

## Support

For issues, feature requests, or questions, please open an issue in the GitHub repository or contact the maintainers directly.

---
