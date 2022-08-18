import Modal from 'components/Modal/Index'
import { getValidChains } from 'configs'
import { ChainParamType, ChainsParams } from 'configs/constants'
import React, { useState } from 'react'
import SelectBox from './SelectBox'

interface ChainType {
  selectedChain: ChainParamType,
  marginBottom?: string,
  setChain: any
}

const Chain: React.FC<ChainType> = (props) => {
  const { selectedChain, setChain} = props
  const [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  const handleOpenModal = () => {
    setIsOpen(true)
  }

  const chains = getValidChains()

  return (
    <>
      <SelectBox
        label={`Select Network`}
        selectedChain={selectedChain.name}
        iconPath={selectedChain.iconPath}
        handleOpenModal={handleOpenModal}
      />
      <Modal title={'Select Network'} closeModal={closeModal} open={isOpen}>
        {chains.map((item, index) => {
          return (
            <div
              className={
                'rounded-md cursor-pointer py-3 px-2 items-center flex gap-2 ease-out duration-200 hover:bg-gray-300'
              }
              key={index}
              onClick={() => {
                setChain(item)
                closeModal()
              }}
            >
              <picture>
                <img className='w-7 h-7' src={ChainsParams[item].iconPath} 
                alt={ChainsParams[item].name} />
              </picture>
              <p className={'font-medium'}>{ChainsParams[item].name}</p>
            </div>
          )
        })}
      </Modal>
    </>
  )
}

export default Chain
