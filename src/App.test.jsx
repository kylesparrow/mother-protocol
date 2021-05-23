import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

describe('App component', () => {
  test('renders with all children', () => {
    const { getByTestId } = render(<App />)
    const app = getByTestId('app')
    expect(app).toBeInTheDocument()
  })
})
