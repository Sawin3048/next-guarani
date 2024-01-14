"use server"

import { cookies } from "next/headers";
import { redirect } from 'next/navigation'

export async function Login() {
  cookies().set("username", "gato", { httpOnly: true })
  redirect('/level')
}