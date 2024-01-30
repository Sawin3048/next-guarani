"use client"
import { CompleteLevelProvider } from "@/app/ui/levels/complete-level/context"
import { useChapter } from "../context/chapter-handler-context"
import LevelNav from "./nav"
import Level from "@/app/ui/levels/complete-level/level"
import { LevelMessage } from "@/app/ui/levels/complete-level/message"
import FailScreen from "./fail-screen"
import SuccessSreen from "./success-screen"

function Client() {  
  const chapter = useChapter()
  
  
  if (chapter.finish) return <SuccessSreen/>
  if(chapter.heart === 0) return <FailScreen />
  
  if (chapter.isReady) return (
    <div className="flex flex-col max-w-3xl justify-between m-auto h-svh bg-white">
      <LevelNav />
      <CompleteLevelProvider >
        <Level />
        <div>
          <hr className="border-2"/>
          <LevelMessage />
        </div>
      </CompleteLevelProvider>
    </div>)
}

export default Client