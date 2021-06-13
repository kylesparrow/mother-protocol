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
import MarketDialog from '../components/markets/MarketDialog'
import { LEND, BORROW } from '../util/constants'
import { IconTitle } from '../components/shared/interactive'

export const initialState = {
  isLoading: false,
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
        title: <IconTitle icon={Coins.MOM.icon} title={`${Coins.MOM.name} Balance`} />,
        content: <BalanceDialog />,
      }
    case LEND_CONTENT:
      return {
        title: <IconTitle icon={Coins[action.token].icon} title={Coins[action.token].name} />,
        content: <MarketDialog token={action.token} direction={LEND} />,
        isLoading: true,
      }
    case BORROW_CONTENT:
      return {
        title: <IconTitle icon={Coins[action.token].icon} title={Coins[action.token].name} />,
        content: <MarketDialog token={action.token} direction={BORROW} />,
        isLoading: true,
      }
    default:
      return state
  }
}
