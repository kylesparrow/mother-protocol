import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Lang from '../../util/lang'
import Table from './Table'
import { Container } from '../shared/layout'
import { Title } from '../shared/interactive'
import { PHONE_UPPER_BOUND, BORROW } from '../../util/constants'
import TableContent from './TableContent'

const BorrowContainer = styled(Container)`
  box-sizing: border-box;
  width: calc(50% - 1rem);
  box-shadow: 1px 2px 2px 2px rgba(0, 0, 0, 0.5);
  @media only screen and (max-width: ${PHONE_UPPER_BOUND}) {
    width: 100%;
  }
`

const BorrowTitle = styled(Title)`
  font-size: 1.3rem;
  text-align: left;
  padding: 1.2rem 1.6rem;
`

const BorrowMarkets = (props) => {
  const { modalRef } = props
  return (
    <BorrowContainer data-testid='borrow-markets-container'>
      <BorrowTitle>Borrow Markets</BorrowTitle>
      <Table
        headers={Lang.markets.borrowMetrics}
        tableContent={
          <TableContent assets={Lang.markets.borrowAssets} modalRef={modalRef} direction={BORROW} />
        }
      />
    </BorrowContainer>
  )
}

BorrowMarkets.propTypes = {
  modalRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
}

export default BorrowMarkets
