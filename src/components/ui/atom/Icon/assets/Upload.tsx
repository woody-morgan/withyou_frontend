import SvgWrapper from '@src/components/ui/atom/Icon/assets/SvgWrapper';
import { SvgComponentType } from '@src/core/types/svg-type';
import React, { FunctionComponent } from 'react';

const UploadSVG: FunctionComponent<SvgComponentType> = ({ ...props }) => {
  return (
    <SvgWrapper aria-hidden="true" fill="none" stroke="currentColor" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
      ></path>
    </SvgWrapper>
  );
};

export default UploadSVG;
