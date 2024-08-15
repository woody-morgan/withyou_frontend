import React from 'react'
import { Button } from '@src/components/common'
import Link from 'next/link'

const HomeStartSection = () => {
  return (
    <div className="flex flex-col w-full items-center space-y-4">
      <Button styles="secondary" size="large" fullWidth>
        <h3 className="uppercase text-white">get started</h3>
      </Button>
      <Link href={'/signup'}>
        <Button fullWidth size="large">
          <h3 className="text-secondary-500">Already have an account?</h3>
        </Button>
      </Link>
    </div>
  )
}

export default HomeStartSection
