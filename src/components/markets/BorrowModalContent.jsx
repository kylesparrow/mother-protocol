import React from 'react'
import styled from 'styled-components'
import { Container, Row, Column } from '../shared/layout'
// import { formatUSD, formatTokens } from '../../util/format'

const BorrowContainer = styled(Container)``

const BorrowModalContent = () => {
  return (
    <BorrowContainer>
      <Column>
        <Row>Borrow Modal</Row>
      </Column>
    </BorrowContainer>
  )
}

export default BorrowModalContent
