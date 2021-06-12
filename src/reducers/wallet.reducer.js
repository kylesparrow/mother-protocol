import { UPDATE_ACCOUNTS, UPDATE_ADDRESS, UPDATE_SUMMARY } from './actionTypes'

export const initialState = {
  address: '',
  accounts: {},
  summary: {},
}

export default function walletReducer(state, action) {
  switch (action.type) {
    case UPDATE_ADDRESS:
      return {
        ...state,
        address: action.address,
      }
    case UPDATE_ACCOUNTS:
      return {
        ...state,
        accounts: action.accounts,
      }
    case UPDATE_SUMMARY:
      return {
        ...state,
        summary: action.summary,
      }
    default:
      return state
  }
}
