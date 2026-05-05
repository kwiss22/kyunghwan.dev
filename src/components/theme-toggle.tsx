import { Monitor, Moon, Sun } from "lucide-react";

import { useTheme, type Theme } from "@/hooks/use-theme";

const ORDER: Theme[] = ["light", "dark", "system"];
const LABELS: Record<Theme, string> = {
  light: "라이트",
  dark: "다크",
  system: "시스템",
};
const NEXT_LABELS: Record<Theme, string> = {
  light: "다크 모드로",
  dark: "시스템 설정 따라가기",
  system: "라이트 모드로",
};

/**
 * Light → Dark → System → Light ... 순환하는 단일 버튼.
 * 아이콘이 현재 모드를 표시하고, hover 시 다음 모드를 라벨로 안내한다.
 */
export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const Icon = theme === "light" ? Sun : theme === "dark" ? Moon : Monitor;

  const next = () => {
    const idx = ORDER.indexOf(theme);
    setTheme(ORDER[(idx + 1) % ORDER.length]);
  };

  return (
    <button
      type="button"
      onClick={next}
      className="inline-flex size-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      aria-label={`테마: ${LABELS[theme]}. 클릭: ${NEXT_LABELS[theme]}`}
      title={`${LABELS[theme]} → ${NEXT_LABELS[theme]}`}
    >
      <Icon className="size-4" />
    </button>
  );
}
