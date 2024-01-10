import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* <h1>Desafios</h1> */}
      <ul className="text-white flex gap-3 flex-col">
        <li>
          <section className="flex flex-col-reverse h-svh border-green-300 px-10 py-7 justify-between max-w-3xl m-auto rounded-3xl bg-emerald-600  sm:flex-row sm:h-auto max-h-96">
            <div className=" w-auto">
              <span className="bg-emerald-500 rounded-xl font-bold py-2 px-5 ">
                Fácil
              </span>
              <h3 className="font-extrabold mt-4 text-xl">
                Etapa 1: Primeros Pasos
              </h3>
              <h3 className="font-medium mt-1 -xl opacity-90">Pronombres</h3>
              <Link href={'level/1'}>
              <button  className="text-base font-bold mt-5 py-3 px-4 rounded-xl border-2 border-b-4 border-emerald-500 shadow hover:bg-emerald-700 transform transition-transform active:scale-105 w-full">
                Empezar
              </button>
              </Link>
            </div>
            <div className="grid place-content-center ">
              <Image
                src={"/niño-buscando.png"}
                alt="Niño con una lupa"
                width={200}
                height={200}
                className="mr-4 "
              ></Image>
            </div>
          </section>
            </li>

        <section className="flex flex-row border border-pink-300 px-10 py-7 justify-between max-w-6xl m-auto rounded-3xl bg-pink-600 md:max-w-xl">
          <div className="border">
            <span className="bg-pink-500 rounded-xl font-bold py-2 px-5">
              Dificil
            </span>
            <h3 className="font-extrabold mt-4 text-xl">
              Etapa 2: Afianzando Conocimientos
            </h3>
            <h3 className="font-normal mt-1 -xl opacity-90"> Pronombres</h3>
            <button className="text-base font-bold mt-5 py-3 px-4 rounded-xl border-2 border-pink-500 shadow hover:bg-pink-700 transform transition-transform active:scale-105">
              Empezar
            </button>
          </div>
          <div className="">
            <Image
              src={"/niño-buscando.png"}
              alt="Niño con una lupa"
              width={200}
              height={200}
              className="mr-4"
              ></Image>
          </div>
        </section>
      </ul>
    </main>
  );
}
