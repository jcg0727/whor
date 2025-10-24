# React 프로젝트 기본 구조

이 프로젝트는 React를 사용한 기본적인 웹 애플리케이션 구조입니다.

## 프로젝트 구조

```
whor-react-app/
├── public/
│   └── index.html          # HTML 템플릿
├── src/
│   ├── components/         # React 컴포넌트
│   │   ├── Header.js       # 헤더 컴포넌트
│   │   ├── Main.js         # 메인 컨텐츠 컴포넌트
│   │   └── Footer.js       # 푸터 컴포넌트
│   ├── styles/            # CSS 스타일 파일
│   │   ├── Header.css     # 헤더 스타일
│   │   ├── Main.css       # 메인 스타일
│   │   └── Footer.css     # 푸터 스타일
│   ├── App.js             # 메인 앱 컴포넌트
│   ├── App.css            # 앱 스타일
│   ├── index.js           # React 앱 진입점
│   └── index.css          # 글로벌 스타일
├── package.json           # 프로젝트 설정 및 의존성
├── .gitignore            # Git 무시 파일 목록
└── README.md             # 프로젝트 설명서
```

## 주요 기능

- **컴포넌트 기반 구조**: 재사용 가능한 React 컴포넌트
- **모던 JavaScript**: ES6+ 문법과 React Hooks 활용
- **반응형 디자인**: 모든 디바이스에서 최적화된 사용자 경험
- **모듈화된 스타일**: 컴포넌트별 CSS 파일 분리

## 설치 및 실행

### 1. 의존성 설치
```bash
npm install
```

### 2. 개발 서버 실행
```bash
npm start
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 애플리케이션을 확인할 수 있습니다.

### 3. 프로덕션 빌드
```bash
npm run build
```

### 4. 테스트 실행
```bash
npm test
```

## 사용된 기술

- **React 18**: 사용자 인터페이스 구축
- **React DOM**: DOM 렌더링
- **Create React App**: 프로젝트 설정 및 빌드 도구
- **CSS3**: 스타일링 및 반응형 디자인

## 개발 가이드

### 컴포넌트 추가
새로운 컴포넌트를 추가하려면:
1. `src/components/` 폴더에 새 컴포넌트 파일 생성
2. `src/styles/` 폴더에 해당 CSS 파일 생성
3. 필요에 따라 `App.js`에서 컴포넌트 import 및 사용

### 스타일 수정
각 컴포넌트의 스타일은 `src/styles/` 폴더의 해당 CSS 파일에서 수정할 수 있습니다.

## 라이선스

MIT License
