import React from 'react'
import styled from 'styled-components'
import Lang from '../../util/lang'
import { Container, Row } from '../shared/layout'

const FooterContainer = styled(Container)`
  padding: 1% 2%;
  background: #999;
`

const StyledRow = styled(Row)`
  justify-content: space-between;
`

const Copyright = styled.span`
  display: flex;
  align-items: center;
  color: #ddd;
`

const Social = styled(Row)`
  box-sizing: border-box;
  margin: 0% 5%;
  align-items: center;
  justify-content: center;
`

const Link = styled.a`
  padding: 5%;
  text-decoration: none;
  color: #000;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #333;
    transform: scale(1.3);
  }
`

const Footer = () => {
  return (
    <footer>
      <FooterContainer data-testid='footer-container'>
        <StyledRow>
          <Copyright data-testid='footer-copyright'>{Lang.footer.copyright}</Copyright>
          <Social>
            {Lang.footer.social.map((link) => (
              <Link key={link.name} href={link.url} data-testid='footer-social-link'>
                {link.icon}
              </Link>
            ))}
          </Social>
        </StyledRow>
      </FooterContainer>
    </footer>
  )
}

export default Footer
