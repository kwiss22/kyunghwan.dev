import { ArrowDownRight, ArrowUpRight, Minus } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type Trend = "up" | "down" | "flat";

type Props = {
  /** 지표 라벨. 예: "주문 처리 시간 중앙값" */
  label: string;
  /** 출시 후 값. 예: "42초" */
  value: string;
  /** 출시 전 값(있으면 비교 표시). 예: "1분 38초" */
  baseline?: string;
  /** 변화율 라벨. 예: "-57%" */
  delta?: string;
  /** 좋아진 방향. 라벨에 화살표 색을 입힘. */
  trend?: Trend;
  /** 측정 환경 또는 한계. 예: "B2B 셀러 200명, 30일" */
  caveat?: ReactNode;
};

/**
 * 출시 후 지표 카드. 단일 숫자보다는 baseline·caveat까지 묶어서 정직하게 보여준다.
 */
export function Metric({
  label,
  value,
  baseline,
  delta,
  trend = "flat",
  caveat,
}: Props) {
  const Icon =
    trend === "up" ? ArrowUpRight : trend === "down" ? ArrowDownRight : Minus;
  const tone =
    trend === "up"
      ? "text-emerald-600 dark:text-emerald-400"
      : trend === "down"
        ? "text-rose-600 dark:text-rose-400"
        : "text-muted-foreground";

  return (
    <div className="rounded-xl border border-border/70 bg-card p-5">
      <p className="text-xs text-muted-foreground">{label}</p>
      <div className="mt-3 flex items-baseline gap-2">
        <span className="text-3xl font-semibold tracking-tight tabular-nums">
          {value}
        </span>
        {delta ? (
          <span
            className={cn(
              "inline-flex items-center gap-0.5 text-sm font-medium tabular-nums",
              tone,
            )}
          >
            <Icon className="size-3.5" />
            {delta}
          </span>
        ) : null}
      </div>
      {baseline ? (
        <p className="mt-1 text-xs text-muted-foreground">
          이전: <span className="tabular-nums">{baseline}</span>
        </p>
      ) : null}
      {caveat ? (
        <p className="mt-3 text-[11px] leading-relaxed text-muted-foreground">
          {caveat}
        </p>
      ) : null}
    </div>
  );
}
