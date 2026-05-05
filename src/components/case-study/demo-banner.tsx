import { AlertTriangle } from "lucide-react";

/**
 * "이 페이지는 가상 시나리오로 채워져 있다"는 사실을 독자에게 첫 화면에서
 * 알려주는 배너. 본문이 그럴듯하게 보일수록 이 배너의 가시성이 중요해진다.
 *
 * 본인 실제 프로젝트로 본문을 다 교체하고 나면 이 컴포넌트를 페이지에서
 * 통째로 삭제하면 된다.
 */
export function DemoBanner() {
  return (
    <aside
      role="note"
      className="mt-8 flex items-start gap-3 rounded-md border border-amber-600/40 bg-amber-600/10 p-4 text-sm text-amber-900 dark:text-amber-200"
    >
      <AlertTriangle className="size-4 shrink-0 mt-0.5" />
      <div className="leading-relaxed">
        <p className="font-medium">데모 콘텐츠</p>
        <p className="mt-1 text-amber-900/80 dark:text-amber-200/80">
          본문은 케이스 스터디의 톤·구조를 보여주기 위한 가상 시나리오입니다.
          숫자·인용·사용자 페르소나 모두 실재하지 않습니다. 본인의 실제
          프로젝트로 통째 교체할 자리.
        </p>
      </div>
    </aside>
  );
}
