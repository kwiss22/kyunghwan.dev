import { useCallback, useEffect, useState } from "react";

export type Theme = "light" | "dark" | "system";

const STORAGE_KEY = "kw-theme";
const DARK_CLASS = "dark";

function readStored(): Theme {
  if (typeof window === "undefined") return "system";
  const v = window.localStorage.getItem(STORAGE_KEY);
  return v === "light" || v === "dark" || v === "system" ? v : "system";
}

function systemPrefersDark(): boolean {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function applyTheme(theme: Theme) {
  const resolved = theme === "system" ? (systemPrefersDark() ? "dark" : "light") : theme;
  document.documentElement.classList.toggle(DARK_CLASS, resolved === "dark");
}

/**
 * 사용자 선택(테마) + 시스템 설정 + localStorage 영속화를 묶은 훅.
 *
 * "system" 일 때만 OS 테마 변화를 실시간으로 따라간다.
 * 첫 페인트 FOUC는 index.html의 인라인 스크립트가 이미 막아주고,
 * 이 훅은 마운트 후 일관성 유지만 담당한다.
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => readStored());

  useEffect(() => {
    applyTheme(theme);
    if (theme !== "system") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => applyTheme("system");
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [theme]);

  const update = useCallback((next: Theme) => {
    window.localStorage.setItem(STORAGE_KEY, next);
    setTheme(next);
  }, []);

  return { theme, setTheme: update };
}
