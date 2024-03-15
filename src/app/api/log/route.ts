import { auth } from "@/auth";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  console.log(req.body)
  console.log(await auth())
  return new Response()
}