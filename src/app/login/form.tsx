import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import User from "../ui/svg/user";
import Password from "../ui/svg/password";
import { Button } from "../ui/button";
import Link from "next/link";

export async function LoginForm() {
  return (
    <form className="flex flex-col"action={async(form:FormData) => {
      "use server"
      try {
        await signIn("credentials", form)
        
      } catch (error) {
        if (error instanceof AuthError) {
          switch (error.type) {
            case "CredentialsSignin":return console.log('credenciales invalidas')
            default: return console.log('no se, pero auth')
          }
        }
        console.log('nose')
      }
      finally {
        redirect('/level')
      }
    } }>
       <div>
        <label
          className="mb-3 mt-5 block text-xs font-medium text-gray-900"
          htmlFor="UserName"
        >
          Nombre de Usuario
        </label>
        <div className="relative">
          <input
            className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
            id="UserName"
            type="text"
            name={"user"}
            placeholder="Tu nobmre de usuario"
            required
          />
          <User className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
        </div>
      </div>
      <div>
        <label
          className="mb-3 mt-5 block text-xs font-medium text-gray-900"
          htmlFor="Password"
        >
          Contraseña
        </label>
        <div className="relative">
          <input
            className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
            id="Password"
            type="password"
            name={"password"}
            placeholder="********"
            min="8"
            required
          />
          <Password className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
        </div>
      </div>
      <Button className="w-full mt-7" active>
        Inicia Sesión
      </Button>
      <Link href={'/register'} className="text-center mt-2 underline text-blue-500">¿No tienes una cuenta? Registrate</Link>
    </form>
  );
}