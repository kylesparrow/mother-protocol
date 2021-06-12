import React from 'react'
import styled from 'styled-components'
import Lang from '../../util/lang'
import natureImg from '../../assets/mother-protocol-bg.png'

const Background = styled.div`
  min-height: 600px;
  position: relative;
  background-size: cover;
  background-image: url(${natureImg});
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Overlay = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.25);
  padding: 4%;
`

const Title = styled.h1`
  display: flex;
  align-self: flex-start;
  width: 45%;
  text-align: left;
  font-size: 2.7rem;
  color: #fff;
`

const MarketsLinkButton = styled.a`
  padding: 3% 5%;
  border-radius: 25px;
  border: 2px solid #fff;
  cursor: pointer;
  text-decoration: none;
  color: #ddd;
  background: #000;
  font-size: 1.5rem;
  font-weight: 700;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`

const Hero = () => {
  return (
    <section data-testid='hero'>
      <Background>
        <Overlay>
          <Title data-testid='hero-title'>{Lang.hero.title}</Title>
          <MarketsLinkButton href='#balances' data-testid='hero-markets-btn'>
            {Lang.hero.markets}
          </MarketsLinkButton>
        </Overlay>
      </Background>
    </section>
  )
}

export default Hero
