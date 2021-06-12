import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Row } from './layout'
import { TABLET_PORTRAIT_UPPER_BOUND } from '../../util/constants'

export const Button = styled.button`
  padding: 0.7rem 1.5rem;
  margin: 0.8% 1.5%;
  border-radius: 10px;
  color: #000;
  font-weight: 700;
  background: #c1af46;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:disabled,
  &[disabled] {
    background: #ccd6dd;
    cursor: not-allowed;
    &:hover {
      background: #ccd6dd;
      transform: scale(1);
      cursor: not-allowed;
    }
  }
  &:hover {
    background: #ecd36b;
    transform: scale(1.1);
  }
`

export const Label = styled.label`
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  padding: 3% 0;
  margin-bottom: 4%;
  font-size: 0.8rem;
  color: #333;
`

export const Input = styled.input`
  display: flex;
  width: 100%;
  height: 2.5rem;
  border: 1px solid #333;
  background: #fff;
  color: #000;
  padding: 2%;
  font-size: 1.3rem;
  margin-bottom: 4%;
  @media only screen and (max-width: ${TABLET_PORTRAIT_UPPER_BOUND}) {
    width: 100%;
    font-size: 1.8rem;
  }
`

const StyledRow = styled(Row)`
  width: 100%;
  justify-content: center;
`

const StyledH2 = styled.h2`
  margin: 0 auto;
  font-size: 1rem;
  line-height: 1.1rem;
  font-weight: 700;
`

export const TitleRow = (props) => {
  const { children } = props
  return (
    <StyledRow data-testid='title-row'>
      <StyledH2 data-testid='title'>{children}</StyledH2>
    </StyledRow>
  )
}
TitleRow.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
}

export const Title = (props) => {
  const { children } = props
  return <StyledH2 data-testid='title'>{children}</StyledH2>
}

Title.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
}

export const IconStyles = {
  fontSize: '3rem',
  border: '3px solid #000',
  borderRadius: '100px',
  padding: '0.1rem 0.3rem',
}

export const ExchangeIcon = (props) => {
  const { image, styles } = props
  let iconStyles
  if (styles) {
    iconStyles = { ...styles }
  } else {
    iconStyles = { ...IconStyles }
  }
  return <img src={image} alt='exchange-icon' style={iconStyles} />
}

ExchangeIcon.propTypes = {
  image: PropTypes.string.isRequired,
  styles: PropTypes.objectOf(PropTypes.string),
}

ExchangeIcon.defaultProps = {
  styles: {
    fontSize: '3rem',
    border: '3px solid #000',
    borderRadius: '100px',
    padding: '0.1rem 0.3rem',
  },
}
