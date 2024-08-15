import React, { FC } from 'react'

import Icon, { SVGTypes } from '../../atom/Icon/Icon'

export type IconButtonProps = {
  className?: string
  name: SVGTypes
  type?: 'button' | 'submit' | 'reset'
  size?: number
  onClick: (e?) => void
}

const IconButton: FC<IconButtonProps> = ({ className, name, type = 'button', size, onClick }) => {
  return (
    <button className={className} name={name} type={type} onClick={onClick}>
      <Icon name={name} size={size} />
    </button>
  )
}

export default IconButton
