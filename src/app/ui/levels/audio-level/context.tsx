import { useChapter } from '@/app/level/[levelID]/context/chapter-handler-context'
import { Actions, State } from '@/app/ui/levels/audio-level/store'
import { ReactNode, createContext, useContext, useEffect } from 'react'
import { useAudioLevelStore } from './store'

const placeholder = {} as State & Actions

export const CompleteWithAudioContext = createContext<State & Actions>(placeholder)

export function useCompleteWithAudio() {
  return useContext(CompleteWithAudioContext)
}

export function CompleteWithAudioProvider({ children }: { children: ReactNode }) {
  const store = useAudioLevelStore()
  const chapter = useChapter()
  
  useEffect(() => {
    console.log('context')
    if (chapter.current.type === 'audio-and-questions') {
      console.log(chapter.current)
      store.setLevel(chapter.current)
    }
  }, [chapter.current.id])
  
  return (<CompleteWithAudioContext.Provider value={store}>
    {children}
  </CompleteWithAudioContext.Provider>)
}
