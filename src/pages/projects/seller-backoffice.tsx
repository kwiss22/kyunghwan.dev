import { ArrowLeft, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

import { DemoBanner } from "@/components/case-study/demo-banner";
import { Figure } from "@/components/case-study/figure";
import { Iteration } from "@/components/case-study/iteration";
import { Metric } from "@/components/case-study/metric";
import { PullQuote } from "@/components/case-study/pull-quote";
import { Section } from "@/components/case-study/section";
import { Tldr } from "@/components/case-study/tldr";
import { useSeo } from "@/hooks/use-seo";

export function SellerBackofficePage() {
  useSeo({
    title: "Seller Backoffice 리디자인",
    description:
      "셀러가 매일 쓰는 운영 도구를 처음부터 다시 설계한 케이스 스터디. 문제 정의, 가설, 디자인 이터레이션, 출시 후 측정까지.",
    type: "article",
  });

  return (
    <article className="mx-auto w-full max-w-3xl px-6 py-16 md:py-24">
      <Link
        to="/"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="size-4" />
        모든 케이스 스터디
      </Link>

      <DemoBanner />

      {/* ──────────────────  헤더  ────────────────── */}
      <header className="mt-10">
        <div className="flex items-center gap-2">
          <span className="rounded-full border border-border/70 px-2 py-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">
            Demo
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Case Study · 2026
          </span>
        </div>
        <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight text-balance">
          Seller Backoffice 리디자인
        </h1>
        <dl className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-6 text-sm">
          <Meta label="역할" value="Product Engineer · 디자인 리드" />
          <Meta label="기간" value="2025 Q3 — Q4" />
          <Meta label="팀 구성" value="PM 1 · 디자이너 1 · 엔지니어 2" />
          <Meta label="플랫폼" value="Web · B2B" />
        </dl>
      </header>

      {/* ──────────────────  TL;DR  ────────────────── */}
      <Tldr>
        <p>
          매주 정산 화면을 새로 찾던 셀러들이 평균{" "}
          <strong>1분 38초</strong>를 쓰던 작업을, 사이드바 IA를 다시 짜고 홈에
          “이번 주 정산” 카드를 상단 고정해서 <strong>42초</strong>로 줄였다.
          정산 관련 CS 인입은 주 평균 18건 → 6건. 다만 NPS는 같은 기간
          통계적으로 유의한 변화가 없었다 — 한 화면만으로 움직이는 지표가
          아니라는 점을 다시 확인한 프로젝트.
        </p>
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
        <p>
          매주 한 번 정산 화면을 찾는 셀러가 있었다. 사이드바의 정확한 위치를
          외울 만큼 자주 쓰지는 않고, 검색해서 들어가기엔 메뉴 구조가 익숙하지
          않았다. 정산 진입 후 완료까지 평균 시간이 1분 38초 — 단순한 작업
          치고는 길었다.
        </p>
        <p>
          같은 시기 CS팀에는 “정산 어디서 하나요”라는 문의가 주 평균 18건씩
          들어왔다. 인터뷰에서도 같은 결을 들었다. 신규 가입 셀러일수록,
          카테고리가 패션처럼 정산 빈도가 낮은 영역일수록 더 헤맸다.
          개별 화면의 사용성이 나쁜 것보다, 메뉴 트리에서 “정산”이 묻혀 있다는
          쪽에 가까웠다.
        </p>

        <PullQuote attribution="신규 가입 셀러, 30대, 패션 카테고리">
          정산 화면이 어디 있는지를 매번 다시 찾아요. 메뉴를 외우기엔 한 달에
          네 번밖에 안 하니까.
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
          있어야 한다. 당시 셋업한 가설은 다음 셋이었다.
        </p>

        <ul className="list-disc pl-5 space-y-3">
          <li>
            <strong>H1.</strong> 정산을 사이드바 1depth로 끌어올리면(변경)
            셀러가 메뉴를 탐색하는 클릭 수가 줄어들고(메커니즘){" "}
            <em>정산 진입 후 완료까지의 평균 시간이 30% 이상 줄어들 것</em>
            이다(지표).
          </li>
          <li>
            <strong>H2.</strong> 홈에 “이번 주 정산” 카드를 상단 고정하면 첫
            진입 인지가 빨라지고{" "}
            <em>정산 관련 CS 인입이 절반 이하로 줄어들 것</em>이다.
          </li>
          <li>
            <strong>H3.</strong> 정산 작업이 매끄러워지면 NPS가 +5 이상
            오를 것이다.
          </li>
        </ul>

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
          붙였다. shipped(출시)뿐 아니라 killed(폐기) / deferred(보류)도 동등한
          비중으로 다룬다.
        </p>

        <div className="mt-6 grid gap-4">
          <Iteration
            step="v1"
            title="메가 메뉴 — 정산 하위 6개 항목을 한 번에 노출"
            decision="killed"
            reason="유저 테스트에서 80%가 메뉴를 펼치자마자 어디를 봐야 할지 망설였다. 인지 부하가 너무 컸다."
          >
            <p>
              사이드바 “정산”에 호버하면 6개 하위 메뉴(예치금·세금계산서·정산
              내역·…)가 한 번에 펼쳐지는 시안. “찾는 시간”을 한 클릭으로 줄이는
              게 목적이었지만, 첫 노출에서 옵션이 너무 많아 오히려 진입 속도가
              느려졌다.
            </p>
            <Figure
              placeholder
              hint="v1 와이어프레임 — 사이드바 hover 시 메가 메뉴가 펼쳐지는 화면."
              caption="모든 옵션을 한 번에 보여주려는 시도가 오히려 인지 부하를 늘렸다."
            />
          </Iteration>

          <Iteration
            step="v2"
            title="사이드바 핀 — 자주 쓰는 메뉴를 사용자가 직접 위로 올림"
            decision="deferred"
            reason="기능 자체는 좋았지만 ‘처음 쓰는 셀러’ 문제는 안 풀렸다. 대시보드 영역 개편 일정과 같이 가야 해서 다음 분기로 미뤘다."
          >
            <p>
              자주 쓰는 메뉴를 셀러가 핀으로 고정해서 사이드바 상단에 올리는
              패턴. 베테랑 셀러에겐 만족도가 높았지만, 본 프로젝트의 주 타깃인
              신규/저빈도 셀러에게는 핀을 “등록하는 행위 자체”가 또 하나의
              학습 비용이었다.
            </p>
          </Iteration>

          <Iteration
            step="v3"
            title="정산을 1depth로 + 홈에 ‘이번 주 정산’ 카드 상단 고정"
            decision="shipped"
            reason="신규 셀러도 첫 진입에서 정산 위치를 인지함. 사이드바 IA 변경의 회귀 영향이 컸지만 QA 범위가 정해져 있어서 감당 가능하다고 판단."
          >
            <p>
              핵심은 두 변경. (1) 사이드바에서 “정산”을 2depth → 1depth로
              승격. (2) 홈 대시보드 최상단에 이번 주 정산 카드를 고정 노출,
              카드 안에서 한 번 클릭으로 정산 화면으로 진입.
            </p>
            <p>
              두 변경은 각각 다른 가설(H1, H2)에 매핑돼 있어, 출시 후 측정 시점
              에서 어느 쪽이 어떻게 기여했는지 분리해서 볼 수 있도록 설계했다.
            </p>
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
          단일 숫자만 자랑하기는 쉽지만 독자가 신뢰하기는 어렵다.{" "}
          <strong>이전 값(baseline)</strong>과{" "}
          <strong>측정 환경/한계(caveat)</strong>를 같이 보여주면 같은 숫자가
          몇 배 무거워진다.
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <Metric
            label="정산 진입 → 완료 시간 (중앙값)"
            value="42초"
            baseline="1분 38초"
            delta="-57%"
            trend="up"
            caveat="활성 셀러 200명, 출시 후 30일. 봇 트래픽 제외."
          />
          <Metric
            label="정산 관련 CS 인입 (주 평균)"
            value="6건"
            baseline="18건"
            delta="-67%"
            trend="up"
            caveat="동일 30일, 동일 셀러 트래픽. 시즌성 영향 가능."
          />
          <Metric
            label="NPS"
            value="+38"
            baseline="+36"
            delta="+2 (n.s.)"
            trend="flat"
            caveat="표본 n=120, 설문 응답률 14%. 95% 신뢰구간 안에서 의미 없음."
          />
          <Metric
            label="사이드바 IA 변경의 QA 회귀 건수"
            value="4건"
            baseline="0건"
            delta="+4"
            trend="down"
            caveat="출시 직후 1주. 모두 P3 이하, 핫픽스 없이 다음 정기 배포에 묶여 처리됨."
          />
        </div>

        <p>
          H1과 H2는 예상보다 큰 폭으로 맞았다. 특히 CS 인입 감소(-67%)는 가설
          시점에 “절반 이하”로만 추정했던 것보다 더 컸다. 다만 H3 — NPS는 같은
          기간 통계적으로 유의한 차이를 보이지 않았다. 표본이 작았던 한계도
          있고, NPS는 한 화면만으로 움직이는 지표가 아니라는 점을 다시
          확인했다.
        </p>
      </Section>

      {/* ──────────────────  05 회고  ────────────────── */}
      <Section
        number="05"
        title="회고"
        lede="다음에 같은 일을 한다면 무엇을 다르게 할 것인가."
      >
        <ul className="list-disc pl-5 space-y-3">
          <li>
            <strong>가설을 정량/정성으로 미리 갈라두길 잘했다.</strong> 시간과
            CS 인입은 매끈하게 움직였지만 NPS는 그렇지 않았다 — 같은 “경험
            개선”이라도 호흡이 다른 지표라는 걸 가설 단계에서 인정해두니, 측정
            결과를 솔직하게 발표할 수 있었다.
          </li>
          <li>
            <strong>v2(핀)를 미룬 결정은 옳았다.</strong> v3와 같이 쳤다면 어느
            변경이 진짜로 효과 있었는지 분리해 측정하지 못했을 것이다. 변경의
            원인을 추적할 수 있는 단위로 잘라 출시하는 게 “빨리 출시하는
            것”보다 결국 빨랐다.
          </li>
          <li>
            <strong>사이드바 IA 변경의 회귀 비용을 과소평가했다.</strong> QA가
            예상보다 길어졌고 핫픽스 직전까지 갔다. 다음에는 IA 변경 같은
            “영향 영역이 큰 변경”은 QA를 디자인 단계부터 합류시키겠다.
          </li>
          <li>
            <strong>이 프로젝트가 남긴 한 줄.</strong> “매일 쓰는 화면일수록
            메뉴에 묻혀 있는 비용이 누적된다” — 이후 다른 영역의 IA를 볼 때도
            가장 먼저 떠올리는 문장.
          </li>
        </ul>
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
