import React from 'react'
// import styled from 'styled-components'
import { Container, Row } from '../shared/layout'
import BorrowMarkets from './BorrowMarkets'
import LendMarkets from './LendMarkets'

const Markets = () => {
  return (
    <Container data-testid='markets-container'>
      <Row>
        <LendMarkets />
        <BorrowMarkets />
      </Row>
    </Container>
  )
}

export default Markets
