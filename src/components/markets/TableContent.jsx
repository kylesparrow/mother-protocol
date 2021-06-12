import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Cell = styled.td`
  text-align: left;
  padding: 1.2rem 1.6rem;
  border-top: 1px solid #ccc;
  span {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    display: block;
  }
`

const TableRow = styled.tr`
  font-weight: 600;
  td {
    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;
  }
  &:hover td {
    border-top: 3px solid #11bb22;
    border-bottom: 3px solid #11bb22;
  }
`

const TableContent = (props) => {
  const { assets, modalRef, direction } = props

  return (
    <tbody>
      {assets.map(({ ticker, name, APY, wallet, liquidity }) => {
        return (
          <TableRow
            key={ticker}
            onClick={() => modalRef.current.openMarketModal(ticker, direction)}
            data-testid='markets-asset-row'
          >
            <Cell data-testid='markets-asset-name'>{name}</Cell>
            <Cell data-testid='markets-asset-apy'>{APY}</Cell>
            <Cell data-testid='markets-asset-wallet'>{`${wallet} ${ticker}`}</Cell>
            <Cell data-testid='markets-asset-liquidity'>{liquidity}</Cell>
          </TableRow>
        )
      })}
    </tbody>
  )
}

TableContent.propTypes = {
  assets: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      ticker: PropTypes.string.isRequired,
      APY: PropTypes.string.isRequired,
      wallet: PropTypes.string.isRequired,
      liquidity: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
    })
  ).isRequired,
  modalRef: PropTypes.oneOfType([
    // Either a function
    PropTypes.func,
    // Or the instance of a DOM native element (see the note about SSR)
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
  direction: PropTypes.string.isRequired,
}

export default TableContent
