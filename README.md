# Deploy your ERC-20 token on Polygon

### Before Starting

Grab some funds from the faucet,

https://faucet.polygon.technology/

https://mumbaifaucet.com/

### Setting up the project

```
git clone https://github.com/alikonuk1/polygon-erc20.git
```

```
npm install
```

```
npx hardhat compile
```

```
npx hardhat run scripts/deploy.js --network mumbai
```

```
npx hardhat verify <deployed_contracts_address> --contract contracts/ALI.sol:ALI --network mumbai
```

