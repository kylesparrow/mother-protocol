import React from 'react'
import {
  OPEN_MODAL,
  CLOSE_MODAL,
  UPDATE_CURRENT_TOKEN,
  BALANCE_CONTENT,
  LEND_CONTENT,
  BORROW_CONTENT,
} from './actionTypes'
import Coins from '../components/shared/Coins'
import BalanceDialog from '../components/balances/BalanceDialog'

export const initialState = {
  isOpen: false,
  currentToken: {},
  title: null,
  content: null,
  direction: '',
  actionValue: 0,
  actionSelected: '',
}

export default function modalReducer(state, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        isOpen: true,
      }
    case CLOSE_MODAL:
      return {
        ...state,
        isOpen: false,
      }
    case UPDATE_CURRENT_TOKEN:
      return {
        ...state,
        currentToken: action.token,
      }
    case BALANCE_CONTENT:
      return {
        title: (
          <span>
            {Coins.MOM.icon}
            {Coins.MOM.name} Balance
          </span>
        ),
        content: <BalanceDialog />,
      }
    case LEND_CONTENT:
      return {
        title: (
          <span>
            {Coins[action.token].icon}
            {Coins[action.token].name}
          </span>
        ),
        content: '',
      }
    case BORROW_CONTENT:
      return {
        title: (
          <span>
            {Coins[action.token].icon}
            {Coins[action.token].name}
          </span>
        ),
        content: '',
      }
    default:
      return state
  }
}
