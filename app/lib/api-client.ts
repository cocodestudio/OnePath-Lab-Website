export function getCleanLetterheadUrl(url?: string | null): string | null {
  if (!url || typeof url !== "string") return null;
  const trimmed = url.trim();
  if (!trimmed || trimmed === "null" || trimmed === "undefined" || trimmed === "none") {
    return null;
  }
  if (trimmed.startsWith("blob:")) {
    return null;
  }
  if (trimmed.startsWith("data:")) {
    return trimmed;
  }

  const envUrl = process.env.NEXT_PUBLIC_API_URL?.trim() || "http://localhost:8000";
  const origin = envUrl.replace(/\/api\/lis\/?$/, "").replace(/\/api\/?$/, "");

  if (trimmed.startsWith("/storage/")) {
    return `${origin}${trimmed}`;
  }
  if (trimmed.startsWith("storage/")) {
    return `${origin}/${trimmed}`;
  }
  if (trimmed.includes("/storage/")) {
    const storagePath = trimmed.substring(trimmed.indexOf("/storage/"));
    return `${origin}${storagePath}`;
  }

  return trimmed;
}
