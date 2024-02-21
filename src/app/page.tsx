"use client"
import Link from "next/link";
import Image from "next/image";
import { ButtonLink } from "./ui/buttond";
import PlayAudio from "./ui/play-audio";

export default function Home() {
  return (
    <main className=" bg-white max-w-4xl m-auto pt-4 grid place-content-center p-3">
      <h1 className="font-bold text-6xl text-center  text-green-600 px-4">
        Aprende Guaraní
      </h1>
      <section className="flex flex-row  gap-5 flex-wrap sm:justify-between justify-center">
        <div>
          <Image
            className="select-none"
            src={"/inicio.png"}
            alt=""
            width={300}
            height={300}
          />
        </div>
        <div className="">
          <div className="grid place-content-center h-full">
            <div className="grid place-content-center">
              <PlayAudio className="w-10 h-10" src="/saludo.mp3" />
            </div>

            <p>Maitei, eju ñañemomarandu guaranípe</p>
            <p className="text-neutral-500">
              Bienvenido, ven hablemos en guarani
            </p>
            <div className="w-full mt-5">
              <Link href={"/level"} className="mt-10">
                <ButtonLink className="w-full  hover:text-white" color="teal">
                  Empezar
                </ButtonLink>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-20 flex gap-5 flex-wrap md:justify-between justify-center flex-row-reverse">
        <div>
          <Image
            alt=""
            src={"/app.png"}
            width={300}
            height={300}
            style={{ filter: "drop-shadow(8px 8px 5px rgb(0 0 0 / 0.2)" }}
          ></Image>
        </div>
        <div className="max-w-[35ch] grid place-content-center">
          <p>
            La lengua guaraní esta arraigada a nuestra cultura paraguaya. No
            podes estar un segundo más sin aprender guaraní.
          </p>
          <p className="mt-3"></p>
          <p className="mt-3">
            Disfruta aprendiendo, tanto en dispositivos móviles como en
            escritorio.
          </p>

          <div className="w-full mt-5 pr-4">
            <Link href={"/level"}>
              <ButtonLink className="w-full hover:text-white" color="teal">
                Empezar
              </ButtonLink>
            </Link>
          </div>
        </div>
      </section>
      <button onClick={() => print()}>hola</button>
    </main>
  );
}
