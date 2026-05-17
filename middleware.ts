import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.pathname;
  const host = request.headers.get("host") ?? "unknown";
  const referer = request.headers.get("referer") ?? "none";

  // #region agent log H1/H4 - does any request reach Next.js?
  const payload = {
    sessionId: "5566ee",
    location: "middleware.ts:1",
    message: "Request reached Next.js middleware",
    data: { url, host, referer, method: request.method },
    hypothesisId: "H1_H4",
    timestamp: Date.now(),
  };
  console.log("[debug-5566ee] middleware hit:", JSON.stringify(payload));
  // Fire-and-forget to local debug server (only works in local dev)
  if (process.env.NODE_ENV === "development") {
    fetch("http://127.0.0.1:7613/ingest/c59afd29-3062-42b8-a7ee-2afa7bfe3f3c", {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "5566ee" },
      body: JSON.stringify(payload),
    }).catch(() => {});
  }
  // #endregion

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
