import { motion, MotionProps } from 'framer-motion'
import React, { FC } from 'react'

import Icon, { SVGTypes } from './Icon'

interface IconButtonProps extends MotionProps {
  classNames?: string
  name: SVGTypes
  type?: 'button' | 'submit' | 'reset'
  size?: number
  onClick: (e?) => void
}

const IconButton: FC<IconButtonProps> = ({ classNames, type = 'button', onClick, ...props }) => {
  return (
    <motion.button type={type} onClick={onClick} className={classNames}>
      <Icon {...props} />
    </motion.button>
  )
}

export default IconButton
