import React, { useReducer, forwardRef, useImperativeHandle } from 'react'
// import PropTypes from 'prop-types'
import ReactModal from 'react-modal'
import styled from 'styled-components'
// import { useContractKit } from '@celo-tools/use-contractkit'
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
  content: {
    position: 'static',
    marginTop: '8rem',
    marginRight: 'auto',
    marginLeft: 'auto',
    width: '22rem',
    minHeight: '22rem',
    maxHeight: '30rem',
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
  padding: 0.5rem;
`

const ModalTitle = styled(TitleRow)`
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
  padding: 2rem 3rem 1rem;
`

const BaseModal = forwardRef((props, ref) => {
  const [modal, dispatchModal] = useReducer(modalReducer, initialModalState)

  // const { address, kit } = useContractKit()

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
        console.log('OPEN MARKET: ', token, direction)
        if (direction === LEND) {
          dispatchModal({ type: BORROW_CONTENT, token })
        } else if (direction === BORROW) {
          dispatchModal({ type: LEND_CONTENT, token })
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
        <Header>
          <ModalTitle>{modal.title}</ModalTitle>
          <CloseX>
            <CloseButton
              onClick={() => {
                ref.current.testMethod()
                close()
              }}
            >
              <AiOutlineClose />
            </CloseButton>
          </CloseX>
        </Header>
        <ModalBody>{modal.content}</ModalBody>
      </Column>
    </ReactModal>
  )
})

BaseModal.displayName = 'BaseModal'

// BaseModal.propTypes = {
//   currentToken: PropTypes.shape({
//     name: PropTypes.string,
//     icon: PropTypes.string.isRequired,
//     balance: PropTypes.number,
//   }),
// }

// BaseModal.defaultProps = {
//   currentToken: { name: 'CELO', icon: '../../assets/CELO-color-icon.svg' },
// }

export default BaseModal
