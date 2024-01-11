import Link from "next/link";
import { ButtonD } from "@/app/ui/button";
import Image from "next/image";

type dificulty = "fácil" | "medio" | "difícil";

interface Params {
  imgSrc: string;
  title: string;
  subTitle: string;
  btnUrl: string;
  dificulty: dificulty;
  color: 'yellow' | 'emerald' | 'gray'
}

export default function LevelSelector({
  imgSrc,
  btnUrl,
  subTitle,
  title,
  dificulty,color
}: Params) {
  return (
    <section className={`flex flex-col-reverse h-svh border-${color}-300 px-10 py-7 justify-between max-w-3xl m-auto rounded-3xl bg-${color}-600  sm:flex-row sm:h-auto max-h-96`}>
      <div className=" w-auto">
        <span className={`bg-${color}-500 rounded-xl font-bold py-2 px-5 capitalize`}>
          {dificulty}
        </span>
        <h3 className="font-extrabold mt-4 text-xl">{ title }</h3>
        <h3 className="font-medium mt-1 -xl opacity-90">{subTitle}</h3>
        <Link href={btnUrl}>
          <ButtonD className="w-full mt-5" color={color}>Empezar</ButtonD>
        </Link>
      </div>
      <div className="grid place-content-center ">
        <Image
          src={imgSrc}
          alt="Niño con una lupa"
          width={200}
          height={200}
          className=""
        />
      </div>
    </section>
  );
}
