import React from 'react'
import styled from 'styled-components'
import { Container } from '../shared/layout'
import BorrowMarkets from './BorrowMarkets'
import LendMarkets from './LendMarkets'
import { SM_BREAKPOINT } from '../../util/constants'

const MarketsContainer = styled(Container)`
  padding: 1% 3%;
  display: flex;
  justify-content: center;
`

const ResponsiveContainer = styled(Container)`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  @media only screen and (max-width: ${SM_BREAKPOINT}) {
    flex-flow: column nowrap;
  }
`

const Markets = () => {
  return (
    <section data-testid='markets-section'>
      <MarketsContainer>
        <ResponsiveContainer>
          <LendMarkets />
          <BorrowMarkets />
        </ResponsiveContainer>
      </MarketsContainer>
    </section>
  )
}

export default Markets
