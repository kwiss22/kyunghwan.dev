import { ArrowUpRight, Mail } from "lucide-react";

import { Section } from "@/components/case-study/section";
import { TodoBlock } from "@/components/case-study/todo-block";
import { useSeo } from "@/hooks/use-seo";

type TimelineEntry = {
  /** 표시용 기간. 예: "2022 — 현재", "2020 – 2022". 끝났으면 두 번째 연도. */
  period: string;
  /** 회사 또는 소속 */
  org: string;
  /** 역할/직함. 예: "Product Engineer" */
  role: string;
  /** 한 줄 요약. 무엇을 만들었고/배웠는지. */
  summary: string;
};

// TODO — 실제 이력으로 교체. 가장 최근이 위로.
const timeline: TimelineEntry[] = [
  {
    period: "TODO — 기간",
    org: "TODO — 회사/팀",
    role: "TODO — 역할",
    summary:
      "TODO — 한 줄 요약. 어떤 제품/기능을 만들었고, 무엇을 배웠는지.",
  },
];

type Channel = {
  label: string;
  href: string;
  /** mailto 등 외부 링크가 아닐 때 false */
  external?: boolean;
};

const channels: Channel[] = [
  { label: "이메일", href: "mailto:kwiss22@hanyang.ac.kr" },
  { label: "GitHub", href: "https://github.com/kwiss22", external: true },
  // TODO — LinkedIn, Twitter/X, Threads, Read.cv 등 본인이 쓰는 곳을 추가.
];

export function AboutPage() {
  useSeo({
    title: "About",
    description:
      "신경환에 대해 — 일하는 방식, 지금 집중하고 있는 것, 이력과 연락처.",
  });

  return (
    <article className="mx-auto w-full max-w-3xl px-6 py-16 md:py-24">
      {/* ──────────────────  헤더  ────────────────── */}
      <header>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          About
        </p>
        <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight text-balance">
          신경환
        </h1>
        <div className="mt-6 max-w-2xl space-y-4 text-lg text-muted-foreground leading-relaxed">
          <p>
            서울에서 일하는 프로덕트 엔지니어입니다. B2B 운영 도구의 결을
            다듬는 일에 자주 시간을 씁니다.
          </p>
          <p>
            사용자가 매일 쓰는 화면일수록 작은 결정이 누적되어 큰 차이가 된다고
            믿습니다. 그래서 결정을 내리기 전과 후를 글로 정리해두려고 합니다 —
            잘 됐던 결정뿐 아니라, 버린 안과 그 이유까지.
          </p>
        </div>
      </header>

      {/* ──────────────────  지금 (Now)  ────────────────── */}
      <Section
        title="지금"
        lede="이 페이지를 보고 있는 시점에 무엇에 시간을 쓰고 있는지."
      >
        <ul className="list-disc pl-5 space-y-2">
          <li>
            이 포트폴리오를 처음부터 다시 짓는 중. Vite + Tailwind v4 +
            shadcn/ui로 디자인 토큰부터 잡고 시작했습니다.
          </li>
          <li>
            B2B 운영 도구의 정보 구조에 관심. 매일 쓰는 화면일수록 IA가 곧
            사용성이라는 가설을 검증하는 중입니다.
          </li>
          <li>
            “바꾸면 어떤 지표가 어떻게 움직일 것이라 예측했나”를 결정 전에
            언어로 굳히는 작업 — 이 형식을 케이스 스터디에 굳혀가는 중입니다.
          </li>
        </ul>
        <p className="text-xs text-muted-foreground">
          이 섹션은 분기마다 갱신할 예정 — 마지막 갱신: 2026-Q2.
        </p>
      </Section>

      {/* ──────────────────  일하는 방식 (Principles)  ────────────────── */}
      <Section
        title="일하는 방식"
        lede="채용 페이지의 가치관 같은 게 아니라, 실제 결정을 내릴 때 자주 꺼내쓰는 원칙들."
      >
        <ul className="list-disc pl-5 space-y-3">
          <li>
            <strong>측정 없이 출시하지 않는다.</strong> 가설이 맞았는지 /
            틀렸는지 알 수 없는 변경은 시간을 낭비한다.
          </li>
          <li>
            <strong>버린 시안의 이유를 더 길게 적는다.</strong> 살아남은
            디자인보다 죽은 디자인이 더 많은 정보를 준다.
          </li>
          <li>
            <strong>추상보다 장면을 적는다.</strong> “사용성이 나빴다”가 아니라
            “이 셀러는 매주 정산 화면을 새로 찾는다”에서 출발한다.
          </li>
          <li>
            <strong>매일 쓰는 화면을 가장 늦게 손댄다.</strong> 매일 쓴다는 건
            회귀 비용도 가장 비싸다는 뜻이라.
          </li>
          <li>
            <strong>성공보다 실패를 먼저 쓴다.</strong> 다음 결정에 쓸모가 더
            크다.
          </li>
        </ul>
      </Section>

      {/* ──────────────────  이력 (Timeline)  ────────────────── */}
      <Section
        title="이력"
        lede="긴 이력서 대신, 어디에서 무엇을 배웠는지를 한 줄씩."
      >
        <ul className="space-y-6">
          {timeline.map((entry, i) => (
            <li
              key={i}
              className="grid grid-cols-1 md:grid-cols-[10rem_1fr] gap-1 md:gap-6"
            >
              <div className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground pt-0.5">
                {entry.period}
              </div>
              <div>
                <p className="text-base font-medium tracking-tight">
                  {entry.role}{" "}
                  <span className="text-muted-foreground font-normal">
                    · {entry.org}
                  </span>
                </p>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  {entry.summary}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <TodoBlock hint="timeline 배열을 본인 이력으로 채웁니다. 학교·인턴·이전 회사 등 의미 있는 단계만. 너무 많으면 뭉뚱그려도 됨.">
          <p>지금은 빈 항목 1개만 보입니다.</p>
        </TodoBlock>
      </Section>

      {/* ──────────────────  연락  ────────────────── */}
      <Section
        title="연락"
        lede="가장 빠른 채널은 이메일. 어떤 주제든 환영합니다."
      >
        <ul className="grid sm:grid-cols-2 gap-3">
          {channels.map((c) => (
            <li key={c.href}>
              <a
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noopener noreferrer" : undefined}
                className="group flex items-center justify-between rounded-lg border border-border/70 bg-card px-4 py-3 transition-colors hover:border-foreground/20 hover:bg-accent/40"
              >
                <span className="flex items-center gap-2 text-sm">
                  {c.href.startsWith("mailto:") ? (
                    <Mail className="size-4 text-muted-foreground" />
                  ) : null}
                  {c.label}
                </span>
                <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
              </a>
            </li>
          ))}
        </ul>
      </Section>
    </article>
  );
}
