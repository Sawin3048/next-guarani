/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import { useStore } from "@/app/ui/levels/chapter-controller"
import Level from "@/app/ui/levels/level"
import ProgressBar from "@/app/ui/levels/progress-bar"
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
    <button onClick={()=>store.init(store.levels)}>Volver a jugar</button>
  </>
  
  const currentLevel = store.levels.find(l => l.id === store.current)
  
  return currentLevel ?  <div className="flex flex-col">
    <ProgressBar percentage={ `${100 / store.amount * avanced}%` } />
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