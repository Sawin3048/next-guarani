import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      console.log({ url: nextUrl.pathname })
      const isLoggedIn = !!auth?.user;
      const isOnLevels = nextUrl.pathname.startsWith('/level');
      const isOnRoot = nextUrl.pathname === '/'
      if (nextUrl.pathname === '/bg2.svg') return true

      if (isOnRoot) return true
      if (isOnLevels) {
        if (isLoggedIn) return true;
        return false;
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/level', nextUrl));
      }
      return false;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
