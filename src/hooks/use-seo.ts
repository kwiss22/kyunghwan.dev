import { useEffect } from "react";

const SITE_NAME = "kyunghwan.dev";

type Seo = {
  /** 페이지 제목. 사이트명은 자동으로 뒤에 붙으므로 페이지 단위 라벨만. */
  title: string;
  /** meta description. 1~2문장, 검색 결과/카드 미리보기에서 보임. */
  description?: string;
  /** OG 타입. 케이스 스터디 본문은 "article" 권장. */
  type?: "website" | "article";
  /** og:image 절대 경로. 비워두면 og:image 태그를 만들지 않음. */
  image?: string;
};

function upsertMeta(
  attr: "name" | "property",
  key: string,
  content: string,
) {
  let el = document.head.querySelector<HTMLMetaElement>(
    `meta[${attr}="${key}"]`,
  );
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

/**
 * 라우트 단위 SEO. 페이지 컴포넌트 최상단에서 호출하면 마운트/업데이트 시점에
 * document.title과 핵심 meta 태그(description, og:*, twitter:*)를 갱신한다.
 *
 * react-helmet 같은 라이브러리 없이 useEffect만으로 처리해 의존성을 줄였다.
 */
export function useSeo({
  title,
  description,
  type = "website",
  image,
}: Seo) {
  useEffect(() => {
    const fullTitle =
      title === SITE_NAME ? title : `${title} — ${SITE_NAME}`;
    document.title = fullTitle;

    upsertMeta("property", "og:title", fullTitle);
    upsertMeta("property", "og:type", type);
    upsertMeta("property", "og:site_name", SITE_NAME);

    if (description) {
      upsertMeta("name", "description", description);
      upsertMeta("property", "og:description", description);
      upsertMeta("name", "twitter:description", description);
    }
    upsertMeta("name", "twitter:title", fullTitle);
    upsertMeta(
      "name",
      "twitter:card",
      image ? "summary_large_image" : "summary",
    );

    if (image) {
      upsertMeta("property", "og:image", image);
      upsertMeta("name", "twitter:image", image);
    }
  }, [title, description, type, image]);
}
