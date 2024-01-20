"use server"

import { redirect } from 'next/navigation'
import { ZodError, z } from "zod"
import { LoginDataNames } from "../register/form";
import prisma from "@/db";
import bcrypt from "bcrypt"
import { nanoid } from "nanoid";
import { PrismaClientKnownRequestError, PrismaClientUnknownRequestError, PrismaClientValidationError } from "@prisma/client/runtime/library";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";


export async function authenticate(prevState: string | undefined, formData: FormData) {
  try {
    await signIn("credentials", formData)
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin": return "Credenciales no validas"
        default: return "Algo fue mal"
      }
    }
    throw error
  }
}

interface IUser {
  username: string;
  identify: string;
  gender: "masculino" | "femenino";
  birth: string;
  password: string;
}

const UsernameShema = z.object({
  username: z.string().min(3).max(15),
  identify: z.string().min(3).regex(RegExp("^[0-9.]+$"), "Solo puede contener número y puntos"),
  gender: z.enum(["masculino", "femenino"]),
  birth: z.string(),
  password: z.string().min(8)
})


async function saveUser(user: IUser) {
  const data = {
    username: user.username,
    birth: user.birth,
    gender: user.gender,
    identify: user.identify,
    password: await bcrypt.hash(user.password, 10),
    id: nanoid(),
  }
  return await prisma.user.create({
    data
  })
}

export async function Register(formData: FormData) {
  try {
    const userValues: IUser = UsernameShema.parse({
      username: formData.get(LoginDataNames.username),
      identify: formData.get(LoginDataNames.identyNumber),
      gender: formData.get(LoginDataNames.gender),
      birth: formData.get(LoginDataNames.birth),
      password: formData.get(LoginDataNames.password)
    })

    await saveUser(userValues)

    const form = new FormData()
    form.set("user", userValues.username)
    form.set("password", userValues.password)


    await authenticate("", form)



  } catch (error) {
    if (error instanceof ZodError) {
      console.log(error)
      return "No pusiste bien las cosas"
    }
    if (error instanceof PrismaClientUnknownRequestError) {
      console.log('unknowError')
      console.log(error.name, error.message)
    }
    if (error instanceof PrismaClientValidationError) {
      console.log('validationError')
    }
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === "P2002") return "El nombre de usuario ya esta en uso"
    }

  }
  finally {
    redirect('/level')
  }
}