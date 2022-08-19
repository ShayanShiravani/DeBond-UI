import { useWeb3React } from '@web3-react/core'
import { AmountBoxWraper, Input, Max } from '../../../components/StyledComponents'
import { Type } from '../../../components/Text'
import React from 'react'
import { Flex } from 'rebass'
import Token from './Token'

interface AmountBoxType {
  label: string,
  amount?: string,
  margin?: string,
  token: {
    symbol: string,
    iconPath: string
  },
  hasMaxBtn?: boolean,
  balance: string
}

const AmountBox: React.FC<AmountBoxType> = (props) => {
  const { label, amount, hasMaxBtn, margin, token, balance } = props
  const { account } = useWeb3React()

  return (
    <>
      <div className={`w-full ${margin?margin:''}`}>
        <Flex width="100%" justifyContent="space-between" alignItems="center">
          {label && <div className={'text-label text-sm pl-1 font-medium mb-2'}>{label}</div>}

          <Flex justifyContent="flex-end" alignItems="center">
            {account && 
            <Type.SM color="#313144">
              Balance: {balance + ' ' + token.symbol}
              <span className={'inline-block pl-1 font-medium'}>
              </span>
            </Type.SM>
            }
            {hasMaxBtn && (
              <Max
                cursor={'pointer'}
                className={'btn-primary-inverted px-1 py-px rounded font-medium text-[11px]'}
              >
                Max
              </Max>
            )}
          </Flex>
        </Flex>

        <AmountBoxWraper
          className={'relative rounded-xl'}
        >
          <Input
            className={'bg-input font-medium text-sm rounded-xl h-14 px-4 py-3.5'}
            value={amount}
            placeholder="Enter Amount"
            min={`0`}
            disabled={false}
          />
          <Token 
            logo={token.iconPath} 
            name={token.symbol} 
            className="absolute rounded-xl inset-y-0 right-0 h-full bg-input"
          />
        </AmountBoxWraper>
      </div>
    </>
  )
}

export default AmountBox
