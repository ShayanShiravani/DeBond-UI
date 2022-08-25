import React, { PropsWithChildren } from 'react'

interface ActionButtonType {
  style: string,
  onClick?: any
}

const ActionButton: React.FC<PropsWithChildren<ActionButtonType>> = (props) => {
  const { children, style, onClick } = props

  return (
    <button
      className={`${style} h-14 text-lg font-medium`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default ActionButton
