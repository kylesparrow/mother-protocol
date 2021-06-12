/* eslint-disable */
import React, { useReducer, forwardRef } from 'react'
import styled from 'styled-components'
import {
  ContractKitProvider,
  Alfajores, Mainnet
} from '@celo-tools/use-contractkit'
import '@celo-tools/use-contractkit/lib/styles.css'
import ReactModal from 'react-modal'
import { Container } from './components/shared/layout'
import Header from './components/header/Header'
import MainContent from './components/mainContent/MainContent'
import Footer from './components/footer/Footer'
import BaseModal from './components/shared/BaseModal'
import walletReducer, { initialState as initialWalletState } from './reducers/wallet.reducer'
import { UPDATE_ACCOUNTS, UPDATE_ADDRESS, UPDATE_SUMMARY } from './reducers/actionTypes'

const AppContainer = styled(Container)`
  text-align: center;
`

function App() {
  ReactModal.setAppElement('#root')
  const modalRef = React.useRef()

  return (
    <AppContainer data-testid='app'>
      <BaseModal ref={modalRef} />
      <Header
        modalRef={modalRef}
      />
      <MainContent
        modalRef={modalRef}
      />
      <Footer />
    </AppContainer>
  )
}

export default function WrappedApp() {


  return (
    <ContractKitProvider
      dappName='Mother Protocol'
      dappDescription='Mother Protocol Celo app'
      dappUrl='https://mother-protocol.com'
      networks={[Mainnet, Alfajores]}
    >
      <App />
    </ContractKitProvider>
  )
}

