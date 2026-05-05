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

| Path                          | Page                                                       |
| ----------------------------- | ---------------------------------------------------------- |
| `/`                           | 허브 — 자기소개 + 케이스 스터디 목록                       |
| `/projects/seller-backoffice` | Seller Backoffice 케이스 스터디 (5단 골격, 본문은 점진적 채움) |
| `*`                           | 404                                                        |

## 디렉터리

```
public/
  favicon.svg            # 라이트/다크 자동 적응 SVG 파비콘
  robots.txt             # 검색엔진 크롤링 허용 + sitemap 위치
  sitemap.xml            # 라우트 목록 — 새 케이스 스터디 추가 시 갱신
src/
  components/
    case-study/          # Section, Tldr, Metric, Iteration, PullQuote, Figure, TodoBlock
    layout/              # 라우팅 래퍼 (헤더/푸터)
    ui/                  # shadcn/ui 컴포넌트
    theme-toggle.tsx     # light → dark → system 순환 토글
  hooks/
    use-theme.ts         # 테마 상태 + localStorage 영속화
    use-seo.ts           # 라우트별 title/description/og:* 메타 갱신
  lib/                   # cn 등 유틸
  pages/                 # 라우트 단위 페이지
  index.css              # Tailwind v4 + 디자인 토큰
  main.tsx               # 엔트리 + BrowserRouter
  App.tsx                # <Routes>
index.html               # FOUC 방지 인라인 스크립트 + OG/Twitter 기본 메타
```

## 테마

`html` 요소의 `.dark` 클래스로 토글된다. 사용자 선택은 `localStorage["kw-theme"]`
에 저장되고, 첫 페인트 깜빡임은 `index.html` 안의 인라인 스크립트가 막는다.
새 토큰을 추가하면 `:root` / `.dark` 두 블록과 `@theme inline` 블록 셋을 같이
갱신해야 한다.

## SEO

라우트 단위로 `useSeo({ title, description, type, image })`를 호출하면
`document.title`과 OG/Twitter 메타가 갱신된다. 기본값은 `index.html`에 박혀
있어서 검색엔진이 SPA 첫 응답에서 제대로 읽을 수 있다.

## 진행 상태

- **W1** — 스캐폴드, 디자인 토큰, 허브, 빈 케이스 스터디 라우트
- **W2** — Seller Backoffice 케이스 스터디 5단 골격 (문제·가설·이터레이션·측정·회고) + 재사용 컴포넌트
- **W3** — 테마 토글, 라우트별 SEO 메타, Figure 컴포넌트, robots/sitemap, 파비콘 ← 현재
- 본문 채우기 (인터뷰·지표·이미지) — 자기 페이스로
