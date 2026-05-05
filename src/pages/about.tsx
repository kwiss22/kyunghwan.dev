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
        <div className="mt-6 max-w-2xl">
          <TodoBlock hint="2~3 문장의 자기소개. 무엇을 만드는 사람인지, 어떤 문제에 끌리는지, 지금 어디에 있는지를 한 호흡에.">
            <p>
              예: “서울에서 일하는 프로덕트 엔지니어입니다. 사용자가 매일 쓰는
              도구의 결을 다듬는 일에 가장 흥미를 느낍니다.”
            </p>
          </TodoBlock>
        </div>
      </header>

      {/* ──────────────────  지금 (Now)  ────────────────── */}
      <Section
        title="지금"
        lede="이 페이지를 보고 있는 시점에 무엇에 시간을 쓰고 있는지."
      >
        <TodoBlock hint="3~5개 글머리표. 진행 중인 일이 바뀔 때마다 갱신하는 'now page' 형태. 분기별로 손보면 충분.">
          <ul className="list-disc pl-5 space-y-1">
            <li>현재 다니는 회사/팀에서 집중하는 한두 가지 주제</li>
            <li>사이드 프로젝트 또는 학습하고 있는 것</li>
            <li>읽고 있는 책 / 영향받고 있는 사람</li>
            <li>(선택) 이번 분기에 풀고 싶은 한 가지 질문</li>
          </ul>
        </TodoBlock>
      </Section>

      {/* ──────────────────  일하는 방식 (Principles)  ────────────────── */}
      <Section
        title="일하는 방식"
        lede="채용 페이지의 가치관 같은 게 아니라, 실제 결정을 내릴 때 자주 꺼내쓰는 원칙들."
      >
        <TodoBlock hint="3~5개. 추상어 대신 본인이 자주 인용하는 문장이나 기준이 좋습니다.">
          <p>형식 예 (제목 + 한 문장 부연):</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>측정 없이 출시하지 않는다.</strong> 가설이 맞았는지 / 틀린지
              알 수 없는 변경은 회사 자원을 낭비한다.
            </li>
            <li>
              <strong>버린 시안의 이유를 더 길게 적는다.</strong> 살아남은
              디자인보다 죽은 디자인이 더 많은 정보를 준다.
            </li>
            <li>
              <strong>...</strong>
            </li>
          </ul>
        </TodoBlock>
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
