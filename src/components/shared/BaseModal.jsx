import React, { useReducer, forwardRef, useImperativeHandle } from 'react'
import ReactModal from 'react-modal'
import styled from 'styled-components'
import { AiOutlineClose } from 'react-icons/ai'
import modalReducer, { initialState as initialModalState } from '../../reducers/modal.reducer'
import { Column, Container, Row } from './layout'
import { TitleRow } from './interactive'
import {
  BALANCE_CONTENT,
  BORROW_CONTENT,
  CLOSE_MODAL,
  LEND_CONTENT,
  OPEN_MODAL,
} from '../../reducers/actionTypes'
import { LEND, BORROW } from '../../util/constants'

const ModalContentStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
  },
  // FIXME: balance modal needs 8rem margin top
  // FIXME: balance modal needs 22rem width
  content: {
    position: 'fixed',
    marginTop: '2rem',
    marginRight: 'auto',
    marginLeft: 'auto',
    width: '18rem',
    minHeight: '22rem',
    maxHeight: '36rem',
    borderRadius: '10px',
    padding: 0,
    zIndex: 101,
  },
}

const Header = styled(Row)`
  font-size: 0.8rem;
  font-weight: 600;
  position: relative;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.25px solid rgba(0, 0, 0, 0.05);
  padding: 0.3rem 0.5rem 0.1rem;
`

const ModalTitleRow = styled(TitleRow)`
  position: absolute;
  left: 0;
  right: 0;
`

const CloseX = styled.div`
  position: absolute;
  right: 0.3rem;
  border: 1px solid transparent;
  display: inline-block;
  border-radius: 3px;
  cursor: pointer;
`

const CloseButton = styled.button`
  background-color: transparent;
  border: 0;
  padding: 1px;
  cursor: pointer;
`

const ModalBody = styled(Container)`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: stretch;
  height: 100%;
  padding: 0;
`

const BaseModal = forwardRef((props, ref) => {
  const [modal, dispatchModal] = useReducer(modalReducer, initialModalState)

  const open = () => dispatchModal({ type: OPEN_MODAL })
  const close = () => dispatchModal({ type: CLOSE_MODAL })

  useImperativeHandle(ref, () => {
    return {
      testMethod: () => console.log('testing modal ref'),
      openModal: () => open(),
      closeModal: () => close(),
      openBalanceModal: () => {
        dispatchModal({ type: BALANCE_CONTENT })
        open()
      },
      openMarketModal: (token, direction) => {
        if (direction === LEND) {
          dispatchModal({ type: LEND_CONTENT, token })
        } else if (direction === BORROW) {
          dispatchModal({ type: BORROW_CONTENT, token })
        }
        open()
      },
    }
  })

  return (
    <ReactModal
      isOpen={modal.isOpen}
      // contentLabel={currentToken.name}
      onRequestClose={close}
      style={ModalContentStyles}
    >
      <Column>
        <Header data-testid='modal-header'>
          <ModalTitleRow data-testid='modal-title'>{modal.title}</ModalTitleRow>
          <CloseX>
            <CloseButton
              data-testid='modal-close-btn'
              onClick={() => {
                ref.current.testMethod()
                close()
              }}
            >
              <AiOutlineClose />
            </CloseButton>
          </CloseX>
        </Header>
        <ModalBody data-testid='modal-body'>{modal.content}</ModalBody>
      </Column>
    </ReactModal>
  )
})

BaseModal.displayName = 'BaseModal'

export default BaseModal
