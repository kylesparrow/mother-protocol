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
  formatted = `$${parseFloat(formatted).toFixed(2)}`
  return formatted
}

export const formatToken = (amount, precision = 4) => {
  let formatted = amount

  formatted = new BigNumber(formatted).toFixed(precision)
  return formatted
}

export const toTitleCase = (unformatted) => {
  return unformatted.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  })
}

export const formatPercent = (percent) => {
  if (!percent) return '0.00%'
  let formatted = percent
  if (typeof formatted === 'string') {
    if (formatted.substr(formatted.length - 1) === '%') {
      formatted = formatted.substring(0, formatted.length - 1)
    }
  }
  if (parseFloat(formatted) < 1) {
    formatted = parseFloat(formatted) * 100
  }
  formatted = `${parseFloat(formatted).toFixed(2)}%`
  return formatted
}
