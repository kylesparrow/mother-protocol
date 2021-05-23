import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Lang from '../../util/lang'
import { Container, Row, Column } from '../shared/layout'

const NetBalanceRow = styled(Row)`
  justify-content: space-around;
`

const NetBalance = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Label = styled.label``

const Metric = styled.h2``

const NetAPY = styled.div`
  padding: 8%;
  border: 5px solid black;
  border-radius: 100px;
`

const LimitLabel = styled.span``

const LimitBarContainer = styled.div`
  position: relative;
  height: 20px;
  width: 100%;
  background-color: '#e0e0de';
  border-radius: 50px;
  margin: 50px;
`

const LimitBarFill = styled.div`
  background-color: red;
  height: 100%;
  width: ${(props) => `${props.percentage}%`};
  border-radius: inherit;
  transition: width 0.2s ease-in;
  text-align: left;
`

const Balances = (props) => {
  const { borrowLimitPct } = props
  return (
    <Container data-testid='balances-container'>
      <Column>
        <NetBalanceRow>
          <NetBalance data-testid='balances-net-lend'>
            <Label>{Lang.balances.netLend}</Label>
            <Metric>$</Metric>
          </NetBalance>
          <NetAPY data-testid='balances-net-apy'>
            <Label>{Lang.balances.netAPY}</Label>
            <Metric>...</Metric>
          </NetAPY>
          <NetBalance data-testid='balances-net-borrow'>
            <Label>{Lang.balances.netBorrow}</Label>
            <Metric>$</Metric>
          </NetBalance>
        </NetBalanceRow>
        <Row>
          <LimitLabel data-testid='balances-limit-label'>{Lang.balances.limit}</LimitLabel>
          <LimitBarContainer data-testid='balances-limit-bar'>
            <LimitBarFill percentage={borrowLimitPct} />
          </LimitBarContainer>
        </Row>
      </Column>
    </Container>
  )
}

Balances.propTypes = {
  borrowLimitPct: PropTypes.number,
}

Balances.defaultProps = {
  borrowLimitPct: 10,
}

export default Balances
