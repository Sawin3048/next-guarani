import type { NextAuthConfig } from 'next-auth';
import { redirect } from 'next/navigation';

export const authConfig = {
  pages: {
    signIn: '/login',
    newUser: '/register'
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      console.log({ url: nextUrl.pathname })
      const isLoggedIn = !!auth?.user;
      const isOnLevels = nextUrl.pathname.startsWith('/level');
      const isOnRoot = nextUrl.pathname === '/'
      if (nextUrl.pathname === '/bg2.svg') return true
      if (nextUrl.pathname === '/register') {
        if (!!auth) return Response.redirect(new URL('/level', nextUrl))
        return true
      }

      if (isOnRoot) return true
      if (isOnLevels) {
        if (isLoggedIn) return true;
        return false;
      } else if (isLoggedIn) {
        return true
      }
      return false;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
