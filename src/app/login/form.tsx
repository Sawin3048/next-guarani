import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

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
      <label htmlFor="">User</label>
      <input type="text" className="border" name="user" id="" />
      <label htmlFor="">Password</label>
      <input type="password" className="border" name="password" id="" />
      <button className="border">Enviar</button>
    </form>
  );
}