# React Gift Login

React + TypeScript + Vite를 사용한 선물 로그인 애플리케이션입니다.

## 🚀 구현된 기능 목록

### ✅ 완료된 기능

#### 1. 프로젝트 초기 설정 및 정리
- [x] 불필요한 파일 및 코드 정리
  - 기본 Vite 템플릿의 카운터 기능 제거
  - 불필요한 CSS 스타일 정리
  - 로고 이미지 파일들 삭제
  - 페이지 제목 업데이트
  - 깔끔한 기본 App 컴포넌트로 변경

#### 2. 개발 환경 설정
- [x] 절대경로 Import(alias) 설정
  - TypeScript 설정에 baseUrl과 paths 추가
  - Vite 설정에 alias 추가
  - @types/node devDependencies 추가
  - 절대경로 import 테스트용 컴포넌트 생성

#### 3. 코드 품질 도구
- [x] Prettier 코드 포맷터 추가
  - Prettier 설치 및 기본 설정
  - 세미콜론 사용, 작은따옴표 사용
  - 80자 줄 길이 제한, 2칸 들여쓰기
  - format 스크립트 추가 (`npm run format`)
  - .prettierignore 설정

#### 4. 스타일링 시스템
- [x] Emotion CSS-in-JS 라이브러리 추가
  - @emotion/react, @emotion/styled, @emotion/babel-plugin 설치
  - Vite 설정에 Emotion 플러그인 추가
  - 스타일 컴포넌트 예제 생성 (Button, SecondaryButton)
  - App.css 삭제하고 Emotion으로 대체

- [x] Reset CSS 적용
  - 브라우저 기본 스타일 초기화
  - 일관된 스타일링을 위한 기본 설정

#### 5. 폰트 시스템
- [x] Pretendard 폰트 적용
  - Pretendard CDN 링크 추가
  - 전역 기본 폰트를 Pretendard로 변경
  - 모든 스타일 컴포넌트에 Pretendard 폰트 적용
  - TestComponent를 스타일 컴포넌트로 개선

### 🔄 진행 예정 기능

#### 6. 선물 로그인 기능 (예정)
- [ ] 로그인 페이지 구현
- [ ] 회원가입 페이지 구현
- [ ] 선물 목록 페이지 구현
- [ ] 선물 상세 페이지 구현
- [ ] 사용자 프로필 페이지 구현

## 🛠 기술 스택

- **Frontend Framework**: React 19.1.0
- **Language**: TypeScript
- **Build Tool**: Vite 6.3.5
- **Styling**: Emotion (CSS-in-JS)
- **Font**: Pretendard
- **Code Quality**: ESLint, Prettier
- **Package Manager**: npm

## 📦 설치 및 실행

### 의존성 설치
```bash
npm install
```

### 개발 서버 실행
```bash
npm run dev
```

### 빌드
```bash
npm run build
```

### 코드 포맷팅
```bash
npm run format
```

### 린팅
```bash
npm run lint
```

## 📁 프로젝트 구조

```
react-gift-login/
├── src/
│   ├── components/
│   │   ├── TestComponent.tsx      # 절대경로 import 테스트 컴포넌트
│   │   └── StyledButton.tsx       # Emotion 스타일 버튼 컴포넌트
│   ├── App.tsx                    # 메인 App 컴포넌트
│   ├── main.tsx                   # React 앱 진입점
│   └── index.css                  # Reset CSS
├── public/
├── package.json
├── vite.config.ts                 # Vite 설정 (alias, Emotion 플러그인)
├── tsconfig.json                  # TypeScript 설정
├── .prettierrc                    # Prettier 설정
└── .prettierignore                # Prettier 무시 파일
```

## 🎯 커밋 컨벤션

AngularJS Git Commit Message Conventions을 따릅니다:

- `feat`: 새로운 기능 추가
- `fix`: 버그 수정
- `docs`: 문서 수정
- `style`: 코드 포맷팅, 세미콜론 누락 등
- `refactor`: 코드 리팩토링
- `test`: 테스트 코드 추가/수정
- `chore`: 빌드 프로세스 또는 보조 도구 변경

### 커밋 예시
```
feat: 절대경로 import(alias) 설정 및 테스트 컴포넌트 추가
chore: Prettier 코드 포맷터 추가 및 기본 설정
feat: Emotion CSS-in-JS 라이브러리 추가 및 Reset CSS 적용
feat: Pretendard 폰트 적용
```

##  라이선스

MIT License
