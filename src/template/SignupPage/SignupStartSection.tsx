import React, { memo } from 'react'
import { Button } from '@src/components/common'
import Link from 'next/link'

const SignupStartSection = () => {
  return (
    <div className="flex flex-col w-full items-center space-y-4">
      <Button styles="secondary" size="large" type="submit" fullWidth>
        <h3 className="text-white">Create Account</h3>
      </Button>
      <Link href={'/login'}>
        <Button fullWidth size="small">
          <h3 className="text-secondary-500">Already have an account?</h3>
        </Button>
      </Link>
    </div>
  )
}

export default memo(SignupStartSection)
