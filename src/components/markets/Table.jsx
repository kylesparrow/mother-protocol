import React, { useState, useRef, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledTable = styled.table`
  width: 100%;
  overflow: auto;
  display: grid;
  grid-template-columns: minmax(50px, 1.5fr) repeat(3, minmax(50px, 1fr));
  grid-template-rows: max-content;
  thead,
  tbody,
  tr {
    display: contents;
  }
`

const Heading = styled.th`
  position: relative;
  font-size: 0.8rem;
  text-align: left;
  padding: 1.2rem 1.6rem;
  color: #333;
  span {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    display: block;
  }
`

const ResizeHandle = styled.div`
  display: block;
  position: absolute;
  cursor: col-resize;
  width: 7px;
  right: 0;
  top: 0;
  z-index: 1;
  border-right: 2px solid transparent;
  height: ${({ tableHeight }) => tableHeight && tableHeight};
  &:hover {
    border-color: #ccc;
  }

  &:active {
    border-color: #517ea5;
  }
`

const createHeaders = (headers) => {
  return headers.map((item) => ({
    text: item,
    ref: useRef(),
  }))
}

const Table = ({ headers, minCellWidth, tableContent }) => {
  const [tableHeight, setTableHeight] = useState('auto')
  const [activeIndex, setActiveIndex] = useState(null)
  const tableElement = useRef(null)
  const columns = createHeaders(headers)

  useEffect(() => {
    setTableHeight(tableElement.current.offsetHeight)
  }, [])

  const onMouseDown = (index) => {
    setActiveIndex(index)
  }

  const onMouseMove = useCallback(
    (e) => {
      const gridColumns = columns.map((col, i) => {
        if (i === activeIndex) {
          const width = e.clientX - col.ref.current.offsetLeft
          if (width >= minCellWidth) {
            return `${width}px`
          }
        }
        return `${col.ref.current.offsetWidth}px`
      })
      tableElement.current.style.gridTemplateColumns = `${gridColumns.join('')}`
    },
    [activeIndex, columns, minCellWidth]
  )

  const removeListeners = useCallback(() => {
    window.removeEventListener('mousemove', onMouseMove)
    window.removeEventListener('mouseup', removeListeners)
  }, [onMouseMove])

  const onMouseUp = useCallback(() => {
    setActiveIndex(null)
    removeListeners()
  }, [setActiveIndex, removeListeners])

  useEffect(() => {
    if (activeIndex !== null) {
      window.addEventListener('mousemove', onMouseMove)
      window.addEventListener('mouseup', onMouseUp)
    }

    return () => {
      removeListeners()
    }
  }, [activeIndex, onMouseMove, onMouseUp, removeListeners])

  return (
    <StyledTable ref={tableElement}>
      <thead>
        <tr>
          {columns.map(({ text, ref }, i) => (
            <Heading ref={ref} key={text} data-testid='markets-column-header'>
              <span>{text}</span>
              <ResizeHandle
                tableHeight={tableHeight}
                onMouseDown={() => onMouseDown(i)}
                isActive={activeIndex === i}
              />
            </Heading>
          ))}
        </tr>
      </thead>
      {tableContent}
    </StyledTable>
  )
}

Table.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  minCellWidth: PropTypes.number,
  tableContent: PropTypes.number.isRequired,
}

Table.defaultProps = {
  minCellWidth: 60,
}

export default Table
