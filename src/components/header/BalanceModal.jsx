import React, { useState } from 'react'
import PropTypes from 'prop-types'
import ReactModal from 'react-modal'
import styled from 'styled-components'
import { AiOutlineClose } from 'react-icons/ai'
import { FaSourcetree } from 'react-icons/fa'
import { Container, Row, Column } from '../shared/layout'
import { Button } from '../shared/interactive'
import { formatUSD, formatTokens } from '../../util/format'

const ModalContentStyles = {
  content: {
    marginTop: '4rem',
    marginRight: 'auto',
    marginLeft: 'auto',
    width: '22rem',
    height: '22rem',
    borderRadius: '10px',
    padding: 0,
    zIndex: 4,
  },
}

const Header = styled(Row)`
  font-size: 0.8rem;
  font-weight: 600;
  position: relative;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.25px solid rgba(0, 0, 0, 0.05);
  padding: 1rem;
`

const Title = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  text-align: center;
  right: 1.33rem;
  span {
    text-align: center;
  }
`

const CloseX = styled.div`
  position: absolute;
  right: 0.3rem;
  border: 1px solid transparent;
  display: inline-block;
  border-radius: 3px;
  cursor: pointer;
  /* background: #fff; */
  /* align-self: flex-start; */
  /* width: 10%; */
`

const CloseButton = styled.button`
  background-color: transparent;
  border: 0;
  padding: 1px;
  cursor: pointer;
`

const ClaimModalBody = styled(Container)`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: stretch;
  height: 100%;
  padding: 2rem 3rem 1rem;
`

const IconStyles = {
  fontSize: '3rem',
  border: '3px solid #000',
  borderRadius: '100px',
  padding: '0.1rem 0.3rem',
}

const IconRow = styled(Row)`
  justify-content: center;
  width: 100%;
`

const TotalBalanceRow = styled(Row)`
  justify-content: center;
  margin-top: 0.5rem;
  color: #000;
  h5 {
    margin: 0 auto;
    font-size: 1.2rem;
  }
`

const Label = styled.label`
  font-size: 0.75rem;
`

const TotalValueRow = styled(Row)`
  justify-content: center;
  margin-top: 0.335rem;
  color: #aab8c1;
`

const DataContainer = styled(Container)`
  margin-top: 1rem;
  font-size: 1rem;
  width: 100%;
`

const Value = styled.span`
  color: #000;
  font-size: 0.75rem;
`

const BodyDataRow = styled(Row)`
  justify-content: space-between;
  /* margin-top: 0.5rem; */
  padding: 0.5rem 0;
  color: #aab8c1;
  border-bottom: 1px solid #eceff1;
`

const ClaimButton = styled(Button)`
  background: #000;
  color: #fff;
  border-radius: 5px;
  width: 100%;
`

const BalanceModal = (props) => {
  const { motherBal, usdBal, walletBal, unclaimedBal, motherPrice } = props
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <Button onClick={() => setShowModal(true)} data-testid='header-mother-balance'>
        {formatTokens(unclaimedBal)}
      </Button>
      <ReactModal
        isOpen={showModal}
        contentLabel='Mother balances'
        onRequestClose={() => setShowModal(false)}
        shouldCloseOnOverlayClick
        style={ModalContentStyles}
      >
        <Column>
          <Header>
            <Title>
              <span>MTHR Balance</span>
            </Title>
            <CloseX>
              <CloseButton onClick={() => setShowModal(false)}>
                <AiOutlineClose />
              </CloseButton>
            </CloseX>
          </Header>
          <ClaimModalBody>
            <IconRow>
              <FaSourcetree style={IconStyles} />
            </IconRow>
            <TotalBalanceRow>
              <h5>{formatTokens(motherBal, 8)}</h5>
            </TotalBalanceRow>
            <TotalValueRow>
              <Label>{formatUSD(usdBal)}</Label>
            </TotalValueRow>
            <DataContainer>
              <BodyDataRow>
                <Label>Wallet Balance</Label>
                <Value>{formatTokens(walletBal)}</Value>
              </BodyDataRow>
              <BodyDataRow>
                <Label>Unclaimed Balance</Label>
                <Value>{formatTokens(unclaimedBal)}</Value>
              </BodyDataRow>
              <BodyDataRow style={{ borderBottom: 0 }}>
                <Label>Price</Label>
                <Value>{formatUSD(motherPrice)}</Value>
              </BodyDataRow>
            </DataContainer>

            <TotalBalanceRow>
              <ClaimButton disabled={unclaimedBal === 0.0}>
                {unclaimedBal > 0 ? 'Claim MTHR' : 'Nothing To Claim'.toUpperCase()}
              </ClaimButton>
            </TotalBalanceRow>
          </ClaimModalBody>
        </Column>
      </ReactModal>
    </>
  )
}

BalanceModal.propTypes = {
  motherBal: PropTypes.number,
  usdBal: PropTypes.number,
  walletBal: PropTypes.number,
  unclaimedBal: PropTypes.number,
  motherPrice: PropTypes.number,
}

BalanceModal.defaultProps = {
  motherBal: 0.0,
  usdBal: 0.0,
  walletBal: 0.0,
  unclaimedBal: 0.0,
  motherPrice: 0.0,
}

export default BalanceModal
