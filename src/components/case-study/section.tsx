import type { ReactNode } from "react";

type Props = {
  /** 섹션 번호 (예: "01"). 생략하면 표시 안 함. */
  number?: string;
  /** 섹션 제목 */
  title: string;
  /** 섹션 부제 또는 한 줄 요약. 본문 진입 전 컨텍스트. */
  lede?: string;
  children: ReactNode;
};

/**
 * 케이스 스터디 본문의 섹션 래퍼.
 * 번호·타이틀·본문을 일관된 타이포그래피로 묶는다.
 */
export function Section({ number, title, lede, children }: Props) {
  return (
    <section className="mt-20 first:mt-16 scroll-mt-24" id={slugify(title)}>
      <header className="border-l-2 border-foreground/15 pl-5">
        {number ? (
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {number}
          </p>
        ) : null}
        <h2 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight">
          {title}
        </h2>
        {lede ? (
          <p className="mt-3 text-base text-muted-foreground leading-relaxed max-w-2xl">
            {lede}
          </p>
        ) : null}
      </header>
      <div className="mt-8 space-y-6 text-[15px] leading-[1.75] text-foreground/90">
        {children}
      </div>
    </section>
  );
}

function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9가-힣-]/g, "");
}
