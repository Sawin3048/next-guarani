import { Register } from "../libs/actions";
import Cedula from "../ui/svg/cedula";
import User from "../ui/svg/user";
import Gender from "../ui/svg/gender";
import Calendar from "../ui/svg/calendar";
import { Button } from "../ui/button";
import Password from "../ui/svg/password";

export const LoginDataNames = {
  username: "username",
  identyNumber: "identifynumber",
  gender: "gender",
  birth: "birth",
  password:"password"
} 

export async function LoginForm() {
  return (
    <form action={Register}>
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
            name={LoginDataNames.username}
            placeholder="Tu nobmre de usuario"
            required
          />
          <User className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
        </div>
      </div>
      <div>
        <label
          className="mb-3 mt-5 block text-xs font-medium text-gray-900"
          htmlFor="CIN"
        >
          Número de cédula
        </label>
        <div className="relative">
          <input
            pattern="^[0-9.]+$"
            className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
            id="CIN"
            type="text"
            
            name={LoginDataNames.identyNumber}
            placeholder="Tu número de cédula"
            required
          />
          <Cedula className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
        </div>
      </div>
      <div>
        <label
          className="mb-3 mt-5 block text-xs font-medium text-gray-900"
          htmlFor="Gender"
        >
          Género
        </label>
        <div className="relative">
          <select
            name={LoginDataNames.gender}
            id="Gender"
            required
            className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
          >
            <option disabled selected>
              -- Elija una Opción --
            </option>
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
          </select>
          <Gender className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
        </div>
      </div>
      <div>
        <label
          className="mb-3 mt-5 block text-xs font-medium text-gray-900"
          htmlFor="Birth"
        >
          Fecha de Nacimiento
        </label>
        <div className="relative">
          <input
            className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
            id="Birth"
            type="date"
            name={LoginDataNames.birth}
            placeholder="Tu Fecha de Nacimiento"
            required
          />
          <Calendar className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
        </div>
      </div>
      <div>
        <label
          className="mb-3 mt-5 block text-xs font-medium text-gray-900"
          htmlFor="Password"
        >
          Password (mínimo 8 carácters)
        </label>
        <div className="relative">
          <input
            className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
            id="Password"
            type="password"
            name={LoginDataNames.password}
            placeholder="********"
            min="8"
            required
          />
          <Password className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
        </div>
      </div>      
      <Button className="w-full mt-7" active>
        Registrase
      </Button>
    </form>
  );
}