import type { ReactNode } from "react";

type Props = {
  /** 무엇을 채워야 하는지 한 문장 가이드 */
  hint: string;
  /** 예시 양식. 글머리표 등으로. 어떤 형태가 좋은지 보여주기 위함. */
  children?: ReactNode;
};

/**
 * 본인이 직접 채워야 하는 자리. 시각적으로 명확하게 "여긴 아직 비어있다"고
 * 알려서 독자가 placeholder를 본문으로 오해하지 않도록 한다.
 *
 * 본문이 채워지면 이 블록 단위로 통째로 지우고 진짜 글로 교체하면 된다.
 */
export function TodoBlock({ hint, children }: Props) {
  return (
    <div className="my-2 rounded-md border border-dashed border-foreground/25 bg-muted/40 p-4 text-sm">
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        TODO — 채울 자리
      </p>
      <p className="mt-2 text-foreground/80 leading-relaxed">{hint}</p>
      {children ? (
        <div className="mt-3 text-xs text-muted-foreground space-y-1.5 leading-relaxed">
          {children}
        </div>
      ) : null}
    </div>
  );
}
