import { ImageIcon } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type Common = {
  caption?: ReactNode;
  /** 자리잡이용 비율. 예: "16/9", "4/3", "1/1". 기본 16/9. */
  aspect?: string;
  /** 캡션 출처 표기. 예: "© 회사명, 2024" */
  credit?: string;
  className?: string;
};

type RealImage = Common & {
  placeholder?: false;
  src: string;
  /** 다크 모드 시 다른 이미지 (스크린샷 라이트/다크 분리한 경우) */
  srcDark?: string;
  alt: string;
};

type Placeholder = Common & {
  placeholder: true;
  /** 빈 자리에 무엇이 들어갈지 한 줄 설명. 점선 박스 안에 표시됨. */
  hint: string;
  src?: never;
  srcDark?: never;
  alt?: never;
};

type Props = RealImage | Placeholder;

/**
 * 케이스 스터디용 이미지/스크린샷.
 *
 * - 실 이미지 모드: src + alt + (선택) srcDark + caption
 * - placeholder 모드: 점선 박스 안에 hint 텍스트. 이미지 자리잡이용.
 *
 * 다크 모드 분기는 사이트의 `.dark` 클래스 토글에 맞춰 Tailwind variant로 처리한다.
 * (prefers-color-scheme 미디어 쿼리는 OS 설정만 따라가서 수동 토글과 어긋난다.)
 */
export function Figure(props: Props) {
  const aspect = props.aspect ?? "16/9";

  if (props.placeholder) {
    return (
      <figure className={cn("my-8", props.className)}>
        <div
          className="flex flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-foreground/25 bg-muted/40 p-8 text-center"
          style={{ aspectRatio: aspect }}
        >
          <ImageIcon className="size-6 text-muted-foreground/60" />
          <p className="text-xs text-muted-foreground leading-relaxed max-w-md">
            {props.hint}
          </p>
        </div>
        {(props.caption || props.credit) && (
          <FigureCaption caption={props.caption} credit={props.credit} />
        )}
      </figure>
    );
  }

  return (
    <figure className={cn("my-8", props.className)}>
      <div
        className="overflow-hidden rounded-lg border border-border/70 bg-muted"
        style={{ aspectRatio: aspect }}
      >
        <img
          src={props.src}
          alt={props.alt}
          loading="lazy"
          decoding="async"
          className={cn(
            "h-full w-full object-cover",
            props.srcDark && "dark:hidden",
          )}
        />
        {props.srcDark ? (
          <img
            src={props.srcDark}
            alt={props.alt}
            loading="lazy"
            decoding="async"
            className="hidden h-full w-full object-cover dark:block"
          />
        ) : null}
      </div>
      {(props.caption || props.credit) && (
        <FigureCaption caption={props.caption} credit={props.credit} />
      )}
    </figure>
  );
}

function FigureCaption({
  caption,
  credit,
}: {
  caption?: ReactNode;
  credit?: string;
}) {
  return (
    <figcaption className="mt-3 text-xs leading-relaxed text-muted-foreground">
      {caption}
      {credit ? (
        <span className="ml-2 text-foreground/40">{credit}</span>
      ) : null}
    </figcaption>
  );
}
