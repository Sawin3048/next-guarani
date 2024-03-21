import clsx from "clsx"
import Hearts from "../levels/heart"
import Stat from "./stat"
import { capitalize } from "@/app/utils/capitalize"
import { ReactNode } from "react"
import { Log } from "../levels/chapter-store"

export interface Logs {
    id: string;
    error: number;
    date: Date;
    chapterId: string;
    logs: Log[]
}


interface Params {
  logs: Logs[]
}

async function StatsList({logs}:Params) {
  
  
  if (logs.length <= 0) return (
    <div className="md:max-w-sm m-auto mt-12 max-w-xs rounded-3xl p-4 select-none">
      <h2 className="text-center md:text-4xl text-2xl font-bold mb-4 text-gray-900">No hay Registros</h2>
      <img src="/not-content.svg" className="rounded-3xl"></img>
    </div>
  )
  if (logs.length <= 0) return <></>
  
  return logs.map((log) => {
    const win = log.error <= 3
  
    const logsList = log.logs.map(l => {
      return <Stat isWell selected={l.selected }  key={l.levelId} correctOption={l.correctOption} />
    })
    const formatoFecha = new Intl.DateTimeFormat('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    const time = formatoFecha.format(log.date)
  
    return (<>
      <article className={clsx("rounded-lg mt-5 sm:mx-3", {
        "bg-emerald-500": win,
        "bg-red-400": !win
      })}>
        <div className={clsx("border-2 border-b-4 p-2 sm:p-4 rounded-lg flex gap-2 items-center justify-between", {
          "bg-emerald-700": win,
          "border-emerald-500": win,
          "bg-red-600": !win,
          "border-red-400": !win
        })}>
          <h4 className="text-white font-semibold sm:text-xl">{capitalize(time)}</h4>
          <div className="bg-white rounded-xl p-1 sm:p-2 border-2 border-b-4">
            <Hearts num={3-log.error} />
          </div>
        </div>
  
        <ul className="p-2 flex flex-col gap-3 [&>li]:p-1 [&>li]:sm:p-2 [&>li]:rounded-lg [&>li]:bg-white [&>li]:border-2 [&>li]:border-b-4 [&>li]:flex [&>li]:align-middle">
          <li className="flex justify-between sm:text-xl !sm:py-2">
            <div className="ml-12 sm:ml-14 w-1/2">
              <p>Seleccionado</p>
            </div>
            <div className="w-1/2 border-l-2 sm:pl-9 pl-3">
              <p>Correcto</p>
            </div>
          </li>
          {
          logsList as ReactNode[]
          }   
        </ul>
        
      </article>
    </>)    
    })


}

export default StatsList