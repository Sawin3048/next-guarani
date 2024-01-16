"use server"

import { cookies } from "next/headers";
import { redirect } from 'next/navigation'
import { ZodError, z } from "zod"
import { LoginDataNames } from "../login/form";

const UsernameShema = z.object({
  username: z.string().min(3).max(15),
  identify: z.string().min(3).regex(RegExp("^[0-9.]+$"), "Solo puede contener número y puntos"),
  gender: z.enum(["masculino", "femenino"]),
  birth: z.date()
})


export async function Login(formData: FormData) {
  try {
    const username = UsernameShema.parse({
      name: formData.get("username")
    })
    cookies().set("username", username.username, { httpOnly: true })
    redirect('/level')
  } catch (error) {
    if (error instanceof ZodError) {
      console.log(error)
    }
  }

}