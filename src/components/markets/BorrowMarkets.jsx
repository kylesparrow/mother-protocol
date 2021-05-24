import React from 'react'
import styled from 'styled-components'
import Lang from '../../util/lang'
import Table from './Table'
import { Container } from '../shared/layout'
import { Title } from '../shared/interactive'
import { SM_BREAKPOINT } from '../../util/constants'
import TableContent from './TableContent'

const BorrowContainer = styled(Container)`
  box-sizing: border-box;
  width: 50%;
  @media only screen and (max-width: ${SM_BREAKPOINT}) {
    width: 100%;
  }
`

const BorrowTitle = styled(Title)`
  font-size: 1.3rem;
  text-align: left;
  padding: 1.2rem 1.6rem;
`

const BorrowMarkets = () => {
  return (
    <BorrowContainer data-testid='borrow-markets-container'>
      <BorrowTitle>Borrow Markets</BorrowTitle>
      <Table
        headers={Lang.markets.borrowMetrics}
        tableContent={<TableContent assets={Lang.markets.borrowAssets} />}
      />
    </BorrowContainer>
  )
}

export default BorrowMarkets
