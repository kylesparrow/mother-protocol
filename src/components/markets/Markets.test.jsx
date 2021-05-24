import React from 'react'
import { render } from '@testing-library/react'
import Markets from './Markets'

describe('Markets component', () => {
  it('renders', () => {
    const { getByTestId } = render(<Markets />)
    const markets = getByTestId('markets-container')
    expect(markets).toBeInTheDocument()
  })

  it('displays all children', () => {
    const { getByTestId } = render(<Markets />)
    const borrow = getByTestId('borrow-markets-container')
    const lend = getByTestId('lend-markets-container')
    expect(borrow).toBeInTheDocument()
    expect(lend).toBeInTheDocument()
  })
})
