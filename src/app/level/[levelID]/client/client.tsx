"use client"
import Level from "@/app/ui/levels/level"
import { useChapter } from "../context/chapter-handler-context"
import LevelNav from "./nav"


function Client() {  
  const store = useChapter()

  // const a = {
  //   amount: store.amount,
  //   toPlay: store.toPlay,
  //   current: store.currentID,
  //   failed: store.failed,
  //   completed: store.completed,
  //   finish: store.finish,
  // }

  if (store.finish) return <>
    Haz terminado Felicidales
    <button onClick={() => {
      store.init(store.levels)
    }}>Volver a jugar</button>
  </>

  if(store.heart === 0) return <>Perdiste por bobo</>
  
  return store.isReady ?  <div className="flex flex-col max-w-3xl m-auto justify-between">
    <LevelNav/>
    {/* <code className="bg-white text-lg">{JSON.stringify(a,null,2)}</code> */}
    <Level />
    
  </div>
  :  <></>

}

export default Client