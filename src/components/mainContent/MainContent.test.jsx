import React from 'react'
import { render } from '@testing-library/react'
import MainContent from './MainContent'

describe('MainContent component', () => {
  it('renders', () => {
    const { getByTestId } = render(<MainContent />)
    expect(getByTestId('main-content-section')).toBeInTheDocument()
  })
})
