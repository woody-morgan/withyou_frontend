# WithYou_FrontEnd

## What is it?

WithoutYou 프론트앤드 레포지토리

## Husky Hook 설정 방법

``` bash
npx husky install ".husky/husky-config"
```

### precommit hook 설정

``` bash
// 만약 .husky/husky-config 폴더가 없다면 아래 명령어를 터미널에 입력
npx husky add .husky/husky-config/pre-commit "yarn build"
```

### prepush hook 설정

``` bash
npx husky add .husky/husky-config/pre-push "yarn build"
```

### 현재 husky hook 상태

1. commit 시 build 테스트 통과 여부 확인
2. commit 시 package.json 에 설정된 lint-staged 명령어 셋 통과 여부 확인