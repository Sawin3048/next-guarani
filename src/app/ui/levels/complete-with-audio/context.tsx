import { useChapter } from '@/app/level/[levelID]/context/chapter-handler-context'
import { Actions, State, useCompleteWithAudioStore } from '@/app/ui/levels/complete-with-audio/store'
import { ReactNode, createContext, useContext, useEffect } from 'react'

const placeholder = {} as State & Actions

export const CompleteWithAudioContext = createContext<State & Actions>(placeholder)

export function useCompleteWithAudio() {
  return useContext(CompleteWithAudioContext)
}

export function CompleteWithAudioProvider({ children }: { children: ReactNode }) {
  const store = useCompleteWithAudioStore()
  const chapter = useChapter()
  
  useEffect(() => {
    if (chapter.current.type === 'complete-with-audio') {

      const spaceAmount = chapter.current.data.words.filter(w => w.type === 'space').length 
      
      store.setLevel(chapter.current)
      store.setSpacesAmount(spaceAmount)
    }
  }, [chapter.current.id])
  
  return (<CompleteWithAudioContext.Provider value={store}>
    {children}
  </CompleteWithAudioContext.Provider>)
}
