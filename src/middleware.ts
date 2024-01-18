import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export const config = {
  matcher: "/level/:path*"
}

let counter = 0

export function middleware(req: NextRequest) {
  console.log(req.url)
  console.log(counter)
  counter++

  const cookie = cookies().get('username')?.value
  console.log({ cookie })
  if (cookie) return undefined
  return Response.redirect(new URL('/register', req.url))
}