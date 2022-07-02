# Triple-Assignment

## 배포 링크

[링크](http://triple-assignment.s3-website.ap-northeast-2.amazonaws.com)

## 프로젝트 실행 방법

```
> npm i
> npm run start
```

## 사용한 기술과 선택한 이유

- TypeScript, Styled-Components
- TypeScript

  런타임에 타입이 정해지는 동적 언어 JavaScript와 달리 TypeScript는 컴파일 타임에 타입이 정해지는 정적 언어로 컴파일을 통해 버그를 사전에 예방할 수 있기 때문에 선택하였습니다.

- Styled-Componenets

  class의 이름이 중복되는 것을 방지할 수 있고 컴포넌트와 스타일을 묶어 모듈화할 수 있기 때문에 선택하였습니다.

## 폴더 구조

```
.
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── images
│   │   ├── badge-apple4x.png
│   │   ├── play-store2x.png
│   │   └── triple2x.png
│   └── index.html
├── src
│   ├── App.css
│   ├── App.tsx
│   ├── index.tsx
│   ├── hooks
│   │   └── useCountUp.ts
│   └── pages
│       └── MainPage
│           ├── components
│           │   └── StatisticSection
│           │       ├── LeftItem.tsx
│           │       ├── RightItem.tsx
│           │       └── index.tsx
│           └── index.tsx
└── tsconfig.json
```
