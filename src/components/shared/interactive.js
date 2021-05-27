import styled from 'styled-components'

export const Button = styled.button`
  padding: 0.7rem 1.5rem;
  margin: 0.8% 1.5%;
  border-radius: 10px;
  color: #000;
  background: #4cdd91;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: #1cff91;
    transform: scale(1.1);
  }
`

export const Title = styled.h1`
  font-size: 2.3rem;
  line-height: 1.1rem;
  font-weight: 700;
`
