import { NextRequest, NextResponse } from "next/server";
import { COOKIE_NAME, verifyAdminSessionToken } from "@/lib/session";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Allow login page and auth endpoints
  if (pathname === "/leads/login" || pathname.startsWith("/api/auth")) {
    return NextResponse.next();
  }

  // Protect /leads and /api/leads
  if (pathname.startsWith("/leads") || pathname.startsWith("/api/leads")) {
    const sessionToken = req.cookies.get(COOKIE_NAME)?.value;
    const isValid = await verifyAdminSessionToken(sessionToken);

    if (!isValid) {
      if (pathname.startsWith("/api/")) {
        return NextResponse.json(
          { error: "Unauthorized access. Please log in to KustomXworks Admin." },
          { status: 401 }
        );
      }
      const loginUrl = new URL("/leads/login", req.url);
      loginUrl.searchParams.set("from", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/leads/:path*", "/api/leads/:path*"],
};
