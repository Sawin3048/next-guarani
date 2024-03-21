import LevelSelector from "@/app/ui/levels/level-card";
import { ButtonLink } from "@/app/ui/buttond";
import Link from "next/link";
import History from "../ui/svg/history";

interface ILevelSelector {
  url: string
  color: string 
  dificulty: string
  imgSrc: string
  title: string
  subTitle: string
}

export default function Level() {
  return (
    <main className="relative max-w-3xl m-auto">
      <nav className="fixed md:bottom-[60px] bottom-[20px] right-0 mr-2 md:mr-[60px] z-50 shadow-2xl">
        <Link href={'/account/stats'}>
          <ButtonLink color="emerald" className="bg-emerald-600">
            <div className="text-white w-10 h-10 flex justify-center items-center">
              <History className="text-white w-full" />
            </div>
          </ButtonLink>
        </Link>
      </nav>
      {/* <hr className="mb-4 mt-3"/> */}
      <ul className="text-white flex md:gap-3 gap-1 flex-col md:mt-4">
        <li>
          <LevelSelector btnUrl="level/NymsQz0MvUCY2XqDQEnRJ" color="pink" dificulty="fácil" imgSrc="/niño-buscando.png" title="Etapa 1: Terarãngue" subTitle="Pronombres Personales"/>
        </li>
        <li>
          <LevelSelector btnUrl="level/Osr4xJtV1X9H41Db6vYOR" color="purple" dificulty="fácil" imgSrc="/niña-comiendo.png" title="Etapa 2: Ñe'ẽtéva" subTitle="Verbos"/>
        </li>
        <li>
          <LevelSelector btnUrl="level/fx1GsK8Jmk4rC6dgw53BM" color="emerald" dificulty="fácil" imgSrc="/niño-buscando.png" title="Etapa 3: Tero" subTitle="Sustantivos"/>
        </li>
        <li>
          <LevelSelector btnUrl="level/6XmDASUeHeoh2dKV692zi" color="pink" dificulty="medio" imgSrc="/niño-buscando.png" title="Etapa 4: Teroja" subTitle="Adjetivos"/>
        </li>
        <li>
          <LevelSelector btnUrl="level/y21WNc8ZSYDQ9dnT2qzHt" color="teal" dificulty="medio" imgSrc="/niña-comiendo.png" title="Etapa 5: Temiandu" subTitle="Sentimientos"/>
        </li>
      </ul>
    </main>
  );
}
