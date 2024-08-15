import SvgWrapper from '@src/components/ui/atom/Icon/assets/SvgWrapper';
import { SvgComponentType } from '@src/core/types/svg-type';
import React, { FunctionComponent } from 'react';

const EllipticVertical: FunctionComponent<SvgComponentType> = ({ ...props }) => {
  return (
    <SvgWrapper {...props}>
      <circle cx="12" cy="4" r="2.5" fill="#C4CDD5" />
      <circle cx="12" cy="12" r="2.5" fill="#C4CDD5" />
      <circle cx="12" cy="20" r="2.5" fill="#C4CDD5" />
    </SvgWrapper>
  );
};

export default EllipticVertical;
