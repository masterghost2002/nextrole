import { NextResponse, NextRequest } from 'next/server';
import { createClient } from '@/lib/supabase';
import DB from '@/core/db';
const routeConfig = {
  protectedRoutes: ['/home', '/profile', '/settings'],
  basicProtectedRoutes: ['/onboarding'],
  basicRoutes: ['/', '/about', '/contact'],
  apiRoutes: ['/api', '/auth']
};

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (routeConfig.apiRoutes.some((route) => pathname.startsWith(route))) {
    return NextResponse.next();
  }

  if (routeConfig.basicRoutes.includes(pathname)) return NextResponse.next();

  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();

  if (error || !data.user) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  const db = await DB.getInstance();
  const user = await db.user.getUserByEmail(data.user?.email || '');

  //check is basic protected route -> sign in by google
  if (routeConfig.basicProtectedRoutes.includes(pathname)) {
    if (user) return NextResponse.redirect(new URL('/home', request.url));
    else if (data.user && data.user.email) return NextResponse.next();
    else return NextResponse.redirect(new URL('/', request.url));
  }

  // check user is in db
  if (!user) {
    return NextResponse.redirect(new URL('/onboarding', request.url));
  }

  return NextResponse.next();
}

// Middleware configuration (optional)
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)'
  ]
};
