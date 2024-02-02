"use client"
import { Actions, useStore,State, Chapter } from "@/app/ui/levels/chapter-store";
import { createContext, useContext, useEffect } from "react";

const placeholder = {} as State & Actions

const ChapterContext = createContext<State & Actions>(placeholder)

export function useChapter() {
  return useContext(ChapterContext)
}


interface P {
  children: React.ReactNode
  chapterID?: string
  chapter: Chapter
}
export default function ChapterProvider({children, chapterID,chapter }:P ) {
  const store = useStore()
  useEffect(() => {
    store.init(chapter)
  }, [])
  return (
    <ChapterContext.Provider value={store}>{
    children
  }</ChapterContext.Provider>
  )
}
