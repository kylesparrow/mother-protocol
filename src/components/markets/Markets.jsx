import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Container } from '../shared/layout'
import BorrowMarkets from './BorrowMarkets'
import LendMarkets from './LendMarkets'
import { PHONE_UPPER_BOUND } from '../../util/constants'

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
  @media only screen and (max-width: ${PHONE_UPPER_BOUND}) {
    flex-flow: column nowrap;
  }
`
const Markets = (props) => {
  const { modalRef } = props

  return (
    <section data-testid='markets-section'>
      <MarketsContainer>
        <ResponsiveContainer>
          <LendMarkets modalRef={modalRef} />
          <BorrowMarkets modalRef={modalRef} />
        </ResponsiveContainer>
      </MarketsContainer>
    </section>
  )
}

Markets.propTypes = {
  modalRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
}

export default Markets
