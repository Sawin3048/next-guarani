import LevelSelector from "@/app/ui/levels/level-card";

export default function Level() {
  return (
    <main>
      <ul className="text-white flex md:gap-3 gap-1 flex-col">
        <li>
          <LevelSelector btnUrl="level/1" color="pink" dificulty="fácil" imgSrc="/niño-buscando.png" title="Etapa 1: Terarãngue" subTitle="Pronombres Personales"/>
        </li>    
        <li>
          <LevelSelector btnUrl="level/2" color="purple" dificulty="fácil" imgSrc="/niña-comiendo.png" title="Etapa 2: Ñe’ẽtéva" subTitle="Verbos"/>
        </li>
        <li>
          <LevelSelector btnUrl="level/3" color="emerald" dificulty="fácil" imgSrc="/niño-buscando.png" title="Etapa 3: Tero" subTitle="Sustantivos"/>
        </li>
        <li>
          <LevelSelector btnUrl="level/4" color="purple" dificulty="medio" imgSrc="/niño-buscando.png" title="Etapa 4: Temiandu" subTitle="Sentimientos"/>
        </li>
      </ul>
    </main>
  );
}
