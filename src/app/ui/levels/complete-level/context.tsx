import { useChapter } from '@/app/level/[levelID]/context/chapter-handler-context'
import { Actions, State, useCompleteLevelStore } from '@/app/ui/levels/complete-level/store'
import { ReactNode, createContext, useContext, useEffect } from 'react'

const placeholder = {} as State & Actions

export const CompleteLevelContext = createContext<State & Actions>(placeholder)

export function useCompleteLevel() {
  return useContext(CompleteLevelContext)
}

export function CompleteLevelProvider({ children }: { children: ReactNode }) {
  const store = useCompleteLevelStore()
  const chapter = useChapter()
  
  useEffect(() => {
    const spaceAmount = chapter.current.data.words.filter(w => w.type === 'space').length
    
    store.setLevel(chapter.current)
    store.setSpacesAmount(spaceAmount)
  }, [chapter.current.id])
  
  return (<CompleteLevelContext.Provider value={store}>
    {children}
  </CompleteLevelContext.Provider>)
}
