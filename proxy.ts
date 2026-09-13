import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = [
  "/appearance",
  "/today",
  "/upcoming",
  "/completed",
  "/add-task",
  "/filters",
  "/task-search",
];

export function proxy(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const { pathname } = request.nextUrl;

  const isProtected = protectedRoutes.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`),
  );

  if (isProtected && !token) {
    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/appearance/:path*",
    "/today/:path*",
    "/upcoming/:path*",
    "/completed/:path*",
    "/add-task/:path*",
    "/filters/:path*",
    "/task-search/:path*",
  ],
};
