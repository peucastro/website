export const projectStatusMap = {
  active: "text-success border-success/30 bg-success/10",
  completed: "text-info border-info/80 bg-info/10",
  archived: "text-muted border-border bg-bg-deep",
} as const;

export function formatDate(date: Date, includeDay = false) {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    ...(includeDay && { day: "numeric" }),
  });
}

export function normalizeUrl(pathname: string, site: string): string {
  return new URL(pathname.replace(/\/$/, "") + "/", site).href;
}
