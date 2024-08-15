# WithYou_FrontEnd

## What is it?

WithoutYou 프론트앤드 레포지토리

## 시작하기 전

### 사이트 설정

```js
const appConfig = {
  notchColor: '#f8eee2',
  headerHeight: '3rem',
  bottomNavigationHeight: '5rem',
  sidePadding: '1rem',
  backgroundColor: '#fff8e5',
  mobileAppMaxWidth: '768px',
}
```

1. src/config/appConfig.js에 있는 설정 파일을 수정해주세요.

- 해당 파일은 tailwindconfig.js, header, bottom navigtaion 등에서 사용됩니다

2. 페이지를 제작할때 최상단 컴포넌트는 PageLayout으로 감싸주세요

- fixedHeight, fullWidth등을 지원하며 fixedHeight의 경우 모바일 브라우저에서도 작동합니다

3. 페이지를 제작할때 PageLayout 컴포넌트를 감싼후 가장 첫번째 children중 하나로 PaseSEO 컴포넌트를 사용해주세요

- Search Engine Optimization을 할때 꼭 필요합니다

## Husky Hook 설정 방법

### precommit hook 설정

```bash
1. ./husky/pre-commit.sh에 필요한 커맨드 추가
```

### prepush hook 설정

```bash
1. ./husky/pre-push.sh에 필요한 커맨드 추가
```

### 현재 husky hook 상태

1. commit 시 build 테스트 통과 여부 확인
2. commit 시 package.json 에 설정된 lint-staged 명령어 셋 통과 여부 확인
