# kyunghwan.dev

신경환의 포트폴리오 사이트. 작업물의 결과보다 그 과정에서 내린 의사결정을
정리하기 위한 공간으로 설계 중.

## 스택

- **Vite** + **React 18** + **TypeScript**
- **Tailwind CSS v4** — `@tailwindcss/vite` 플러그인, 디자인 토큰은 oklch
- **shadcn/ui** — `new-york` 스타일, `components.json`은 알리아스 `@/*` 기반
- **react-router v6** — 허브(`/`) + 케이스 스터디(`/projects/:slug`)

## 디자인 토큰

`src/index.css`의 `:root` / `.dark` 블록에서 oklch 토큰을 정의하고, 같은
파일의 `@theme inline` 블록이 그 토큰들을 Tailwind 컬러 유틸리티에 연결한다.
새 토큰을 추가할 때는 두 블록을 같이 갱신할 것.

## 스크립트

```bash
npm install      # 의존성 설치
npm run dev      # 개발 서버
npm run build    # 타입 체크 + 프로덕션 빌드
npm run preview  # 빌드 결과 미리보기
npm run lint     # tsc 기반 타입 체크
```

## 라우트

| Path                            | Page                                              |
| ------------------------------- | ------------------------------------------------- |
| `/`                             | 허브 — 자기소개 + 케이스 스터디 목록              |
| `/projects/seller-backoffice`   | Seller Backoffice 리디자인 (W2에서 본문 채울 예정) |
| `*`                             | 404                                                |

## 디렉터리

```
src/
  components/
    layout/        # 라우팅 래퍼 (헤더/푸터)
    ui/            # shadcn/ui 컴포넌트
  lib/             # cn 등 유틸
  pages/           # 라우트 단위 페이지
  index.css        # Tailwind v4 + 디자인 토큰
  main.tsx         # 엔트리 + BrowserRouter
  App.tsx          # <Routes>
```

## 진행 상태

- **W1** — 스캐폴드, 디자인 토큰, 허브, 빈 케이스 스터디 라우트, README ← 현재
- **W2** — Seller Backoffice 케이스 스터디 본문
- 이후 단계는 `PORTFOLIO_PLAN.md`에 정의된 일정에 따름
