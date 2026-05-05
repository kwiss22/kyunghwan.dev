import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** 인용 출처. 예: "신규 가입 셀러, 30대, 패션 카테고리" */
  attribution?: string;
};

/**
 * 사용자 인터뷰·내부 코멘트·디자인 비평 등에서 끌어온 한 문장.
 * 본문보다 살짝 들어 올려서 독자의 호흡을 한 박자 끊는다.
 */
export function PullQuote({ children, attribution }: Props) {
  return (
    <blockquote className="my-6 border-l-2 border-accent pl-5">
      <p className="text-lg leading-relaxed text-foreground/90 italic">
        “{children}”
      </p>
      {attribution ? (
        <footer className="mt-2 text-xs text-muted-foreground not-italic">
          — {attribution}
        </footer>
      ) : null}
    </blockquote>
  );
}
