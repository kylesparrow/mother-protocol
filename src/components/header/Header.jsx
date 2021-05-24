import React from 'react'
import styled from 'styled-components'
import { useContractKit } from '@celo-tools/use-contractkit'
import { FaSourcetree } from 'react-icons/fa'
import { Button } from '../shared/interactive'
import Lang from '../../util/lang'

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
  const { address, connect } = useContractKit()

  return (
    <header>
      <Wrapper data-testid='header'>
        <Logo data-testid='header-logo'>
          <FaSourcetree />
          <Company>{Lang.header.company}</Company>
        </Logo>
        <Button onClick={connect} data-testid='header-connect-btn'>
          {address ? `${address.substr(0, 6)}...${address.substr(-4, 4)}` : Lang.header.connect}
        </Button>
      </Wrapper>
    </header>
  )
}

export default Header
