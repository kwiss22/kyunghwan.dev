import { ArrowLeft, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

import { Iteration } from "@/components/case-study/iteration";
import { Metric } from "@/components/case-study/metric";
import { PullQuote } from "@/components/case-study/pull-quote";
import { Section } from "@/components/case-study/section";
import { Tldr } from "@/components/case-study/tldr";
import { TodoBlock } from "@/components/case-study/todo-block";

export function SellerBackofficePage() {
  return (
    <article className="mx-auto w-full max-w-3xl px-6 py-16 md:py-24">
      <Link
        to="/"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="size-4" />
        모든 케이스 스터디
      </Link>

      {/* ──────────────────  헤더  ────────────────── */}
      <header className="mt-10">
        <div className="flex items-center gap-2">
          <span className="rounded-full border border-border/70 px-2 py-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">
            Draft
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Case Study · 2026
          </span>
        </div>
        <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight text-balance">
          Seller Backoffice 리디자인
        </h1>
        <dl className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-6 text-sm">
          <Meta label="역할" value="TODO" />
          <Meta label="기간" value="TODO" />
          <Meta label="팀 구성" value="TODO" />
          <Meta label="플랫폼" value="Web · B2B" />
        </dl>
      </header>

      {/* ──────────────────  TL;DR  ────────────────── */}
      <Tldr>
        <TodoBlock hint="이 케이스 스터디를 30초 안에 전달하는 한 문장. '누구의 어떤 문제를, 어떻게 풀었더니, 어떤 지표가 어떻게 움직였다'가 한 호흡에 담겨야 함.">
          <p>
            예: “주 1회 정산 화면에서 헤매던 셀러들이 평균 1분 38초를 쓰던
            작업을, 메뉴 IA를 다시 짜고 핵심 액션을 카드 상단으로 끌어올려
            42초로 줄였다.”
          </p>
        </TodoBlock>
      </Tldr>

      <nav
        aria-label="목차"
        className="mt-12 hidden md:flex items-center gap-6 text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground"
      >
        <a href="#문제" className="hover:text-foreground">
          01 문제
        </a>
        <a href="#가설" className="hover:text-foreground">
          02 가설
        </a>
        <a href="#디자인-이터레이션" className="hover:text-foreground">
          03 이터레이션
        </a>
        <a href="#측정" className="hover:text-foreground">
          04 측정
        </a>
        <a href="#회고" className="hover:text-foreground">
          05 회고
        </a>
      </nav>

      {/* ──────────────────  01 문제  ────────────────── */}
      <Section
        number="01"
        title="문제"
        lede="누가, 어떤 상황에서, 무엇 때문에 곤란했는지 — 추상화하지 말고 구체적인 장면으로."
      >
        <TodoBlock hint="2~4 문단. 추상적인 '사용성이 나빴다' 말고, 어떤 셀러가 어떤 화면 어디에서 막혔는지를 장면으로 보여주는 게 좋습니다.">
          <p>채울 때 점검할 것:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>주인공은 누구인가 (페르소나가 아니라 실제 인터뷰한 사람)</li>
            <li>그 사람이 매일/매주 반복하던 작업은 무엇인가</li>
            <li>어떤 정량 지표가 빨간불이었나 (CS 인입, 이탈률, NPS 등)</li>
            <li>어떤 정성 시그널이 있었나 (인터뷰·세션 리코딩·VOC)</li>
          </ul>
        </TodoBlock>

        <PullQuote attribution="TODO — 인터뷰이 페르소나 또는 익명 라벨">
          여기에 사용자 인용이 들어갑니다. 한 문장이 강력합니다. 이 자리에
          “정산 화면이 어디 있는지를 매번 다시 찾아요” 같이 구체적인 발화를
          적어두면 독자가 문제의 결을 한 번에 잡을 수 있습니다.
        </PullQuote>
      </Section>

      {/* ──────────────────  02 가설  ────────────────── */}
      <Section
        number="02"
        title="가설"
        lede="무엇을 바꾸면 어떤 지표가 어떻게 움직일 것이라고 예측했는지."
      >
        <p>
          좋은 가설은 “이걸 바꾸면 좋아질 것” 같이 막연한 게 아니라,{" "}
          <strong>변경 → 메커니즘 → 측정할 지표</strong> 셋이 한 줄로 묶여
          있어야 합니다.
        </p>

        <TodoBlock hint="검증한 가설 1~3개를 다음 형식으로 적습니다.">
          <p>형식 예:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>H1.</strong> 정산 화면을 1depth로 끌어올리면(변경) 셀러가
              메뉴를 탐색하는 클릭 수가 줄어들고(메커니즘) 정산 진입 후 완료
              까지의 평균 시간이 30% 이상 줄어들 것이다(지표).
            </li>
            <li>
              <strong>H2.</strong> ...
            </li>
          </ul>
        </TodoBlock>

        <p className="text-sm text-muted-foreground">
          가설을 “당시에 이렇게 믿었다”라고 적어두면, 측정 결과와 비교할 때
          자기검열 없이 “틀린 가설”도 솔직하게 드러낼 수 있다.
        </p>
      </Section>

      {/* ──────────────────  03 디자인 이터레이션  ────────────────── */}
      <Section
        number="03"
        title="디자인 이터레이션"
        lede="살아남은 안만 자랑하지 않기. 버린 안과 그 이유가 더 많은 정보를 준다."
      >
        <p>
          시안을 시간 순으로 나열하되, 각 단계마다{" "}
          <strong>무엇을 시도했고, 어떤 결정으로 끝났는지</strong>를 라벨로
          붙입니다. shipped(출시)뿐 아니라 killed(폐기) / deferred(보류)도
          동등하게 다룹니다.
        </p>

        <div className="mt-6 grid gap-4">
          <Iteration
            step="v1"
            title="TODO — 첫 번째 시안의 한 줄 설명"
            decision="killed"
            reason="TODO — 왜 버렸는지. (예: 유저 테스트에서 80%가 메뉴 위치를 못 찾음)"
          >
            <TodoBlock hint="이 시안에서 무엇을 시도했는지 2~3문장. 가능하면 스크린샷이나 와이어 이미지를 같이.">
              <p>이미지는 W2 후반에 추가합니다 — 일단 텍스트만.</p>
            </TodoBlock>
          </Iteration>

          <Iteration
            step="v2"
            title="TODO — 두 번째 시안"
            decision="deferred"
            reason="TODO — 보류한 이유."
          >
            <TodoBlock hint="이 시안의 핵심 변경점과 사용자 반응." />
          </Iteration>

          <Iteration
            step="v3"
            title="TODO — 출시한 최종안"
            decision="shipped"
            reason="TODO — 무엇을 결정했고, 어떤 트레이드오프를 받아들였는지."
          >
            <TodoBlock hint="최종안의 핵심 변화 3가지. IA 변화 / 핵심 컴포넌트 변경 / 인터랙션 변경 등." />
          </Iteration>
        </div>
      </Section>

      {/* ──────────────────  04 측정  ────────────────── */}
      <Section
        number="04"
        title="측정"
        lede="가설이 맞았는지 / 틀렸는지. 숫자는 baseline과 caveat까지 묶어서 정직하게."
      >
        <p>
          단일 숫자만 자랑하기는 쉽지만, 독자가 신뢰하기는 어렵습니다.{" "}
          <strong>이전 값(baseline)</strong>과{" "}
          <strong>측정 환경/한계(caveat)</strong>를 같이 보여주면 같은 숫자가
          몇 배 무거워집니다.
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <Metric
            label="TODO — 핵심 지표 1"
            value="42초"
            baseline="1분 38초"
            delta="-57%"
            trend="up"
            caveat="TODO — 측정 모집단·기간. 예: 활성 셀러 200명, 출시 후 30일."
          />
          <Metric
            label="TODO — 핵심 지표 2"
            value="—"
            baseline="—"
            delta="—"
            trend="flat"
            caveat="값이 아직 안 나왔거나 의미가 없으면 솔직하게 비워둡니다."
          />
        </div>

        <TodoBlock hint="지표 옆에 한 문단의 해설을 답니다. 가설 H1/H2가 어디는 맞았고 어디는 틀렸는지를 명시.">
          <p>
            예: “H1은 예상보다 더 큰 폭으로 맞았다. 다만 H2는 동일 기간에 측정한
            NPS가 통계적으로 유의한 차이를 보이지 않았다 — 표본이 작았던 한계를
            인정한다.”
          </p>
        </TodoBlock>
      </Section>

      {/* ──────────────────  05 회고  ────────────────── */}
      <Section
        number="05"
        title="회고"
        lede="다음에 같은 일을 한다면 무엇을 다르게 할 것인가."
      >
        <TodoBlock hint="3~5개 항목. 자랑이 아니라 학습 위주로. '이건 운이 좋았다' / '이건 다음엔 안 그러겠다' 같은 솔직한 정리가 가장 잘 읽힙니다.">
          <ul className="list-disc pl-5 space-y-1">
            <li>잘 됐던 결정 1~2개와 그 이유</li>
            <li>다음에 다르게 할 결정 1~2개</li>
            <li>이 프로젝트가 본인에게 남긴 한 줄</li>
          </ul>
        </TodoBlock>
      </Section>

      {/* ──────────────────  바닥글  ────────────────── */}
      <footer className="mt-24 flex items-center justify-between border-t border-border/60 pt-8">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="size-4" />
          허브로 돌아가기
        </Link>
        <a
          href="#"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          맨 위로
          <ArrowUp className="size-4" />
        </a>
      </footer>
    </article>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </dt>
      <dd className="mt-1 text-foreground/90">{value}</dd>
    </div>
  );
}
