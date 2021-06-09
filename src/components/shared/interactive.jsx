import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Row } from './layout'

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
