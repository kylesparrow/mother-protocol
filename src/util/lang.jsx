import React from 'react'
import { FaDiscord, FaMedium, FaGithub, FaTwitter } from 'react-icons/fa'
import ToggleButton from '../components/shared/ToggleButton'

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
      { name: 'UBE', ticker: 'UBE', APY: '0%', wallet: '0', liquidity: <ToggleButton /> },
      { name: 'Celo', ticker: 'CELO', APY: '0%', wallet: '0', liquidity: <ToggleButton /> },
      { name: 'US Dollar', ticker: 'USD', APY: '0%', wallet: '0', liquidity: <ToggleButton /> },
      { name: 'Euro', ticker: 'EUR', APY: '0%', wallet: '0', liquidity: <ToggleButton /> },
    ],
    lendMetrics: ['Asset', 'APY', 'Wallet', 'Collateral'],
    borrowAssets: [
      { name: 'UBE', ticker: 'UBE', APY: '0%', wallet: '0', liquidity: '127.21' },
      { name: 'Celo', ticker: 'CELO', APY: '0%', wallet: '0', liquidity: '623.66' },
      { name: 'US Dollar', ticker: 'USD', APY: '0%', wallet: '0', liquidity: '526.2' },
      { name: 'Euro', ticker: 'EUR', APY: '0%', wallet: '0', liquidity: '794.26' },
    ],
    borrowMetrics: ['Asset', 'APY', 'Wallet', 'Liquidity'],
  },
  footer: {
    copyright: '(c) Mother Protocol, Inc.',
    connect: 'Connect Wallet',
    social: [
      {
        name: 'Discord',
        url: 'https://discord.com/mother-protocol',
        icon: <FaDiscord />,
      },
      {
        name: 'Medium',
        url: 'https://medium.com',
        icon: <FaMedium />,
      },
      {
        name: 'Github',
        url: 'https://github.com/kylesparrow/mother-protocol',
        icon: <FaGithub />,
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/MotherCelo',
        icon: <FaTwitter />,
      },
    ],
  },
}
