import React from 'react'
import { render } from '@testing-library/react'
import BorrowMarkets from './BorrowMarkets'
import Lang from '../../util/lang'

describe('BorrowMarkets component', () => {
  it('renders', () => {
    const { getByTestId } = render(<BorrowMarkets />)
    const markets = getByTestId('borrow-markets-container')
    expect(markets).toBeInTheDocument()
  })

  it('displays all borrow asset rows', () => {
    const { getAllByTestId } = render(<BorrowMarkets />)
    const assets = getAllByTestId('markets-asset-name')
    expect(assets).toHaveLength(Lang.markets.borrowAssets.length)
    const expectedAssets = Lang.markets.borrowAssets.map((asset) => asset.name).join(' ')
    assets.forEach((asset) => {
      expect(expectedAssets).toContain(asset.textContent)
    })
  })

  it('displays all borrow asset columns', () => {
    const { getAllByTestId } = render(<BorrowMarkets />)
    const columnHeaders = getAllByTestId('markets-column-header')
      .map((header) => header.textContent)
      .join(' ')

    Lang.markets.borrowMetrics.forEach((metric) => {
      expect(columnHeaders).toContain(metric)
    })
  })
})
