import React, { useState } from 'react'
import PropTypes from 'prop-types'
import ReactModal from 'react-modal'
import { Button } from '../shared/interactive'

const ModalContentStyles = {
  content: {
    marginTop: '4rem',
    marginRight: 'auto',
    marginLeft: 'auto',
    width: '22rem',
    height: '22rem',
    borderRadius: '10px',
    padding: 0,
    zIndex: 4,
  },
}

const MarketModal = (props) => {
  const { content } = props
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <Button onClick={() => setShowModal(true)} data-testid='header-mother-balance' />
      <ReactModal
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        shouldCloseOnOverlayClick
        style={ModalContentStyles}
      >
        {content}
      </ReactModal>
    </>
  )
}

MarketModal.propTypes = {
  content: PropTypes.element.isRequired,
}

export default MarketModal
