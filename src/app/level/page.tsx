import LevelSelector from "@/app/ui/levels/level-card";

export default function Home() {
  return (
    <main>
      {/* <h1>Desafios</h1> */}
      <ul className="text-white flex gap-3 flex-col">
        <li>
          <LevelSelector btnUrl="level/1" color="emerald" dificulty="fácil" imgSrc="/niño-buscando.png" title="Etapa 1: Primeros Pasos" subTitle="Pronom  bres"/>
        </li>
    
        <li>
          <LevelSelector btnUrl="level/1" color="gray" dificulty="fácil" imgSrc="/niño-buscando.png" title="Etapa 1: Primeros Pasos" subTitle="Pronombres"/>
        </li>
      </ul>
    </main>
  );
}
