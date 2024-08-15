import SvgWrapper from '@src/components/ui/atom/Icon/assets/SvgWrapper';
import { SvgComponentType } from '@src/core/types/svg-type';
import React, { FunctionComponent } from 'react';

const StarSvg: FunctionComponent<SvgComponentType> = ({ ...props }) => {
  return (
    <SvgWrapper viewBox={20} {...props}>
      <path
        d="M0.833984 10C0.833984 10 6.21491 9.9524 8.2147 7.95262C10.2145 5.95284 10.2621 0.571909 10.2621 0.571909C10.2621 0.571909 10.3097 5.95284 12.3095 7.95262C14.3092 9.95241 19.6902 10 19.6902 10C19.6902 10 14.3092 10.0476 12.3095 12.0474C10.3097 14.0472 10.2621 19.4281 10.2621 19.4281C10.2621 19.4281 10.2145 14.0472 8.2147 12.0474C6.21491 10.0476 0.833984 10 0.833984 10Z"
        fill="white"
      />
    </SvgWrapper>
  );
};

export default StarSvg;
