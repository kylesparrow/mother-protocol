import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Container } from './layout'
import { Label } from './interactive'

const TabContainer = styled(Container)`
  border-bottom: ${({ isSelected }) =>
    isSelected ? '3px solid #11bb11' : '1px solid transparent'};
`

const TabLabel = styled(Label)`
  color: ${({ isSelected }) => (isSelected ? '#11bb11' : '#AAB8C1')};
`

const Tab = (props) => {
  const { isSelected, children } = props
  return (
    <TabContainer isSelected={isSelected}>
      <TabLabel isSelected={isSelected}>{children}</TabLabel>
    </TabContainer>
  )
}

Tab.propTypes = {
  children: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
}

export default Tab
