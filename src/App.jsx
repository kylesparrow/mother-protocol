import React from 'react'
import styled from 'styled-components'
import { ContractKitProvider, Alfajores } from '@celo-tools/use-contractkit'
import '@celo-tools/use-contractkit/lib/styles.css'
import ReactModal from 'react-modal'
import { Container } from './components/shared/layout'
import Header from './components/header/Header'
import MainContent from './components/mainContent/MainContent'
import Footer from './components/footer/Footer'

const AppContainer = styled(Container)`
  text-align: center;
`

export default function WrappedApp() {
  React.useEffect(() => ReactModal.setAppElement('#root'))
  return (
    <ContractKitProvider
      dappName='Mother Protocol'
      dappDescription='Mother Protocol Celo app'
      dappUrl='https://mother-protocol.com'
      networks={[Alfajores]}
    >
      <App />
    </ContractKitProvider>
  )
}

function App() {
  // const { connect, address } = useContractKit()
  return (
    <AppContainer data-testid='app'>
      <Header />
      <MainContent />
      <Footer />
    </AppContainer>
  )
}
