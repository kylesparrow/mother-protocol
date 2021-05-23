import React from 'react'
import { render } from '@testing-library/react'
import Hero from './Hero'
import Lang from '../../util/lang'

describe('Hero component', () => {
  it('renders', () => {
    const { getByTestId } = render(<Hero />)
    const hero = getByTestId('hero')
    expect(hero).toBeInTheDocument()
  })

  it('displays title', () => {
    const { getByTestId } = render(<Hero />)
    const hero = getByTestId('hero')
    expect(hero).toHaveTextContent(Lang.hero.title)
  })

  it('displays markets button', () => {
    const { getByTestId } = render(<Hero />)
    const marketsBtn = getByTestId('hero-markets-btn')
    expect(marketsBtn).toBeInTheDocument()
    expect(marketsBtn).toHaveTextContent(Lang.hero.markets)
  })
})
