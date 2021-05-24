import React from 'react'
import styled from 'styled-components'
import { Container, Row } from '../shared/layout'
import BorrowMarkets from './BorrowMarkets'
import LendMarkets from './LendMarkets'

const MarketsContainer = styled(Container)`
  padding: 1% 3%;
`

const MarketsRow = styled(Row)`
  justify-content: center;
`

const Markets = () => {
  return (
    <section data-testid='markets-section'>
      <MarketsContainer>
        <MarketsRow>
          <LendMarkets />
          <BorrowMarkets />
        </MarketsRow>
      </MarketsContainer>
    </section>
  )
}

export default Markets
