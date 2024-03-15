import { useChapter } from "@/app/level/[levelID]/context/chapter-handler-context";
import { useCompleteWithAudio } from "./context";
import { Log } from "../chapter-store";

export function MakeLog(correct: boolean) {
  const levelStore = useCompleteWithAudio()
  const chapterStore = useChapter()

  const log: Log = {
    correct: correct,
    levelId: chapterStore.currentID,
    selected: levelStore.selectedWords[0],
    correctOption: chapterStore.current.data.correctOption[0]
  }

  chapterStore.addLog(log)
}