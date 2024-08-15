import SvgWrapper from '@src/components/atom/Icon/assets/SvgWrapper'
import { SvgComponentType } from '@src/core/types/svg-type'
import React, { FunctionComponent } from 'react'

const AppleLogo: FunctionComponent<SvgComponentType> = ({ ...props }) => {
  return (
    <SvgWrapper {...props}>
      <path
        d="M19.762 8.818C19.646 8.908 17.598 10.062 17.598 12.628C17.598 15.596 20.204 16.646 20.282 16.672C20.27 16.736 19.868 18.11 18.908 19.51C18.052 20.742 17.158 21.972 15.798 21.972C14.438 21.972 14.088 21.182 12.518 21.182C10.988 21.182 10.444 21.998 9.2 21.998C7.956 21.998 7.088 20.858 6.09 19.458C4.934 17.814 4 15.26 4 12.836C4 8.948 6.528 6.886 9.016 6.886C10.338 6.886 11.44 7.754 12.27 7.754C13.06 7.754 14.292 6.834 15.796 6.834C16.366 6.834 18.414 6.886 19.762 8.818ZM15.082 5.188C15.704 4.45 16.144 3.426 16.144 2.402C16.144 2.26 16.132 2.116 16.106 2C15.094 2.038 13.89 2.674 13.164 3.516C12.594 4.164 12.062 5.188 12.062 6.226C12.062 6.382 12.088 6.538 12.1 6.588C12.164 6.6 12.268 6.614 12.372 6.614C13.28 6.614 14.422 6.006 15.082 5.188Z"
        fill="black"
      />
    </SvgWrapper>
  )
}

export default AppleLogo
