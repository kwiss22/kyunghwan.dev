import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import { buttonVariants } from "@/components/ui/button";
import { useSeo } from "@/hooks/use-seo";

type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  /** live: 실제 프로젝트 본문. demo: 구조 예시용 가상 시나리오. draft: 작성 중. */
  status: "live" | "demo" | "draft";
  tags: string[];
};

const STATUS_LABEL: Record<CaseStudy["status"], string> = {
  live: "Live",
  demo: "Demo",
  draft: "Draft",
};

const caseStudies: CaseStudy[] = [
  {
    slug: "seller-backoffice",
    title: "Seller Backoffice 리디자인",
    summary:
      "셀러가 매일 쓰는 운영 도구를 처음부터 다시 설계한 이야기. 어떤 가설을 세웠고, 무엇을 측정했고, 무엇이 바뀌었는지. — 구조 예시용 가상 시나리오.",
    status: "demo",
    tags: ["Product", "B2B", "Information Architecture"],
  },
];

export function HomePage() {
  useSeo({
    title: "kyunghwan.dev",
    description:
      "신경환 — 프로덕트 엔지니어 포트폴리오. 케이스 스터디 중심으로 의사결정과 임팩트를 정리합니다.",
  });

  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-16 md:py-24">
      <section className="max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Product Engineer · Seoul
        </p>
        <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-balance">
          제품을 만들고, 그 결정을 글로 정리합니다.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          신경환입니다. 사용자가 매일 쓰는 도구를 만드는 일에 가장 흥미를
          느낍니다. 이 페이지는 작업물의 결과보다, 그 과정에서 내린 의사결정과
          학습을 정리하기 위한 공간입니다.
        </p>
        <div className="mt-8 flex items-center gap-3">
          <a
            href="#case-studies"
            className={buttonVariants({ size: "lg" })}
          >
            케이스 스터디 보기
          </a>
          <a
            href="mailto:kwiss22@hanyang.ac.kr"
            className={buttonVariants({ variant: "ghost", size: "lg" })}
          >
            연락하기
          </a>
        </div>
      </section>

      <section id="case-studies" className="mt-24 md:mt-32">
        <header className="flex items-baseline justify-between">
          <h2 className="text-sm font-mono uppercase tracking-[0.2em] text-muted-foreground">
            Case Studies
          </h2>
          <span className="text-xs text-muted-foreground">
            {caseStudies.length} 편
          </span>
        </header>
        <ul className="mt-6 grid gap-4">
          {caseStudies.map((cs) => (
            <li key={cs.slug}>
              <Link
                to={`/projects/${cs.slug}`}
                className="group block rounded-xl border border-border/70 bg-card p-6 transition-colors hover:border-foreground/20 hover:bg-accent/40"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-medium tracking-tight">
                        {cs.title}
                      </h3>
                      {cs.status !== "live" && (
                        <span className="rounded-full border border-border/70 px-2 py-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">
                          {STATUS_LABEL[cs.status]}
                        </span>
                      )}
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {cs.summary}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {cs.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-secondary px-2.5 py-0.5 text-[11px] text-secondary-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ArrowUpRight className="size-5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
