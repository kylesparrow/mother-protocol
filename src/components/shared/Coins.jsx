import React from 'react'
import { FaSourcetree } from 'react-icons/fa'
import { ExchangeIcon } from './interactive'
import celoIcon from '../../assets/CELO-color-icon.svg'
import cUSDIcon from '../../assets/cUSD-color-icon.svg'
import cEURIcon from '../../assets/cEUR-color-icon.svg'
// import motherIcon from '../../assets/MOM-color-icon.svg'
import ubeIcon from '../../assets/UBE-color-icon.svg'

export default {
  MOM: {
    name: 'Mother',
    ticker: 'MOM',
    icon: <FaSourcetree />,
  },
  UBE: {
    name: 'Ubeswap',
    ticker: 'UBE',
    icon: (
      <ExchangeIcon
        image={ubeIcon}
        style={{
          height: '25px',
          width: '25px',
          fontSize: '1rem',
          borderRadius: 0,
          padding: '0.3rem',
        }}
      />
    ),
  },
  CELO: {
    name: 'Celo',
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
