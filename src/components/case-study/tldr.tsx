import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

/**
 * 페이지 상단의 한 단락 요약. 케이스 스터디의 핵심을 30초 안에 전달한다.
 */
export function Tldr({ children }: Props) {
  return (
    <aside className="mt-12 rounded-xl bg-secondary/50 p-6 md:p-8 border border-border/60">
      <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
        TL;DR
      </p>
      <div className="mt-3 text-base md:text-lg leading-relaxed text-foreground/90">
        {children}
      </div>
    </aside>
  );
}
