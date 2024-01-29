"use client"
import { CompleteLevelProvider } from "@/app/ui/levels/complete-level/context"
import { useChapter } from "../context/chapter-handler-context"
import LevelNav from "./nav"
import Level from "@/app/ui/levels/complete-level/level"
import { LevelMessage } from "@/app/ui/levels/complete-level/message"
import JSConfetti from 'js-confetti'

function Client() {  
  const chapter = useChapter()
  const jsConfetti = new JSConfetti()
  if(chapter.finish) jsConfetti.addConfetti()
  if (chapter.finish) return <>
    
    <audio src="/victory.mp3" autoPlay hidden></audio>
    <h2>¡Felicidales!</h2> 
    <h3>Completaste</h3>
    <button onClick={() => {
      chapter.init(chapter.levels)
    }}>Volver a jugar</button>
    
  </>

  if(chapter.heart === 0) return <>Perdiste por bobo</>
  
  return chapter.isReady ?
    <div className="flex flex-col max-w-3xl justify-between m-auto h-svh bg-white">
      <LevelNav />
      <CompleteLevelProvider >
        <Level />
        <div>
          <hr className="border-2"/>
          <LevelMessage />
        </div>
      </CompleteLevelProvider>
    </div>
  :  <></>

}

export default Client