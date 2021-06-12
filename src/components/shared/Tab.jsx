import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Container } from './layout'
import { Label } from './interactive'

const TabContainer = styled(Container)`
  border-bottom: ${({ isSelected, active }) =>
    isSelected ? `3px solid ${active}` : '1px solid transparent'};
`

const TabLabel = styled(Label)`
  cursor: pointer;
  font-size: 0.6rem;
  margin: 0;
  color: ${({ isSelected, active }) => (isSelected ? active : '#AAB8C1')};
`

const Tab = (props) => {
  const { isSelected, active, children } = props
  return (
    <TabContainer isSelected={isSelected} active={active}>
      <TabLabel isSelected={isSelected} active={active}>
        {children}
      </TabLabel>
    </TabContainer>
  )
}

Tab.propTypes = {
  children: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  active: PropTypes.string.isRequired,
}

export default Tab
