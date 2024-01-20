import NextAuth from 'next-auth';
import { authConfig } from '@/auth.config';
import Credentials from 'next-auth/providers/credentials'
import z from "zod"
import prisma from '@/db';
import bcrypt from "bcrypt"

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [Credentials({
    async authorize(credentials) {

      const parsedCredentials = z
        .object({ user: z.string().min(3), password: z.string().min(8) })
        .safeParse(credentials);

      if (parsedCredentials.success) {
        const { password, user } = parsedCredentials.data

        const dbUser = await prisma.user.findFirst({ where: { username: user } })

        if (!dbUser) return null

        const passwordMatch = await bcrypt.compare(password, dbUser.password)
        console.log({ passwordMatch })
        if (passwordMatch) return { id: dbUser.id }
      }
      console.log('entre aca')
      return null
    },
  }),],
  // callbacks: {
  //   redirect: async ({ baseUrl, url }) => {
  //     console.log({ baseUrl, url })
  //     return new URL('/level', url).toString()
  //   }
  // },
});