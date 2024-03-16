import { auth } from "@/auth";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const authInfo = await auth()
  const userId = authInfo?.user?.name

  // const logs = (await req.formData()).get('logs')
  console.log(req.body)
  console.log({ userId })
  if (!userId) throw new Error('Not user')
  return new Response()
}