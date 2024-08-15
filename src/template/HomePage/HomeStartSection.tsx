import React from 'react'
import { Button } from '@src/components/common'
import Link from 'next/link'

const HomeStartSection = () => {
  return (
    <div className="flex flex-col w-full items-center space-y-4">
      <Button className="uppercase text-white font-bold" styles="secondary" size="large" fullWidth>
        get started
      </Button>
      <Link href={'/signup'}>
        <Button className="text-secondary-500 font-bold text-lg" fullWidth size="large">
          Already have an account?
        </Button>
      </Link>
    </div>
  )
}

export default HomeStartSection
