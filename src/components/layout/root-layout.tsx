import { Link, NavLink, Outlet } from "react-router-dom";

import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

export function RootLayout() {
  return (
    <div className="min-h-dvh flex flex-col">
      <header className="border-b border-border/60 backdrop-blur supports-[backdrop-filter]:bg-background/70 sticky top-0 z-40">
        <div className="mx-auto w-full max-w-5xl px-6 h-14 flex items-center justify-between">
          <Link
            to="/"
            className="font-mono text-sm tracking-tight hover:opacity-80"
          >
            kyunghwan.dev
          </Link>
          <nav className="flex items-center gap-4 text-sm text-muted-foreground">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                cn(
                  "transition-colors hover:text-foreground",
                  isActive && "text-foreground",
                )
              }
            >
              about
            </NavLink>
            <a
              href="mailto:kwiss22@hanyang.ac.kr"
              className="hover:text-foreground transition-colors"
            >
              contact
            </a>
            <span className="h-4 w-px bg-border/70" aria-hidden />
            <ThemeToggle />
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="border-t border-border/60">
        <div className="mx-auto w-full max-w-5xl px-6 py-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} 신경환 — Built with React, Tailwind v4,
          shadcn/ui.
        </div>
      </footer>
    </div>
  );
}
