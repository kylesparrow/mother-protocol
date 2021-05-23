import React from 'react'
import { ContractKitProvider } from '@celo-tools/use-contractkit'
import Header from './components/header/Header'
import MainContent from './components/mainContent/MainContent'
import Footer from './components/footer/Footer'
import useSticky from './hooks/useSticky'
import '@celo-tools/use-contractkit/lib/styles.css'

function App() {
  const { isSticky, element } = useSticky()
  return (
    <ContractKitProvider
      dappName='Mother Protocol'
      dappDescription='Mother Protocol Celo app'
      dappUrl='https://mother-protocol.com'
    >
      <div data-testid='app'>
        <Header isSticky={isSticky} />
        <MainContent element={element} />
        <Footer />
      </div>
    </ContractKitProvider>
  )
}

export default App
