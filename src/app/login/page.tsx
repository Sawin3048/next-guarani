import {Login} from "../libs/actions";

export default async function LoginPage() {
  
  return <>
  <h1 className="text-center mt-5 text-2xl">Ingresa tu nombre antes de Usar la app</h1>
    <form action={Login} className="m-auto w-full grid place-content-center h-dvh ">
    <label>
      Nombre:
    <input className="border border-black" type="text" name="" id="username" placeholder="Username" />
    </label>
  </form>
  </>
}