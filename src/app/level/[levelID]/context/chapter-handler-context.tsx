"use client"
import { Actions, useStore,State } from "@/app/ui/levels/chapter-controller";
import { createContext, useContext, useEffect } from "react";

const placeholder = {} as State & Actions

const ChapterContext = createContext<State & Actions>(placeholder)

export function useChapter() {
  return useContext(ChapterContext)
}


interface P {
  children: React.ReactNode
  chapterID?: string
}
export default function ChapterProvider({children, chapterID}:P ) {
  const store = useStore()
  useEffect(() => {
    fetch('/api/level').then(r=>r.json()).then(r=>store.init(r))
  }, [])
  return (
    <ChapterContext.Provider value={store}>{
    children
  }</ChapterContext.Provider>
  )
}
