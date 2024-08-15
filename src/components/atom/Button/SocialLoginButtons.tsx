import { ButtonWithIcon } from '@src/components/atom'
import { SVGTypes } from '@src/components/atom/Icon/Icon'
import { AppleAuthHookType, GoogleAuthHookType, KakaoAuthHookType } from '@src/core/types/auth-type'
import { useKakaoAuth } from '@src/hooks'
import useAppleAuth from '@src/hooks/auth/useAppleAuth'
import useGoogleAuth from '@src/hooks/auth/useGoogleAuth'
import cx from 'classnames'
import React, { FC } from 'react'

const SocialLoginButtonWrapper: FC<{
  isLoaded: boolean
  name: SVGTypes
  vendorText: '카카오' | '구글' | '애플'
  className?: string
  onClick: () => void
}> = ({ isLoaded, vendorText, name, className, onClick }) => (
  <span className="w-full">
    <ButtonWithIcon
      className={cx(className, 'relative my-1.5 disabled:opacity-50 text-md')}
      nameChange={name}
      sizeChange={28}
      fullWidth
      disabled={!isLoaded}
      onClick={onClick}
    >
      {vendorText}로 시작하기
    </ButtonWithIcon>
  </span>
)

export const KakaoLoginButton: FC<KakaoAuthHookType> = ({ ...props }) => {
  const [isKakaoScriptLoaded, useKakaoLogin] = useKakaoAuth({ ...props })

  return (
    <SocialLoginButtonWrapper
      className="bg-wy-kakao-yellow"
      isLoaded={isKakaoScriptLoaded}
      name="kakao"
      vendorText="카카오"
      onClick={useKakaoLogin}
    />
  )
}

export const GoogleLoginButton: FC<GoogleAuthHookType> = ({ ...props }) => {
  const [isGoogleScriptLoading, useGoogleLogin] = useGoogleAuth({ ...props })

  return (
    <SocialLoginButtonWrapper
      className="bg-wy-google-gray"
      isLoaded={false}
      name="google"
      vendorText="구글"
      onClick={useGoogleLogin}
    />
  )
}

export const AppleLoginButton: FC<AppleAuthHookType> = ({ ...props }) => {
  const [isAppleScriptLoading, useAppleLogin] = useAppleAuth({ ...props })

  return (
    <SocialLoginButtonWrapper
      className="bg-wy-apple-black text-white"
      isLoaded={false}
      name="apple"
      vendorText="애플"
      onClick={useAppleLogin}
    />
  )
}
