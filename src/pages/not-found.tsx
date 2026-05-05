import { Link } from "react-router-dom";

import { useSeo } from "@/hooks/use-seo";

export function NotFoundPage() {
  useSeo({
    title: "페이지를 찾을 수 없습니다",
    description: "요청한 페이지가 없습니다. 허브로 돌아가서 둘러보세요.",
  });

  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-24 md:py-32 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
        404
      </p>
      <h1 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">
        이 페이지는 아직 없습니다.
      </h1>
      <p className="mt-4 text-muted-foreground">
        주소를 다시 확인하거나, 허브로 돌아가 둘러보세요.
      </p>
      <Link
        to="/"
        className="mt-8 inline-block text-sm underline underline-offset-4 hover:text-foreground"
      >
        ← 허브로 돌아가기
      </Link>
    </div>
  );
}
