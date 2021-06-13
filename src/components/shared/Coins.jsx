import React from 'react'
import { FaSourcetree } from 'react-icons/fa'
import { ExchangeIcon, ModalIconStyles } from './interactive'
import celoIcon from '../../assets/CELO-color-icon.svg'
import cUSDIcon from '../../assets/cUSD-color-icon.svg'
import cEURIcon from '../../assets/cEUR-color-icon.svg'
import ubeIcon from '../../assets/UBE-color-icon.svg'
// FIXME: Add MOM icon when available
// import motherIcon from '../../assets/MOM-color-icon.svg'

export default {
  MOM: {
    name: 'Mother',
    ticker: 'MOM',
    icon: <FaSourcetree style={ModalIconStyles} />,
  },
  UBE: {
    name: 'Ubeswap',
    ticker: 'UBE',
    icon: <ExchangeIcon image={ubeIcon} style={ModalIconStyles} />,
  },
  CELO: {
    name: 'Celo Native Asset',
    ticker: 'CELO',
    icon: <ExchangeIcon image={celoIcon} />,
  },
  cUSD: {
    name: 'Celo Dollars',
    ticker: 'cUSD',
    icon: <ExchangeIcon image={cUSDIcon} />,
  },
  cEUR: {
    name: 'Celo Euro',
    ticker: 'cEUR',
    icon: <ExchangeIcon image={cEURIcon} />,
  },
}
