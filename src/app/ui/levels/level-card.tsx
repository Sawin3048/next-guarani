import Link from "next/link";
import { ButtonLink } from "@/app/ui/buttond";
import Image from "next/image";
import clsx from "clsx";

type color = 'emerald' | 'pink' | 'teal' | 'purple'
type dificulty = "fácil" | "medio" | "difícil";

interface Params {
  imgSrc: string;
  title: string;
  subTitle: string;
  btnUrl: string;
  dificulty: dificulty;
  color: color
}

export default function LevelSelector({
  imgSrc,
  btnUrl,
  subTitle,
  title,
  dificulty,color
}: Params) {
  return (
    <section className={clsx(`flex flex-col-reverse h-svh px-10 py-7 justify-between max-w-3xl m-auto md:rounded-3xl sm:flex-row sm:h-auto max-h-96`, {
      "border-emerald-300": color === 'emerald',
      "bg-emerald-600": color === 'emerald',
      "border-pink-300": color === 'pink',
      "bg-pink-600": color === 'pink',
      "border-teal-300": color === 'teal',
      "bg-teal-600": color === 'teal',
      "border-purple-300": color === 'purple',
      "bg-purple-600": color === 'purple',
    })}>
      <div className=" w-full sm:max-w-80">
        <span className={clsx(` rounded-xl font-bold py-2 px-5 capitalize`, {
          "bg-emerald-500": color === 'emerald',
          "bg-pink-500": color === 'pink',
          "bg-teal-500": color === 'teal',
          "bg-purple-500": color === 'purple'
        })}>
          {dificulty}
        </span>
        <h3 className="font-extrabold mt-4 text-xl">{ title }</h3>
        <h3 className="font-medium mt-1 -xl opacity-90">{subTitle}</h3>
        <Link href={btnUrl}>
          <ButtonLink className="w-full mt-5" color={color}>Empezar</ButtonLink>
        </Link>
      </div>
        <div className="grid place-content-center w-full md:pl-16 ">
        <Image
          src={imgSrc}
          alt="Niño con una lupa"
          width={220}
          height={220}
          className=""
        />
      </div>
    </section>
  );
}
