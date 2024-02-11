import { CompleteLevelProvider, useCompleteLevel } from "./context"
import Level from "./level"
import { LevelMessage } from "./message"

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


export function CompleteLevel() {
  return <CompleteLevelProvider>
    <LevelReady/>
  </CompleteLevelProvider>
}