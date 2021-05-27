import React from 'react'
import styled from 'styled-components'
import { Container } from '../shared/layout'
import Hero from '../hero/Hero'
import Balances from '../balances/Balances'
import Markets from '../markets/Markets'

const Content = styled(Container)`
  max-width: 100%;
  box-sizing: border-box;
  min-height: 100vh;
  margin-bottom: 8%;
  padding-top: 8vh;
`

const MainContent = () => {
  return (
    <main data-testid='main-content-section'>
      <Content>
        <Hero />
        <Balances />
        <Markets />
      </Content>
    </main>
  )
}

export default MainContent
