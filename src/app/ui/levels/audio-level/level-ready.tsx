import { CompleteWithAudioProvider, useCompleteWithAudio } from "./context"
import Level from "./level"
import { LevelMessage } from "./message"

function LevelReady() {
  const store = useCompleteWithAudio()
  console.log(store.level)
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


export function QuestionsAndAudioLevel() {
  return <CompleteWithAudioProvider>
    <LevelReady/>
  </CompleteWithAudioProvider>
}