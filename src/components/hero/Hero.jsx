import React from 'react'
import styled from 'styled-components'
import Lang from '../../util/lang'

const Background = styled.div``

const Overlay = styled.div``

const Title = styled.h1``

const MarketsButton = styled.button``

const Hero = () => {
  return (
    <section data-testid='hero'>
      <Background>
        <Overlay>
          <Title data-testid='hero-title'>{Lang.hero.title}</Title>
          <MarketsButton data-testid='hero-markets-btn'>{Lang.hero.markets}</MarketsButton>
        </Overlay>
      </Background>
    </section>
  )
}

export default Hero
