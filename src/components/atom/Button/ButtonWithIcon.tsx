import { Button, Icon } from '@src/components/atom';
import { ButtonProps } from '@src/components/atom/Button/Button';
import { IconProps } from '@src/components/atom/Icon/Icon';
import { WithChange } from '@src/core/types/util-type';
import cx from 'classnames';
import React, { forwardRef, ForwardRefRenderFunction } from 'react';

const ButtonWithIcon: ForwardRefRenderFunction<
  HTMLButtonElement,
  ButtonProps & WithChange<Omit<IconProps, 'className'>>
> = ({ children, nameChange, sizeChange, ...props }, ref) => {
  return (
    <span className="relative">
      <Button ref={ref} className={cx('relative my-1.5 disabled:opacity-50 text-md')} {...props}>
        <Icon className="absolute translate-center-y left-4" size={sizeChange} name={nameChange} />
        {children}
      </Button>
    </span>
  );
};

export default forwardRef(ButtonWithIcon);
