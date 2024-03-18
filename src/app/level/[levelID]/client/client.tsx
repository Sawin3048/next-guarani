"use client"
import { useCompleteLevel } from "@/app/ui/levels/complete-level/context"
import { useChapter } from "../context/chapter-handler-context"
import LevelNav from "./nav"
import Level from "@/app/ui/levels/complete-level/level"
import { LevelMessage } from "@/app/ui/levels/complete-level/message"
import FailScreen from "./fail-screen"
import SuccessSreen from "./success-screen"
import { CompleteLevel } from "@/app/ui/levels/complete-level/level-ready"
import { CompleteWithAudio } from "@/app/ui/levels/complete-with-audio/level-ready"
import { QuestionsAndAudioLevel } from "@/app/ui/levels/audio-level/level-ready"
import { ChapterLog } from "@/app/ui/levels/chapter-store"



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
  
  
  const registerLogs = () => {
    const logs: ChapterLog = {
      chapterId: chapter.completeObject.id,
      // logs: chapter.logs,
      logs: [{correct:false, correctOption:'asdf',levelId:'asdfjalsdjf',selected:'asdfd'},{correct:true, correctOption:'asdf',levelId:'asdfjalsdjf',selected:'asdfd'},{correct:false, correctOption:'asdf',levelId:'asdfjalsdjf',selected:'asdfd'}]
      // errorCount: chapter.logs.filter(l => !l.correct).length
    }
    
    const form = new FormData()
    form.append('logs', JSON.stringify(logs))
    
    fetch('/api/log', {
      method: 'POST',
      body: form
    })
  
  }

  if (chapter.finish) {
    registerLogs()
    return <SuccessSreen/>
  }
  
  if (chapter.heart <= 0) {
    registerLogs()
    return <FailScreen />
  }
  
  if (chapter.isReady) return (
    <div className="flex flex-col max-w-3xl justify-between m-auto h-svh bg-white">
      <LevelNav />
      <button onClick={()=>chapter.complete()}>Complete</button>
      {
        // Complete level
        chapter.current.type === "complete" && <CompleteLevel/>
      }
      {
        // Audio and Questions
        chapter.current.type === "audio-and-questions" && <QuestionsAndAudioLevel />
      }
      {chapter.current.type === "complete-with-audio" && <CompleteWithAudio/>
      }
    </div>)
}

export default Client