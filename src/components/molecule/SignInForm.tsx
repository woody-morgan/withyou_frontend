import { AppleLoginButton, GoogleLoginButton, KakaoLoginButton } from '@src/components/atom'
import { SocialAuthHookType } from '@src/core/types/auth-type'
import React, { FC, memo } from 'react'

const SignInForm: FC<SocialAuthHookType> = ({ ...props }) => {
  return (
    <div className="w-full">
      <div className="flex flex-col justify-center items-center">
        <AppleLoginButton
          router={props.router}
          dispatch={props.dispatch}
          onSuccess={props.onSuccess}
        />
        <GoogleLoginButton
          router={props.router}
          dispatch={props.dispatch}
          onSuccess={props.onSuccess}
        />
        <KakaoLoginButton
          router={props.router}
          dispatch={props.dispatch}
          onSuccess={props.onSuccess}
        />
      </div>
    </div>
  )
}

export default memo(SignInForm)
