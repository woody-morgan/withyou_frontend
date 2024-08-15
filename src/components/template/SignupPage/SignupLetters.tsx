import { envConfig } from '@src/core/config/envConfig'
import React, { memo } from 'react'

const SignupLetters = () => {
  return (
    <div className="text-center space-y-1">
      <h1>Create your account</h1>
      <p>
        Join <strong>{envConfig.appName}</strong> for free. Create and share unlimited kid logs with
        your family.
      </p>
    </div>
  )
}

export default memo(SignupLetters)
