import React, { PropsWithChildren } from 'react'

const ActionButton: React.FC<PropsWithChildren> = (props) => {
  const { children } = props

  return (
    <button
      className='btn-primary h-14 text-lg font-medium'
    >
      {children}
    </button>
  )
}

export default ActionButton
