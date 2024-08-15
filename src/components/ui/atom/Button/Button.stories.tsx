import { btnStyles } from '@src/utils/constants';
import { Meta } from '@storybook/react';
import React from 'react';

import Button from './Button';

const metaInfo: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
};

export default metaInfo;

const Template = ({ title, styles }: { title: string; styles: btnStyles }) => {
  return (
    <div>
      <h1>{title}</h1>
      <div className="inline-flex items-end gap-8">
        <Button size="xsmall" styles={styles}>
          xSmall
        </Button>
        <Button size="small" styles={styles}>
          Small
        </Button>
        <Button styles={styles}>Middle</Button>
        <Button size="large" styles={styles}>
          Large
        </Button>
      </div>
    </div>
  );
};

export const Chunk = () => {
  const styles = ['primary', 'secondary', 'tertiary', 'link', 'danger', 'success', 'warning'];

  return (
    <div className="flex flex-col gap-2">
      {styles.map((style, idx) => {
        return <Template key={`btn-template-${idx}`} title={style} styles={style as btnStyles} />;
      })}
    </div>
  );
};

export const FullWidth = () => {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <Button>Not Full Width</Button>
      </div>
      <div>
        <Button fullWidth>Fullwidth</Button>
      </div>
    </div>
  );
};
