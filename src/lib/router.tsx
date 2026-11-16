import { useEffect, useState, type MouseEvent, type ReactNode } from "react";

/* Minimal client-side router for the static Pages deployment.
   Paths are clean (no hash routing); dist/404.html is a copy of
   index.html so GitHub Pages serves the app on deep links. */

const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

export interface Route {
  path: string;
  hash: string;
}

export function routeFromLocation(): Route {
  let p = window.location.pathname;
  if (BASE && p.startsWith(BASE)) p = p.slice(BASE.length);
  if (!p.startsWith("/")) p = `/${p}`;
  return { path: p || "/", hash: window.location.hash.replace(/^#/, "") };
}

export function navigate(to: string) {
  const [pathPart, hashPart] = to.split("#");
  const url = `${BASE}${pathPart || "/"}${hashPart ? `#${hashPart}` : ""}`;
  window.history.pushState({}, "", url);
  window.dispatchEvent(new PopStateEvent("popstate"));
}

export function useRoute(): Route {
  const [route, setRoute] = useState<Route>(routeFromLocation);
  useEffect(() => {
    const onChange = () => setRoute(routeFromLocation());
    window.addEventListener("popstate", onChange);
    return () => window.removeEventListener("popstate", onChange);
  }, []);
  return route;
}

export function Link({
  to,
  className,
  children,
}: {
  to: string;
  className?: string;
  children: ReactNode;
}) {
  const [pathPart, hashPart] = to.split("#");
  const href = `${BASE}${pathPart || "/"}${hashPart ? `#${hashPart}` : ""}`;
  const onClick = (e: MouseEvent) => {
    e.preventDefault();
    navigate(to);
  };
  return (
    <a href={href} onClick={onClick} className={className}>
      {children}
    </a>
  );
}
