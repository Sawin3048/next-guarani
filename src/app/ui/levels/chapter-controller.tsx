import { ILevel } from "./types";
import { create } from 'zustand'

export interface State{
  levels: ILevel[]
  currentID: string
  completed: string[]
  failed: string[]
  amount: number
  toPlay: string[]
  finish: boolean
  heart: number
  current: ILevel
  progressUI: number,
  heartUI: number,
  isReady: boolean
}

export interface Actions {
  init: (levels: ILevel[]) => void
  complete: () => void
  fail: () => void
  updateUI: (guess:boolean)=> void
}

export const useStore = create<State & Actions>((set) =>
({
  // Init Level
  isReady:false,
  // Level state
  levels: [],
  amount: 0,
  toPlay: [],
  failed: [],
  completed: [],
  currentID: '',
  finish: false,
  current: {} as ILevel,
  heart: 3,
  // UI state
  heartUI: 3,
  progressUI: 0,
  
  init: (levels: ILevel[]) => set(() => {
    const currentID = levels[0].id
    const current = levels.find(l => l.id === currentID) as ILevel
    
    return {
      isReady: true,
      levels, 
      amount: levels.length,
      toPlay: levels.map(l => l.id),
      currentID,
      finish: false,
      played: [],
      failed: [],
      completed: [],
      current,
      heart: 3,
      progressUI: 0,
      heartUI:3
    }
  }),

  complete: () => set(state => {

    let finish = !state.toPlay[1]
    let toPlay = [...state.toPlay.filter(id => !(id === state.currentID))]
    let failed = state.failed
    if (finish && failed.length > 0) {
      finish = false
      toPlay.push(...state.failed)
      failed = []
      
    }
    const currentID = toPlay[0] || ''
    const current = state.levels.find(l => l.id === currentID) as ILevel
    return {
      completed: [...state.completed, state.currentID],
      toPlay,
      currentID,
      finish,
      failed,
      current
    }
  }),

  fail: () => (set(state => {
    let finish = !state.toPlay[1]
    let toPlay = [...state.toPlay.filter(id => !(id === state.currentID))]
    let failed = [...state.failed, state.currentID]
    let heart = state.heart - 1
    if (finish && failed.length > 0) {
      finish = false
      toPlay.push(...failed)
      failed = []
    }
    const currentID = toPlay[0] || ''
    const current = state.levels.find(l => l.id === currentID) as ILevel
    return {
      failed,
      toPlay,
      currentID,
      finish,
      heart,
      current
    }
  })),
  
  updateUI: (guess: boolean) => (set((state)=>{
    if (guess) return { progressUI: state.progressUI + 1 }
    return {heartUI: state.heartUI - 1}
  })),

}))




