import React from 'react'
import styled from 'styled-components'
import Lang from '../../util/lang'
import { Container } from '../shared/layout'
import { Title } from '../shared/interactive'
import Table from './Table'
import TableContent from './TableContent'
import { SM_BREAKPOINT } from '../../util/constants'

const LendContainer = styled(Container)`
  box-sizing: border-box;
  width: 50%;
  @media only screen and (max-width: ${SM_BREAKPOINT}) {
    width: 100%;
  }
`

const LendTitle = styled(Title)`
  font-size: 1.3rem;
  text-align: left;
  padding: 1.2rem 1.6rem;
`

const LendMarkets = () => {
  // TODO: add display for user who has asset deposited
  // const handleClick = () => {
  //   // console.log('TOGGLED!')
  //   // console.log(e.target)
  // }

  return (
    <LendContainer data-testid='lend-markets-container'>
      <LendTitle>Lend Markets</LendTitle>
      <Table
        headers={Lang.markets.lendMetrics}
        tableContent={<TableContent assets={Lang.markets.lendAssets} />}
      />
    </LendContainer>
  )
}

export default LendMarkets
