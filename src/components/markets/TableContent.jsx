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
  &:hover td {
    border-top: 1px solid #11bb22;
    border-bottom: 1px solid #11bb22;
  }
`

const TableContent = (props) => {
  const { assets } = props
  return (
    <tbody>
      {assets.map(({ ticker, name, APY, wallet, liquidity }) => {
        return (
          <TableRow key={ticker} data-testid='markets-asset-row'>
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
}

export default TableContent
