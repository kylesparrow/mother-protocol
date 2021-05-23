import React from 'react'
import styled from 'styled-components'
import Lang from '../../util/lang'
import { Container } from '../shared/layout'
import ToggleButton from '../shared/ToggleButton'

const LendContainer = styled(Container)`
  box-sizing: border-box;
  width: 50%;
`

const LendMarkets = () => {
  const handleClick = (e) => {
    console.log('TOGGLED!')
    console.log(e.target)
  }

  return (
    <LendContainer data-testid='lend-markets-container'>
      <table>
        <thead>
          <tr>
            {Lang.markets.lendMetrics.map((metric) => (
              <td key={metric} data-testid='lend-markets-column-header'>
                {metric}
              </td>
            ))}
          </tr>
        </thead>
        <tbody>
          {Lang.markets.lendAssets.map((asset) => (
            <tr key={asset.ticker} data-testid='lend-markets-asset-row'>
              <td data-testid='lend-markets-asset-name'>{asset.name}</td>
              <td data-testid='lend-markets-asset-apy'>{asset.lendAPY}</td>
              <td data-testid='lend-markets-asset-wallet'>{`${asset.wallet} ${asset.ticker}`}</td>
              <td data-testid='lend-markets-asset-collateral'>
                {/* TODO: add display for user who has asset deposited */}
                <ToggleButton onClick={handleClick} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </LendContainer>
  )
}

export default LendMarkets
