import React from 'react'
import styled from 'styled-components'
import Lang from '../../util/lang'
import { Container, Row } from '../shared/layout'
import { Button } from '../shared/interactive'

const Wrapper = styled(Row)`
  justify-content: space-between;
`

const Copyright = styled.span`
  display: flex;
  align-items: center;
`

const Social = styled(Row)`
  align-items: center;
`

const Link = styled.a`
  text-decoration: none;
`

const Footer = () => (
  <Container data-testid='footer-container'>
    <Wrapper>
      <Copyright data-testid='footer-copyright'>{Lang.footer.copyright}</Copyright>
      <Row>
        <Social>
          {Lang.footer.social.map((link) => (
            <Link key={link.name} href={link.url} data-testid='footer-social-link'>
              {link.icon}
            </Link>
          ))}
        </Social>
        <Button>{Lang.footer.connect}</Button>
      </Row>
    </Wrapper>
  </Container>
)

export default Footer
