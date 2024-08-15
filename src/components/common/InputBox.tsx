import React, { ChangeEventHandler, FC, memo } from 'react'
import cx from 'classnames'
import { inputBoxSizes } from '@src/utils/constants'

const sizeSelector: { [keys in inputBoxSizes] } = {
  small: 'h-12',
  medium: 'h-14',
  large: 'h-16',
}

const InputBox: FC<{
  type: 'id' | 'email' | 'password'
  name: string
  label: string
  value: string | number
  size?: inputBoxSizes
  placeholder?: string
  readOnly?: boolean
  error?: boolean
  errorMessage?: string
  fullWidth?: boolean
  classNames?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
}> = ({
  name,
  label,
  size = 'medium',
  error,
  errorMessage = 'wrong input',
  fullWidth = false,
  classNames,
  ...props
}) => {
  return (
    <div>
      <div className="space-y-2">
        <label htmlFor={name}>
          <p className="text-xs font-bold md:text-base">{label}</p>
        </label>
        <input
          id={name}
          name={name}
          className={cx(
            'p-2',
            fullWidth ? 'w-full' : 'w-[280px] md:w-[320px]',
            sizeSelector[size],
            'border-2 rounded-xl',
            error ? 'border-red-400' : 'border-primary-600',
            'focus:outline-none',
            classNames
          )}
          {...props}
        />
      </div>
      {error && <p className="text-xs md:text-sm text-red-400">{errorMessage}</p>}
    </div>
  )
}

export default memo(InputBox)
