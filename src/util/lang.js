export default {
  header: {
    company: 'Mother Protocol',
    connect: 'Connect Wallet',
  },
  hero: {
    title: 'We have $2,582,094.44 in funds invested in DeFi pools.',
    markets: 'See Markets',
  },
  balances: {
    netLend: 'Lend Balance',
    netBorrow: 'Borrow Balance',
    netAPY: 'Net APY',
    limit: 'Borrow Limit',
  },
  markets: {
    title: '',
    assets: 'Assets',
    APY: 'APY',
    wallet: 'Wallet',
    collateral: 'Collateral',
    liquidity: 'Liquidity',
    lendAssets: [
      { name: 'UBE', ticker: 'UBE', lendAPY: '0%', wallet: '0', liquidity: '561.14' },
      { name: 'Celo', ticker: 'CELO', lendAPY: '0%', wallet: '0', liquidity: '310.16' },
      { name: 'US Dollar', ticker: 'USD', lendAPY: '0%', wallet: '0', liquidity: '220.39' },
      { name: 'Euro', ticker: 'EUR', lendAPY: '0%', wallet: '0', liquidity: '804.32' },
    ],
    lendMetrics: ['Asset', 'APY', 'Wallet', 'Collateral'],
    borrowAssets: [
      { name: 'UBE', ticker: 'UBE', borrowAPY: '0%', wallet: '0', liquidity: '127.21' },
      { name: 'Celo', ticker: 'CELO', borrowAPY: '0%', wallet: '0', liquidity: '623.66' },
      { name: 'US Dollar', ticker: 'USD', borrowAPY: '0%', wallet: '0', liquidity: '526.2' },
      { name: 'Euro', ticker: 'EUR', borrowAPY: '0%', wallet: '0', liquidity: '794.26' },
    ],
    borrowMetrics: ['Asset', 'APY', 'Wallet', 'Liquidity'],
  },
  footer: {
    copyright: '(c) Mother Protocol, Inc.',
    connect: 'Connect Wallet',
    social: [
      { name: 'Discord', url: 'https://discord.com/mother-protocol', icon: 'FaDiscord' },
      { name: 'Github', url: 'https://github.com/kylesparrow/mother-protocol', icon: 'FaGithub' },
      { name: 'Twitter', url: 'https://twitter.com/MotherCelo', icon: 'FaTwitter' },
    ],
  },
}
