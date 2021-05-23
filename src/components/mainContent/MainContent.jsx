import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Container, Row } from '../shared/layout'
import Hero from '../hero/Hero'
import Balances from '../balances/Balances'
import LendMarkets from '../lendMarkets/LendMarkets'
import BorrowMarkets from '../borrowMarkets/BorrowMarkets'

const Content = styled(Container)`
  max-width: 100%;
  box-sizing: border-box;
  min-height: 100vh;
`

const MarketsRow = styled(Row)``

const MainContent = ({ element }) => {
  return (
    <main>
      <Content ref={element}>
        <Hero />
        <Balances />
        <MarketsRow>
          <LendMarkets />
          <BorrowMarkets />
        </MarketsRow>
      </Content>
    </main>
  )
}

MainContent.propTypes = {
  element: PropTypes.oneOfType([
    // Either a function
    PropTypes.func,
    // Or the instance of a DOM native element (see the note about SSR)
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
}
export default MainContent
