import { networkConfigs } from "configs/constants/networks"

export const shortenAddress = (address: string): string | null => {
  return address
    ? address.substring(0, 2) + '...' + address.substring(address.length - 4, address.length)
    : null
}

export const addRPC = async (chainId: number, provider?: any): Promise<void> => {
  const web3 = provider?.currentProvider ?? window.ethereum
  if (!chainId || !web3 || !networkConfigs[chainId]) return
  web3
    .request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: networkConfigs[chainId].chainId }],
    })
    .then((result: any) => {
      console.log('Successfully switched', result)
    })
    .catch((switchError: any) => {
      if (switchError.code === 4902) {
        web3
          .request({
            method: 'wallet_addEthereumChain',
            params: [networkConfigs[chainId]],
          })
          .then((result: any) => {
            console.log('Successfully added', result)
          })
          .catch((error: any) => {
            console.log('Something went wrong trying to add a new  network RPC: ')
            return console.error(error)
          })
      }
      console.log('Unknown error occurred when trying to change the network RPC: ')
      console.error(switchError)
    })
}

