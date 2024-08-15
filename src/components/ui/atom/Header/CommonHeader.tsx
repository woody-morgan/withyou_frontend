import siteMetadata from '@src/core/config/siteMetadata';
import Link from 'next/link';
import React, { FunctionComponent } from 'react';

const CommonHeader: FunctionComponent = () => {
  return (
    <div className="relative w-full flex justify-between items-center">
      <Link href="/Users/woodi/Programs/proj/OneWayTicket/forked/WithYou_FrontEnd/src/pages">
        <a>
          <h1 className="text-wy-blue-500 font-PyeongChangPeace-Bold">{siteMetadata.title}</h1>
        </a>
      </Link>
    </div>
  );
};

export default CommonHeader;
