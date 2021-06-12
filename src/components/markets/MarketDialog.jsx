import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useContractKit } from '@celo-tools/use-contractkit'
import { Button, Input, Label, Title } from '../shared/interactive'
import { Column, Container, Row } from '../shared/layout'
import TabGroup from '../shared/TabGroup'
import Lang from '../../util/lang'
import Coins from '../shared/Coins'
import { formatPercent, toTitleCase, formatUSD } from '../../util/format'
import { BORROW, LEND, WITHDRAW, REPAY } from '../../util/constants'

const InputContainer = styled(Container)`
  background: #f9fafb;
`

const IconRow = styled(Row)`
  justify-content: center;
  width: 4.75rem;
  height: 4.75rem;
`

const EnableToken = styled(Column)`
  padding: 1rem 2rem;
  margin: 3.5rem 1.75rem;
`

const ErrorMessage = styled.p`
  font-size: 0.7rem;
  color: #aab8c1;
`

const InputBox = styled(Row)`
  background: #f9fafb;
  height: 8rem;
  align-items: center;
`

const ActionInput = styled(Input)`
  border-color: transparent;
  background: transparent;
  text-align: center;
`

const MaxButton = styled(Button)`
  margin: 0;
  border-radius: 0;
  border-color: transparent;
  background: transparent;
  color: #aab8c1;
  &:hover {
    color: #000;
    background: transparent;
    transform: scale(1);
  }
`

const RenderMaxButton = (actionName) => {
  if (actionName === BORROW) {
    return (
      <MaxButton
        data-testid='market-modal-max-btn-borrow'
        onChange={() => console.log('MAX BORROW: ')}
      >
        <div>80%</div>
        <div>LIMIT</div>
      </MaxButton>
    )
  }
  return (
    <MaxButton
      data-testid='market-modal-max-btn'
      onChange={() => {
        console.log('MAX: ')
      }}
    >
      MAX
    </MaxButton>
  )
}

const DataContainer = styled(Container)``

const DataSection = styled(Column)`
  padding: 1.5rem 1.75rem 0 1.75rem;
`

const DataRow = styled(Row)`
  justify-content: space-between;
  align-items: center;
  /* margin-top: 0.5rem; */
  padding: 0.75rem 0;
  color: #aab8c1;
  border-bottom: 1px solid #eceff1;
  &:last-of-type {
    border-bottom: 1px solid transparent;
  }
  &:last-of-type.limits {
    border-bottom: 3px solid #eceff1;
  }
`

const DataLabel = styled(Label)`
  font-size: 0.75rem;
  padding: 0;
  margin-bottom: 0;
  color: ${({ disabled }) => (disabled ? '#aab8c1' : '#000')};
`

const Value = styled.span`
  color: #000;
  font-size: 0.75rem;
`

const SectionTitle = styled(Title)`
  font-size: 0.6rem;
  font-weight: 600;
  text-align: left;
  margin: 0;
  padding: 0;
`

const ActionButtonArea = styled(Column)`
  padding: 2rem 1rem 1rem;
`

const ActionButton = styled(Button)`
  background: #000;
  color: #fff;
  border-radius: 5px;
  width: 100%;
`

const renderActionButtonText = ({ action, balance, value, borrowBalance, borrowUsed }) => {
  let text = ''
  if (action === LEND) {
    if (balance <= 0) {
      text = 'No Funds Available'
    } else {
      text = `Lend ${value}`
    }
  }
  if (action === WITHDRAW) {
    if (balance <= 0) {
      text = 'No Balance to Withdraw'
    } else {
      text = `Withdraw ${value}`
    }
  }
  if (action === BORROW) {
    if (balance * 0.8 <= borrowBalance) {
      text = 'Borrow Limit Reached'
    } else if (value <= balance - balance * borrowUsed) {
      text = `Borrow ${value}`
    }
  }
  if (action === REPAY) {
    if (borrowBalance <= 0) {
      text = 'No Balance to Repay'
    } else {
      text = `Repay ${value}`
    }
  }
  return text.toUpperCase()
}

const MarketDialog = (props) => {
  const { token, direction, currentToken, isLoading } = props
  const { kit, address } = useContractKit()

  async function getWalletBalance() {
    let balance
    let tokenContract
    try {
      switch (token) {
        case 'CELO':
          tokenContract = await kit.contracts.getGoldToken()
          break
        case 'cUSD':
          tokenContract = await kit.contracts.getStableToken()
          break
        case 'cEUR':
          tokenContract = new kit.web3.eth.Contract(
            'CEUR',
            '0x10c892a6ec43a53e45d0b916b4b7d383b1b78c0f'
          )
          break
        default:
          throw Error('Unrecognized Token')
      }
      balance = await tokenContract.balanceOf(address).then((resp) => {
        console.log('RESP: ', resp.toNumber())
        return resp
      })
    } catch (err) {
      console.log('ERROR: ', err)
    }
    return balance.toNumber()
  }

  const [action, setAction] = useState({
    name: Lang.markets.actionTabs[direction][0],
    // FIXME: connect real value
    value: () => getWalletBalance(),
  })

  if (isLoading) return 'Loading'

  return (
    <>
      <InputContainer data-testid='market-modal-input-container'>
        {!currentToken.enabled && (action.name === 'Lend' || action.name === 'Repay') ? (
          <EnableToken data-testid='market-modal-enable-token'>
            <IconRow>{Coins[token].icon}</IconRow>
            <ErrorMessage data-testid='asset-not-enabled-error'>
              {Lang.markets.assetNotEnabledError}
            </ErrorMessage>
          </EnableToken>
        ) : (
          <InputBox data-testid='market-modal-input-box'>
            <ActionInput
              data-testid='market-modal-input'
              value={action.value}
              onChange={(e) =>
                setAction((prevState) => ({
                  ...prevState,
                  value: e.currentTarget.value,
                }))
              }
            />
            {RenderMaxButton(action.name)}
          </InputBox>
        )}
        <TabGroup
          tabs={Lang.markets.actionTabs[direction]}
          selected={action.name}
          setSelected={(name) =>
            setAction((prevState) => ({
              ...prevState,
              name,
            }))
          }
        />
      </InputContainer>
      <DataContainer data-testid='market-modal-data-container'>
        <DataSection data-testid='market-modal-rates-section'>
          <SectionTitle as='h4' data-testid='market-modal-rates-section-title'>{`${toTitleCase(
            direction
          )} Rates`}</SectionTitle>
          <DataRow>
            <DataLabel
              disabled={currentToken.balance === 0}
              data-testid='market-modal-token-rate-label'
            >
              {Coins[token].icon} {`${toTitleCase(direction)} APY`}
            </DataLabel>
            {/* FIXME: connect real value */}
            <Value data-testid='market-modal-token-rate-value'>
              {formatPercent(currentToken.directionAPY)}
            </Value>
          </DataRow>
          <DataRow>
            <DataLabel
              disabled={currentToken.balance === 0}
              data-testid='market-modal-mom-rate-label'
            >
              {Coins.MOM.icon} {Lang.markets.labels.distributionAPY}
            </DataLabel>
            {/* FIXME: connect real value */}
            <Value data-testid='market-modal-mom-rate-value'>
              {formatPercent(currentToken.distributionAPY)}
            </Value>
          </DataRow>
        </DataSection>
        {currentToken.enabled ? (
          <DataSection data-testid='market-modal-limits-section'>
            <SectionTitle as='h4' data-testid='market-modal-limits-section-title'>
              {Lang.markets.labels.borrowLimit}
            </SectionTitle>
            <DataRow>
              <DataLabel
                disabled={currentToken.balance === 0}
                data-testid='markets-modal-borrow-bal-label'
              >
                {direction === BORROW
                  ? Lang.markets.labels.borrowBalance
                  : Lang.markets.labels.borrowLimit}
              </DataLabel>
              <Value data-testid='markets-modal-borrow-bal-value'>
                {formatUSD(currentToken.borrowBalance)}
              </Value>
            </DataRow>
            <DataRow className='limits'>
              <DataLabel
                disabled={currentToken.balance === 0}
                data-testid='markets-modal-borrow-used-label'
              >
                {Lang.markets.labels.borrowUsed}
              </DataLabel>
              <Value data-testid='markets-modal-borrow-used-value'>
                {formatPercent(currentToken.borrowUsed)}
              </Value>
            </DataRow>
          </DataSection>
        ) : null}
      </DataContainer>

      <ActionButtonArea>
        <ActionButton
          disabled={parseInt(action.value, 10) === 0.0}
          data-testid='markets-modal-action-button'
        >
          {renderActionButtonText({
            balance: currentToken.balance,
            action: action.name,
            value: action.value,
            borrowBalance: currentToken.borrowBalance,
            borrowUsed: currentToken.borrowUsed,
          })}
        </ActionButton>

        <DataRow data-testid='markets-modal-action-balance'>
          <DataLabel>
            {action.name === WITHDRAW || action.name === BORROW
              ? `Currently ${toTitleCase(direction)}ing`
              : 'Wallet Balance'}
          </DataLabel>
          {/* FIXME: connect real value */}
          <Value>{currentToken.balance}</Value>
        </DataRow>
      </ActionButtonArea>
    </>
  )
}

MarketDialog.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  token: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
  // actionValue: PropTypes.number,
  currentToken: PropTypes.shape({
    // FIXME: source numbers from wallet or protocol
    balance: PropTypes.number,
    enabled: PropTypes.bool,
    directionAPY: PropTypes.number,
    distributionAPY: PropTypes.number,
    borrowBalance: PropTypes.number,
    borrowUsed: PropTypes.number,
  }),
}

MarketDialog.defaultProps = {
  // actionValue: 0.0,
  currentToken: {
    balance: 0.0,
    enabled: true,
    directionAPY: 4.32424,
    distributionAPY: 1.86,
    borrowBalance: 0,
    borrowUsed: 0.0,
  },
}

export default MarketDialog
