import SvgWrapper from '@src/components/atom/Icon/assets/SvgWrapper'
import { SvgComponentType } from '@src/core/types/svg-type'
import React, { FunctionComponent } from 'react'

const ProfileSelectedSvg: FunctionComponent<SvgComponentType> = ({ ...props }) => {
  return (
    <SvgWrapper {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.0012 23C18.0762 23 23 18.0762 23 12.0011C23 5.92612 18.0762 1 12.0012 1C5.92617 1 1.00006 5.92612 1.00006 12.0011C0.979548 18.0556 5.86918 22.9795 11.9237 23C11.951 23 11.9761 23 12.0012 23Z"
        fill="#F4C48A"
      />
      <rect x="9" y="8" width="2" height="3" rx="1" fill="#5A80E5" />
      <rect x="13" y="8" width="2" height="3" rx="1" fill="#5A80E5" />
      <path
        d="M14.4903 13H9.50966C9.22978 13 9.0089 13.2296 9.06164 13.5045C9.2256 14.3591 9.82378 16 12 16C14.1762 16 14.7744 14.3591 14.9384 13.5045C14.9911 13.2296 14.7702 13 14.4903 13Z"
        fill="#E2918D"
      />
    </SvgWrapper>
  )
}

export default ProfileSelectedSvg
