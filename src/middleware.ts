//define all the protected route -> profile, post/create, post/[slug]/edit something like

import { NextRequest, NextResponse } from "next/server";
import { getCookieCache } from "better-auth/cookies";

const protectedRoutes = ["/profile", "/post/create", "/post/edit"];

export async function middleware(request: NextRequest) {
  const pathName = request.nextUrl.pathname;
  const session = await getCookieCache(request);

  const isProtectedroute = protectedRoutes.some((route) =>
    pathName.startsWith(route)
  );
  if (isProtectedroute && !session) {
    //REDIRECT TO LOGIN
    //BECUASE USER IS NOT LOGGED IN
    return NextResponse.redirect(new URL("/auth", request.url));
  }
  //IF USER IS ALREADY LOGGED in and user is accessing auth page then redirect to home
  if (pathName === "/auth" && session) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/profile/:path", "/post/create", "/post/edit/:path", "/auth"],
};
