import { ButtonLink } from "@/app/ui/buttond"
import Arrow from "@/app/ui/svg/arrow"
import Link from "next/link"
import StatsList from "@/app/ui/stats/list"
import getLog from "@/app/ui/stats/getLogs"
import { Grafic } from "@/app/ui/stats/grafic"




async function StatsPage() {
  const logs = await getLog()

  return (
    <main className="max-w-3xl m-auto bg-white pt-4 min-h-dvh">
      <div className="sm:ml-5 ml-2">
      <Link tabIndex={-1} href={'/level'}>
        <ButtonLink className="bg-white hover:bg-white"><Arrow /></ButtonLink>
      </Link>
      </div>
      <h1 className="my-6 text-center font-bold text-5xl text-neutral-800">Registros</h1>
      <p className="px-2 text-pretty sm:text-center">Porcentaje completado de los últimos niveles</p>
      <Grafic logs={logs}/>
      <StatsList logs={logs}/>
    </main>
  )
}

export default StatsPage