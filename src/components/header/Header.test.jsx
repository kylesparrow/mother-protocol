import React from 'react'
import { render } from '@testing-library/react'
import Header from './Header'
import Lang from '../../util/lang'

describe('Header component', () => {
  it('renders', () => {
    const { getByTestId } = render(<Header isSticky />)
    const header = getByTestId('header')
    expect(header).toBeInTheDocument()
  })

  it('displays logo', () => {
    const { getByTestId } = render(<Header isSticky />)
    const logo = getByTestId('header-logo')
    expect(logo).toBeInTheDocument()
    expect(logo).toHaveTextContent(Lang.header.company)
  })

  it('displays button to connect wallet', () => {
    const { getByTestId } = render(<Header isSticky />)
    const connectBtn = getByTestId('header-connect-btn')
    expect(connectBtn).toBeInTheDocument()
    expect(connectBtn).toHaveTextContent(Lang.header.connect)
  })
})
