import React, { FC } from 'react';

const FullWidthOverflowWrapper: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <div className="relative w-full h-full overflow-y-scroll overflow-x-hidden">{children}</div>
  );
};

export default FullWidthOverflowWrapper;
