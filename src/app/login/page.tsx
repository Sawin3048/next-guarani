import { LoginForm } from "./form";

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="w-full max-w-[400px]  space-y-2.5 p-4 md:-mt-32">
        <section className="shadow-md grid place-content-center h-20 w-full items-end rounded-lg bg-green-800 p-3 md:h-36">
          <div className="text-2xl text-center sm:text-4xl w-full text-white">
            <h2>Crea una cuenta</h2>
          </div>
        </section>
        <section className="border backdrop-blur-md p-4 rounded-lg shadow-md">
          <h2 className="text-balance text-center">
            Para no perder tu progreso
          </h2>
          <LoginForm/>
        </section>
      </div>
    </main>
  );
}
