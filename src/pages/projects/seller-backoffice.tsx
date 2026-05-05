import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

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

      <header className="mt-10">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Case Study · Draft
        </p>
        <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight text-balance">
          Seller Backoffice 리디자인
        </h1>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          이 페이지는 비어 있습니다. W2 작업에서 문제 정의, 가설, 디자인
          이터레이션, 출시 후 측정 결과 순으로 채워질 예정입니다.
        </p>
      </header>

      <section className="mt-16 space-y-3 text-sm text-muted-foreground">
        <p className="font-mono uppercase tracking-[0.2em] text-xs">
          Coming in W2
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>문제 정의 — 누가, 어떤 상황에서 곤란해했나</li>
          <li>가설 — 무엇을 바꾸면 어떤 지표가 움직인다고 봤나</li>
          <li>디자인 이터레이션 — 버린 안과 그 이유</li>
          <li>측정 — 출시 후 실제로 어떻게 됐나</li>
        </ul>
      </section>
    </article>
  );
}
