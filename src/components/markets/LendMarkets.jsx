import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Lang from '../../util/lang'
import { Container } from '../shared/layout'
import { Title } from '../shared/interactive'
import Table from './Table'
import TableContent from './TableContent'
import { PHONE_UPPER_BOUND, LEND } from '../../util/constants'

const LendContainer = styled(Container)`
  box-sizing: border-box;
  width: calc(50% - 1rem);
  box-shadow: 1px 2px 2px 2px rgba(0, 0, 0, 0.5);
  @media only screen and (max-width: ${PHONE_UPPER_BOUND}) {
    width: 100%;
  }
`

const LendTitle = styled(Title)`
  font-size: 1.3rem;
  text-align: left;
  padding: 1.2rem 1.6rem;
`

const LendMarkets = (props) => {
  const { modalRef } = props

  return (
    <LendContainer data-testid='lend-markets-container'>
      <LendTitle>Lend Markets</LendTitle>
      <Table
        headers={Lang.markets.lendMetrics}
        tableContent={
          <TableContent assets={Lang.markets.lendAssets} modalRef={modalRef} direction={LEND} />
        }
      />
    </LendContainer>
  )
}

LendMarkets.propTypes = {
  modalRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
}
export default LendMarkets
