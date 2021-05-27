import React from 'react'
import { render } from '@testing-library/react'
import { ContractKitProvider } from '@celo-tools/use-contractkit'
import App from './App'

describe('App component', () => {
  test('renders with all children', () => {
    const { getByTestId } = render(
      <ContractKitProvider>
        <App />
      </ContractKitProvider>
    )
    const app = getByTestId('app')
    expect(app).toBeInTheDocument()
  })
})
