import SvgWrapper from '@src/components/atom/Icon/assets/SvgWrapper'
import { SvgComponentType } from '@src/core/types/svg-type'
import React, { FunctionComponent } from 'react'

const KakaoLogo: FunctionComponent<SvgComponentType> = ({ ...props }) => {
  return (
    <SvgWrapper {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.7094 3C6.34483 3 2 6.45813 2 10.67C2 13.4187 3.81773 15.8128 6.52217 17.1872L5.59113 20.601C5.5468 20.6897 5.59113 20.8227 5.6798 20.9113C5.72414 20.9557 5.81281 21 5.85714 21C5.90148 21 5.99015 20.9557 6.03448 20.9557L9.9803 18.2956C10.5567 18.3842 11.133 18.4286 11.7537 18.4286C17.1182 18.4286 21.4631 14.9704 21.4631 10.7586C21.4631 6.45813 17.1182 3 11.7094 3Z"
        fill="#181600"
      />
    </SvgWrapper>
  )
}

export default KakaoLogo
