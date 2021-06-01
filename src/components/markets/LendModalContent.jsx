import React from 'react'
import styled from 'styled-components'
import { Container, Row, Column } from '../shared/layout'
// import { formatUSD, formatTokens } from '../../util/format'

const LendContainer = styled(Container)``

const LendModalContent = () => {
  return (
    <LendContainer>
      <Column>
        <Row>Lend Modal</Row>
      </Column>
    </LendContainer>
  )
}

export default LendModalContent
