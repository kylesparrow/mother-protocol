import React from 'react'
import { render } from '@testing-library/react'
import Footer from './Footer'
import Lang from '../../util/lang'

describe('Footer component', () => {
  it('renders', () => {
    const { getByTestId } = render(<Footer />)
    const footer = getByTestId('footer-container')
    expect(footer).toBeInTheDocument()
  })

  it('displays copyright', () => {
    const { getByTestId } = render(<Footer />)
    const copyright = getByTestId('footer-copyright')
    expect(copyright).toHaveTextContent(Lang.footer.copyright)
  })

  it('displays social media links', () => {
    const { getAllByTestId } = render(<Footer />)
    const socialLinks = getAllByTestId('footer-social-link')
    expect(socialLinks).toHaveLength(Lang.footer.social.length)
    const linkUrls = Lang.footer.social.map((media) => media.url).join(' ')
    socialLinks.forEach((link) => {
      expect(linkUrls).toContain(link.getAttribute('href'))
    })
  })
})
