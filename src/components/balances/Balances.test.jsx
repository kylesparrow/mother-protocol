import React from 'react'
import { render } from '@testing-library/react'
import Balances from './Balances'
import Lang from '../../util/lang'

describe('Balances component', () => {
  it('renders', () => {
    const { getByTestId } = render(<Balances />)
    const balances = getByTestId('balances-container')
    expect(balances).toBeInTheDocument()
  })

  it('displays user balances and APY', () => {
    const { getByTestId } = render(<Balances />)
    const lend = getByTestId('balances-net-lend')
    const borrow = getByTestId('balances-net-borrow')
    const APY = getByTestId('balances-net-apy')
    expect(lend).toBeInTheDocument()
    expect(lend).toHaveTextContent(Lang.balances.netLend)
    expect(lend).toHaveTextContent('$')
    expect(borrow).toBeInTheDocument()
    expect(borrow).toHaveTextContent(Lang.balances.netBorrow)
    expect(borrow).toHaveTextContent('$')
    expect(APY).toBeInTheDocument()
    expect(APY).toHaveTextContent(Lang.balances.netAPY)
  })

  it('displays borrowing limits with progress bar', () => {
    const { getByTestId } = render(<Balances />)
    const limitLabel = getByTestId('balances-limit-label')
    const limitBar = getByTestId('balances-limit-bar')
    expect(limitLabel).toBeInTheDocument()
    expect(limitLabel).toHaveTextContent(Lang.balances.limit)
    expect(limitBar).toBeInTheDocument()
  })
})
