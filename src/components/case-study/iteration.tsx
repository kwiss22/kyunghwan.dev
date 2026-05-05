import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type Decision = "shipped" | "killed" | "deferred";

type Props = {
  /** 이터레이션 번호. 예: "v1", "v2". */
  step: string;
  /** 시안의 한 줄 설명 */
  title: string;
  /** 이 시안의 운명. shipped(출시), killed(폐기), deferred(보류). */
  decision: Decision;
  /** 폐기/보류 사유 또는 출시 시 학습. 한두 줄. */
  reason?: ReactNode;
  children?: ReactNode;
};

const DECISION_LABEL: Record<Decision, string> = {
  shipped: "출시",
  killed: "폐기",
  deferred: "보류",
};

const DECISION_TONE: Record<Decision, string> = {
  shipped:
    "border-emerald-600/40 bg-emerald-600/10 text-emerald-700 dark:text-emerald-300",
  killed: "border-border bg-secondary text-muted-foreground",
  deferred:
    "border-amber-600/40 bg-amber-600/10 text-amber-700 dark:text-amber-300",
};

/**
 * 디자인 이터레이션 한 단계. 어떤 시안을 시도했고, 어떤 결정으로 끝났는지를
 * 결정/사유까지 같이 묶어서 보여준다. 살아남은 안만 자랑하지 않기 위함.
 */
export function Iteration({
  step,
  title,
  decision,
  reason,
  children,
}: Props) {
  return (
    <article className="rounded-lg border border-border/70 bg-card p-5 md:p-6">
      <header className="flex items-center gap-3">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {step}
        </span>
        <span
          className={cn(
            "rounded-full border px-2 py-0.5 text-[10px] uppercase tracking-wider",
            DECISION_TONE[decision],
          )}
        >
          {DECISION_LABEL[decision]}
        </span>
      </header>
      <h3 className="mt-3 text-lg font-medium tracking-tight">{title}</h3>
      {reason ? (
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          <span className="font-medium text-foreground/80">결정 사유:</span>{" "}
          {reason}
        </p>
      ) : null}
      {children ? (
        <div className="mt-4 text-sm leading-relaxed text-foreground/85 space-y-3">
          {children}
        </div>
      ) : null}
    </article>
  );
}
