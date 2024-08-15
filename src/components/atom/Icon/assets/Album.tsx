import SvgWrapper from '@src/components/atom/Icon/assets/SvgWrapper';
import { SvgComponentType } from '@src/core/types/svg-type';
import React, { FunctionComponent } from 'react';

const AlbumSvg: FunctionComponent<SvgComponentType> = ({ ...props }) => {
  return (
    <SvgWrapper {...props}>
      <rect x="2" y="1" width="20" height="22" rx="2" fill="#A3AAB2" />
      <path d="M2 3C2 1.89543 2.89543 1 4 1H7V23H4C2.89543 23 2 22.1046 2 21V3Z" fill="#C4CDD5" />
      <rect y="6" width="5" height="3" rx="1.5" fill="#A3AAB2" />
      <rect x="12" y="6" width="5" height="3" rx="1.5" fill="#C4CDD5" />
      <rect y="15" width="5" height="3" rx="1.5" fill="#A3AAB2" />
    </SvgWrapper>
  );
};

export default AlbumSvg;
