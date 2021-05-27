import React from 'react'
import styled from 'styled-components'
import { ContractKitProvider } from '@celo-tools/use-contractkit'
import { Container } from './components/shared/layout'
import Header from './components/header/Header'
import MainContent from './components/mainContent/MainContent'
import Footer from './components/footer/Footer'
// import useSticky from './hooks/useSticky'
import '@celo-tools/use-contractkit/lib/styles.css'

const AppContainer = styled(Container)`
  text-align: center;
`

function App() {
  return (
    <ContractKitProvider
      dappName='Mother Protocol'
      dappDescription='Mother Protocol Celo app'
      dappUrl='https://mother-protocol.com'
    >
      <AppContainer data-testid='app'>
        <Header />
        <MainContent />
        <Footer />
      </AppContainer>
    </ContractKitProvider>
  )
}

export default App
