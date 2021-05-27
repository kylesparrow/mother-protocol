import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ScrollableAnchor from 'react-scrollable-anchor'
import Lang from '../../util/lang'
import { Container, Row, Column } from '../shared/layout'

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  margin-bottom: 4%;
`

const StyledColumn = styled(Column)`
  justify-content: center;
  padding: 3%;
  width: 97%;
`

const StyledRow = styled(Row)`
  justify-content: space-around;
`

const NetBalance = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ color }) => color || 'black'};
`

const Label = styled.label``

const Metric = styled.h2``

const NetAPY = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2% 4%;
  border: 5px solid green;
  border-radius: 80px;
`

const LimitLabel = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-flow: row nowrap;
  font-size: 0.7rem;
  width: 5rem;
`

const LimitBarContainer = styled.div`
  position: relative;
  height: 10px;
  width: 100%;
  background-color: '#e0e0de';
  border: 1px solid #333;
  border-radius: 50px;
  margin-top: 1rem;
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
    <section data-testid='balances-section'>
      <ScrollableAnchor id='balances'>
        <StyledContainer>
          <StyledColumn>
            <StyledRow>
              <NetBalance color='green' data-testid='balances-net-lend'>
                <Label>{Lang.balances.netLend}</Label>
                <Metric>$0</Metric>
              </NetBalance>
              <NetAPY data-testid='balances-net-apy'>
                <Label>{Lang.balances.netAPY}</Label>
                <Metric>...</Metric>
              </NetAPY>
              <NetBalance color='red' data-testid='balances-net-borrow'>
                <Label>{Lang.balances.netBorrow}</Label>
                <Metric>$0</Metric>
              </NetBalance>
            </StyledRow>
            <StyledRow>
              <LimitLabel data-testid='balances-limit-label'>{Lang.balances.limit}</LimitLabel>
              <LimitBarContainer data-testid='balances-limit-bar'>
                <LimitBarFill percentage={borrowLimitPct} />
              </LimitBarContainer>
            </StyledRow>
          </StyledColumn>
        </StyledContainer>
      </ScrollableAnchor>
    </section>
  )
}

Balances.propTypes = {
  borrowLimitPct: PropTypes.number,
}

Balances.defaultProps = {
  borrowLimitPct: 10,
}

export default Balances
