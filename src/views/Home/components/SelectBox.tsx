import { faChevronDown } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

interface SelectBoxType {
  label: string,
  placeholder?: string,
  selectedChain: string,
  iconPath: string,
  handleOpenModal: any
}

const SelectBox: React.FC<SelectBoxType> = (props) => {
  const { label, selectedChain, iconPath, handleOpenModal } = props

  return (
    <>
      {label && <div className={'text-label text-sm pl-1 font-medium mb-2'}>{label}</div>}
      <div
        onClick={handleOpenModal}
        className={'bg-input cursor-pointer rounded-xl cursor-pointer'}
      >
        <div className={'relative items-center px-4 py-3.5 flex gap-2'}>
          <picture>
            <img className={'w-7 h-7'} src={iconPath} alt={label} />
          </picture>
          <p className={'font-medium flex items-center'}>{selectedChain}</p>
          <FontAwesomeIcon
            style={{ fontSize: 20 }}
            className={'absolute right-5'}
            icon={faChevronDown}
          ></FontAwesomeIcon>
        </div>
      </div>
    </>
  )
}

export default SelectBox
