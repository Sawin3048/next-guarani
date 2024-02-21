import LevelSelector from "@/app/ui/levels/level-card";

export default function Level() {
  return (
    <main>
      <ul className="text-white flex md:gap-3 gap-1 flex-col md:mt-4">
        <li>
          <LevelSelector btnUrl="level/NymsQz0MvUCY2XqDQEnRJ" color="pink" dificulty="fácil" imgSrc="/niño-buscando.png" title="Etapa 1: Terarãngue" subTitle="Pronombres Personales"/>
        </li>    
        <li>
          <LevelSelector btnUrl="level/Osr4xJtV1X9H41Db6vYOR" color="purple" dificulty="fácil" imgSrc="/niña-comiendo.png" title="Etapa 2: Ñe’ẽtéva" subTitle="Verbos"/>
        </li>
        <li>
          <LevelSelector btnUrl="level/fx1GsK8Jmk4rC6dgw53BM" color="emerald" dificulty="fácil" imgSrc="/niño-buscando.png" title="Etapa 3: Tero" subTitle="Sustantivos"/>
        </li>
        {/* <li>
          <LevelSelector btnUrl="level/6XmDASUeHeoh2dKV692zi" color="purple" dificulty="medio" imgSrc="/niño-buscando.png" title="Etapa 4: Temiandu" subTitle="Sentimientos"/>
        </li> */}
      </ul>
    </main>
  );
}
