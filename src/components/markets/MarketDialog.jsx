import React from 'react'
import styled from 'styled-components'
import { Button } from '../shared/interactive'
import { Container, Row } from '../shared/layout'
import Tab from '../shared/Tab'
import TabGroup from '../shared/TabGroup'

const EnableToken = styled(Container)``

const DataContainer = styled(Container)``

const InputBox = styled.div``

const TransferButtonRow = styled(Row)``

const TransferButton = styled(Button)`
  background: #000;
  color: #fff;
  border-radius: 5px;
  width: 100%;
`

const MarketDialog = () => {
  return (
    <div>
      {currentToken.balance > 0 ? (
        <InputBox>
          <Input
            value={actionValue}
            // onChange={(e) => setActionValue(e.currentTarget.value)}
          />
          <Button>MAX</Button>
        </InputBox>
      ) : (
        <EnableToken>
          <IconRow>{currentToken.icon}</IconRow>
          <p>{Lang.markets.assetNotEnabledError}</p>
        </EnableToken>
      )}
      <TabGroup
        tabs={actionTabs}
        // selected={selected}
        // setSelected={setSelected}
      >
        <Tab>Supply</Tab>
        <Tab>Withdraw</Tab>
      </TabGroup>
      <DataContainer>{content}</DataContainer>

      <TransferButtonRow>
        <TransferButton disabled={parseInt(actionValue, 10) > 0.0}>
          {currentToken.balance > 0 ? 'No Funds Available' : 'Nothing to Withdraw'.toUpperCase()}
        </TransferButton>
      </TransferButtonRow>
    </div>
  )
}

MarketDialog.propTypes = {
  actionValue: PropTypes.number,
}

MarketDialog.defaultProps = {
  actionValue: 0.0,
}

export default MarketDialog
