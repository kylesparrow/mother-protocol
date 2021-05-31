import React from 'react'
import styled from 'styled-components'
import { useContractKit } from '@celo-tools/use-contractkit'
import { FaSourcetree } from 'react-icons/fa'
import { Button } from '../shared/interactive'
import Lang from '../../util/lang'
import truncateAddress from '../../util/format'

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
  height: 8vh;
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
  const contractKit = useContractKit()
  console.log('CONTRACT KIT: ', contractKit)
  const { connect, address, kit, getConnectedKit, performActions, network, updateNetwork } =
    contractKit

  async function getAccountSummary() {
    const accounts = await kit.contracts.getAccounts()
    await accounts.getAccountSummary(address)
  }

  async function transfer() {
    const xKit = await getConnectedKit()
    const cUSD = await xKit.contracts.getStableToken()
    await cUSD.transfer(process.env.BORROW_POOL_ADDRESS, 10000).sendAndWaitForReceipt()
  }

  // return <button onClick={transfer}>Transfer</button>

  async function transferAndConfirm() {
    await performActions(async (kit) => {
      const cUSD = await kit.contracts.getStableToken()
      await cUSD.transfer(process.env.BORROW_POOL_ADDRESS, 10000).sendAndWaitForReceipt()
    })
  }

  // return <button onClick={transferAndConfirm}>Transfer</button>

  async function onNetworkChange() {
    const selection = 'Mainnet'
    await updateNetwork(selection)
  }

  // return <div>We are currently connected to {network}</div>

  return (
    <header>
      <Wrapper data-testid='header'>
        <Logo data-testid='header-logo'>
          <FaSourcetree />
          <Company>{Lang.header.company}</Company>
        </Logo>
        <Button onClick={connect} data-testid='header-connect-btn'>
          {address ? truncateAddress(address) : Lang.header.connect}
        </Button>
      </Wrapper>
    </header>
  )
}

export default Header
