import BigNumber from 'bignumber.js'

export const truncateAddress = (address) => `${address.substr(0, 6)}...${address.substr(-4, 4)}`

export const formatUSD = (amount) => {
  if (!amount) return '$0.00'
  let formatted = amount
  if (typeof formatted === 'string') {
    if (formatted.substr(0, 1) === '$') {
      formatted = formatted.substring(1)
    }
  }
  formatted = `$${parseFloat(amount).toFixed(2)}`
  return formatted
}

export const formatTokens = (amount, precision = 4) => {
  // if (!amount) return '0.0000'
  let formatted = amount

  formatted = new BigNumber(formatted).toFixed(precision)
  return formatted
}
