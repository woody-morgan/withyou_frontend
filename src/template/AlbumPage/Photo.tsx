import React from 'react'
import { RenderImageProps } from 'react-photo-gallery'

export const CustomPhoto = ({
  index,
  onClick,
  photo,
  margin,
  direction,
  top,
  left,
}: RenderImageProps) => {
  const handleClick = (e) => {
    onClick(e, { index })
  }
  return <img src={photo.src} key={photo.key} onClick={onClick ? handleClick : null} />
}

export default CustomPhoto
