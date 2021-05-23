import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes, css } from 'styled-components'
import { FaSourcetree } from 'react-icons/fa'
import Lang from '../../util/lang'

const moveDown = keyframes`
  from {
    transform: translateY(-5rem);
  }
  to {
    transform: translateY(0rem);
  }
`

const rotate = keyframes`
    0% {
      transform: {rotateY(360deg)};
    }
    100% {
      transform: {rotateY(0rem)};
    }
  }
`

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2%;
  z-index: 1;
  width: 100%;
  min-height: 6vh;
  box-sizing: border-box;
  background: #eee;
  ${({ isSticky }) =>
    isSticky &&
    css`
      position: fixed;
      top: 0;
      left: 0;
      background-color: 'lightblue';
      box-shadow: 1px 1px 1px #222;
      animation: ${moveDown} 0.5s ease-in-out;
      transition: all 0.5s ease-in;
    `}
`

const Logo = styled.div`
  display: flex;
  flex-flow: row nowrap;
  /* width: 2rem;
  height: 2rem; */
  margin-right: 0.5rem;
  ${({ isSticky }) =>
    isSticky &&
    css`
      animation: ${rotate} 0.7s ease-in-out 0.5s;
    `}
`

const ConnectButton = styled.button`
  padding: 1rem 2rem;
  color: #000;
  border-radius: 10px;
`

const Header = ({ isSticky }) => {
  // const [scrolled, setScrolled] = useState(false)

  // const handleScroll = () => {
  //   const offset = window.scrollY
  //   if (offset > 200) {
  //     setScrolled(true)
  //   } else {
  //     setScrolled(false)
  //   }
  // }

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll)
  // })

  return (
    <Wrapper isSticky={isSticky} data-testid='header'>
      <Logo data-testid='header-logo'>
        <FaSourcetree />
        {Lang.header.company}
      </Logo>
      <ConnectButton data-testid='header-connect-btn'>{Lang.header.connect}</ConnectButton>
    </Wrapper>
  )
}

Header.propTypes = {
  isSticky: PropTypes.bool.isRequired,
}

export default Header
