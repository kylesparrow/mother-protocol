const truncateAddress = (address) => `${address.substr(0, 6)}...${address.substr(-4, 4)}`

export default truncateAddress
