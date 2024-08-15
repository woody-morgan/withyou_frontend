import SvgWrapper from '@src/components/atom/Icon/assets/SvgWrapper'
import { SvgComponentType } from '@src/core/types/svg-type'
import React, { FunctionComponent } from 'react'

const AlbumSelectedSvg: FunctionComponent<SvgComponentType> = ({ ...props }) => {
  return (
    <SvgWrapper {...props}>
      <rect x="2" y="1" width="20" height="22" rx="2" fill="#E2918D" />
      <path d="M2 3C2 1.89543 2.89543 1 4 1H7V23H4C2.89543 23 2 22.1046 2 21V3Z" fill="#F4C48A" />
      <rect y="6" width="5" height="3" rx="1.5" fill="#5A80E5" />
      <rect y="15" width="5" height="3" rx="1.5" fill="#5A80E5" />
      <rect x="12" y="6" width="5" height="3" rx="1.5" fill="#F4C48A" />
    </SvgWrapper>
  )
}

export default AlbumSelectedSvg
