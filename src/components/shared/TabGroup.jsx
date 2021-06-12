import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Row } from './layout'
import Tab from './Tab'

const TabList = styled.ul`
  margin: 0;
  margin-block: 0;
  padding-inline: 0;
  width: 100%;
  list-style: none;
  display: flex;
  flex-direction: row;
`

const TabListItem = styled.li`
  width: 50%;
  text-align: center;
  font-weight: 700;
`

const TabGroup = (props) => {
  const { tabs, selected, setSelected } = props

  return (
    <Row>
      <TabList>
        {tabs.map((name) => (
          <TabListItem key={name} onClick={() => setSelected(name)}>
            <Tab isSelected={name === selected}>{name}</Tab>
          </TabListItem>
        ))}
      </TabList>
    </Row>
  )
}

TabGroup.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  selected: PropTypes.string.isRequired,
  setSelected: PropTypes.func.isRequired,
}

export default TabGroup
