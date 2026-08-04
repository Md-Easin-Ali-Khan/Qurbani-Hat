import { NextResponse } from "next/server";

// Ensure the word 'export' is in front of 'function middleware'
export function middleware(request) {
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};