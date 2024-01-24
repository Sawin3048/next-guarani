/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import { useStore } from "@/app/ui/levels/chapter-controller"
import Hearts from "@/app/ui/levels/heart"
import Level from "@/app/ui/levels/level"
import ProgressBar from "@/app/ui/levels/progress-bar"
import Close from "@/app/ui/svg/close"
import Link from "next/link"
import { useEffect, useState } from "react"


function Client() {
  const store = useStore()
  const [avanced, setAvanced] = useState(0)

  const a = {
    amount: store.amount,
    toPlay: store.toPlay,
    current: store.current,
    failed: store.failed,
    completed: store.completed,
    finish: store.finish,
  }
  useEffect(() => {
    fetch('/api/level').then(r=>r.json()).then(r=>store.init(r))
  }, [])
  
  if (store.finish) return <>
    Haz terminado Felicidales
    <button onClick={() => {
      store.init(store.levels)
      setAvanced(0)
    }}>Volver a jugar</button>
  </>
  
  const currentLevel = store.levels.find(l => l.id === store.current)
  
  return currentLevel ?  <div className="flex flex-col max-w-3xl m-auto justify-between">
    <nav className=" w-full border rounded-t-none md:rounded-t-2xl flex p-3 gap-4 justify-between rounded-2xl items-center bg-white">
        <Link className="text-gray-400" href={"/level"}>
          <Close />
        </Link>
      <ProgressBar percentage={`${100 / store.amount * avanced}%`} />
      <Hearts num={store.heart} />
      </nav>
    <code className="bg-white text-lg">{JSON.stringify(a,null,2)}</code>
    <button className="border-2 border-black" onClick={store.complete}>Complete</button>
    <button className="border-2 border-black" onClick={store.fail}>fail</button>
    <Level
      toRender={currentLevel}
      onComplete={store.complete}
      onFail={store.fail}
      avance={() => setAvanced(e => (e + 1))}
    />

  </div>
  :  <></>

}

export default Client