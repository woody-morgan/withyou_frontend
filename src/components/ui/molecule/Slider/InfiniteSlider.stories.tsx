import { Meta } from '@storybook/react';
import React from 'react';

import InfiniteSlider from './InfiniteSlider';

const metaInfo: Meta<typeof InfiniteSlider> = {
  title: 'Components/InfiniteSlider',
  component: InfiniteSlider,
};

export default metaInfo;

export const Default = () => {
  return (
    <div className="">
      <InfiniteSlider enableInfinite enableDot>
        <div className="bg-green-500 h-96">abc1</div>
        <div className="bg-green-500 h-96">abc2</div>
        <div className="bg-green-500 h-96">abc3</div>
        <div className="bg-green-500 h-96">abc4</div>
      </InfiniteSlider>
    </div>
  );
};
