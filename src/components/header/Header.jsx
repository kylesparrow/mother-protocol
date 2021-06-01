import React from 'react'
import styled from 'styled-components'
import { useContractKit } from '@celo-tools/use-contractkit'
import { FaSourcetree } from 'react-icons/fa'
import ReactModal from 'react-modal'
import { Container, Row } from '../shared/layout'
import { Button } from '../shared/interactive'
import BalanceModal from './BalanceModal'
import Lang from '../../util/lang'
import { truncateAddress } from '../../util/format'

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2%;
  width: 100%;
  height: 8%;
  box-sizing: border-box;
  background-color: #000;
  color: #fff;
  box-shadow: 1px 1px 1px #222;
`

const Company = styled.h1`
  margin-left: 0.5rem;
  font-size: 1.1rem;
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: row nowrap;
`

const Header = () => {
  ReactModal.setAppElement('#root')
  const contractKit = useContractKit()
  const { connect, address } = contractKit
  // console.log('NETWORK: ', network)

  // const getAccountSummary = useCallback(async () => {
  //   const accounts = await kit.contracts.getAccounts()
  //   const summary = await accounts.getAccountSummary(address)
  //   console.log('ACCOUNTS IN USE CALLBACK: ', summary)
  // }, [address, kit.contracts])

  // useEffect(async () => {
  //   // const summary = getAccountSummary()
  //   // const kit = await getConnectedKit()
  //   const accounts = await kit.contracts.getAccounts()
  //   console.log('ACCOUNTS: ', accounts, kit.contracts)
  //   console.log('ADDRESS: ', address)
  //   const summary = await accounts.getAccountSummary(address)
  //   console.log('SUMMARY: ', summary)
  // }, [])

  return (
    <header>
      <Wrapper data-testid='header'>
        <Logo data-testid='header-logo'>
          <FaSourcetree />
          <Company>{Lang.header.company}</Company>
        </Logo>
        <Container>
          <Row>
            {address && <BalanceModal />}
            <Button onClick={connect} data-testid='header-connect-btn'>
              {address ? truncateAddress(address) : Lang.header.connect}
            </Button>
          </Row>
        </Container>
      </Wrapper>
    </header>
  )
}

export default Header
