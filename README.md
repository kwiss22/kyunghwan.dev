# kyunghwan.dev

허경환의 개인 사이트 · Product Manager 포트폴리오

## Pages

- `/` — 메인 (자기소개 + 작업물 링크)
- `/solo` — Solo 케이스 스터디 (1인 프리랜서를 위한 프로젝트·정산 통합 도구 기획)

## Stack

순수 HTML/CSS — 빌드 도구 없음. Vercel에 정적 호스팅.

## Local Preview

```bash
# Python으로 간단 서빙
python3 -m http.server 8000

# 또는 Node로
npx serve
```

브라우저에서 `http://localhost:8000` 접속.

## Deploy

`main` 브랜치에 push하면 Vercel이 자동 배포.
