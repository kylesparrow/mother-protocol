import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Container } from './layout'
import Tab from './Tab'

const TabList = styled.ul``

const TabListItem = styled.li``

const TabGroup = (props) => {
  const { tabs, selected, setSelected } = props

  return (
    <Container>
      <TabList>
        {tabs.map((name) => (
          <TabListItem key={name} onClick={() => setSelected(name)}>
            <Tab isSelected={name === selected}>{name}</Tab>
          </TabListItem>
        ))}
      </TabList>
    </Container>
  )
}

TabGroup.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  selected: PropTypes.string.isRequired,
  setSelected: PropTypes.func.isRequired,
}

export default TabGroup
