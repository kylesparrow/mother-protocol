import React from 'react'
import styled from 'styled-components'
import Lang from '../../util/lang'
import { Container } from '../shared/layout'
import { Title } from '../shared/interactive'

const BorrowContainer = styled(Container)`
  box-sizing: border-box;
  width: 50%;
`

const BorrowTitle = styled(Title)``

const BorrowMarkets = () => {
  return (
    <BorrowContainer data-testid='borrow-markets-container'>
      <BorrowTitle>Borrow Markets</BorrowTitle>
      <table>
        <thead>
          <tr>
            {Lang.markets.borrowMetrics.map((metric) => (
              <td key={metric} data-testid='borrow-markets-column-header'>
                {metric}
              </td>
            ))}
          </tr>
        </thead>
        <tbody>
          {Lang.markets.borrowAssets.map((asset) => (
            <tr key={asset.ticker} data-testid='borrow-markets-asset-row'>
              <td data-testid='borrow-markets-asset-name'>{asset.name}</td>
              <td data-testid='borrow-markets-asset-apy'>{asset.borrowAPY}</td>
              <td data-testid='borrow-markets-asset-wallet'>{`${asset.wallet} ${asset.ticker}`}</td>
              <td data-testid='borrow-markets-asset-liquidity'>{`$${asset.liquidity}M`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </BorrowContainer>
  )
}

export default BorrowMarkets
