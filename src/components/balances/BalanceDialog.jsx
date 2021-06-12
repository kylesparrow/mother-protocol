import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FaSourcetree } from 'react-icons/fa'
import { formatToken, formatUSD } from '../../util/format'
import { Container, Row } from '../shared/layout'
import { Button, IconStyles, Title } from '../shared/interactive'

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

const BalanceDialog = (props) => {
  const { momBal, usdBal, walletBal, unclaimedBal, momPrice } = props

  return (
    <>
      <IconRow data-testid='icon-row'>
        <FaSourcetree style={IconStyles} />
      </IconRow>
      <TotalBalanceRow>
        <Title as='h5'>{formatToken(momBal, 8)}</Title>
      </TotalBalanceRow>
      <TotalValueRow>
        <Label>{formatUSD(usdBal)}</Label>
      </TotalValueRow>
      <DataContainer>
        <BodyDataRow>
          <Label>Wallet Balance</Label>
          <Value>{formatToken(walletBal)}</Value>
        </BodyDataRow>
        <BodyDataRow>
          <Label>Unclaimed Balance</Label>
          <Value>{formatToken(unclaimedBal)}</Value>
        </BodyDataRow>
        <BodyDataRow style={{ borderBottom: 0 }}>
          <Label>Price</Label>
          <Value>{formatUSD(momPrice)}</Value>
        </BodyDataRow>
      </DataContainer>

      <TotalBalanceRow>
        <ClaimButton disabled={unclaimedBal === 0.0}>
          {unclaimedBal > 0 ? 'Claim MOM' : 'Nothing To Claim'.toUpperCase()}
        </ClaimButton>
      </TotalBalanceRow>
    </>
  )
}

BalanceDialog.propTypes = {
  momBal: PropTypes.number,
  usdBal: PropTypes.number,
  walletBal: PropTypes.number,
  unclaimedBal: PropTypes.number,
  momPrice: PropTypes.number,
}

BalanceDialog.defaultProps = {
  momBal: 0.0,
  usdBal: 0.0,
  walletBal: 0.0,
  unclaimedBal: 0.0,
  momPrice: 0.0,
}

export default BalanceDialog
