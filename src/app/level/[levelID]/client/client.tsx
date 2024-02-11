"use client"
import { CompleteLevelProvider, useCompleteLevel } from "@/app/ui/levels/complete-level/context"
import { useChapter } from "../context/chapter-handler-context"
import LevelNav from "./nav"
import Level from "@/app/ui/levels/complete-level/level"
import { LevelMessage } from "@/app/ui/levels/complete-level/message"
import FailScreen from "./fail-screen"
import SuccessSreen from "./success-screen"
import AudioLevel from "@/app/ui/levels/audio-level/level"
import { CompleteLevel } from "@/app/ui/levels/complete-level/level-ready"
import { CompleteWithAudio } from "@/app/ui/levels/complete-with-audio/level-ready"



function LevelReady() {
  const store = useCompleteLevel()
  if (store.isReady) {
    return (<>
      <Level />
      <div>
        <hr className="border-2" />
        <LevelMessage />
      </div>
    </>
    )
  }
}


function Client() {  
  const chapter = useChapter()
  
  
  if (chapter.finish) return <SuccessSreen/>
  if(chapter.heart <= 0) return <FailScreen />
  
  if (chapter.isReady) return (
    <div className="flex flex-col max-w-3xl justify-between m-auto h-svh bg-white">
      <LevelNav />
      {
        // Complete level
        chapter.current.type === "complete" && <CompleteLevel/>
      }
      {
        // Audio and Questions
        chapter.current.type === "audio-and-questions" && <AudioLevel />
      }
      {chapter.current.type === "complete-with-audio" && <CompleteWithAudio/>
      }
    </div>)
}

export default Client