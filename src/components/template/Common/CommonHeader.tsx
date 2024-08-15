import siteMetadata from '@src/core/config/siteMetadata';
import React, { FunctionComponent } from 'react';

const CommonHeader: FunctionComponent = () => {
  return (
    <div className="relative w-full flex justify-between items-center">
      <h1 className="text-wy-blue-500 font-PyeongChangPeace-Bold">{siteMetadata.title}</h1>
    </div>
  );
};

export default CommonHeader;
