/* eslint-disable */
import React from 'react'
import PropTypes from "prop-types"
import styled from 'styled-components'
import { useContractKit } from '@celo-tools/use-contractkit'
import { FaSourcetree } from 'react-icons/fa'
import { Container, Row } from '../shared/layout'
import { Button } from '../shared/interactive'
import Lang from '../../util/lang'
import { truncateAddress } from '../../util/format'
import useAddress from '../../hooks/useAddress'
import useAccounts from '../../hooks/useAccounts'

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

const Header = (props) => {
  const {
    momBalance,
    modalRef,
  } = props
  const { connect, address } = useContractKit()



  return (
    <header>
      <Wrapper data-testid='header'>
        <Logo data-testid='header-logo'>
          <FaSourcetree />
          <Company>{Lang.header.company}</Company>
        </Logo>
        <Container>
          <Row>
            {address &&
              <Button onClick={() => modalRef.current.openBalanceModal()}>{momBalance}</Button>
            }
            <Button
              onClick={connect}
              data-testid='header-connect-btn'
            >
              {address ? truncateAddress(address) : Lang.header.connect}
            </Button>
          </Row>
        </Container>
      </Wrapper>
    </header>
  )
}

Header.propTypes = {
  momBalance: PropTypes.number,
  modalRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
]).isRequired,
}

Header.defaultProps = {
  momBalance: 0.0,
}
export default Header
