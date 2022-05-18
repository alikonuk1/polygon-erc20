# Deploy your ERC-20 token on Polygon

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