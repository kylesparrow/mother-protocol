import React from 'react'
import { render } from '@testing-library/react'
import LendMarkets from './LendMarkets'
import Lang from '../../util/lang'

describe('LendMarkets component', () => {
  it('renders', () => {
    const { getByTestId } = render(<LendMarkets />)
    const markets = getByTestId('lend-markets-container')
    expect(markets).toBeInTheDocument()
  })

  it('displays all lend asset rows', () => {
    const { getAllByTestId } = render(<LendMarkets />)
    const assets = getAllByTestId('markets-asset-name')
    expect(assets).toHaveLength(Lang.markets.lendAssets.length)
    const expectedAssets = Lang.markets.lendAssets.map((asset) => asset.name).join(' ')
    assets.forEach((asset) => {
      expect(expectedAssets).toContain(asset.textContent)
    })
  })

  it('displays all lend asset columns', () => {
    const { getAllByTestId } = render(<LendMarkets />)
    const columnHeaders = getAllByTestId('markets-column-header')
      .map((header) => header.textContent)
      .join(' ')

    Lang.markets.lendMetrics.forEach((metric) => {
      expect(columnHeaders).toContain(metric)
    })
  })
})
