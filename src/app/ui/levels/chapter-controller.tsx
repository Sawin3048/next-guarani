import { ILevel } from "./types";

import { create } from 'zustand'

interface State{
  levels: ILevel[]
  current: string
  completed: string[]
  failed: string[]
  amount: number
  toPlay: string[]
  finish: boolean,
  heart: number
}

interface Actions {
  init: (levels: ILevel[]) => void
  complete: () => void
  fail: () => void

}

export const useStore = create<State & Actions>((set) =>
({
  levels: [],
  amount: 0,
  toPlay: [],
  failed: [],
  completed: [],
  current: '',
  finish: false,
  heart: 3,
  init: (levels:ILevel[]) => set(() => {
    return {
      levels,
      amount: levels.length,
      toPlay: levels.map(l => l.id),
      current: levels[0].id,
      finish: false,
      played: [],
      failed: [],
      completed: [],
      heart: 3
    }
  }),
  complete: () => set(state => {

    let finish = !state.toPlay[1]
    let toPlay = [...state.toPlay.filter(id => !(id === state.current))]
    let failed = state.failed 
    
    if (finish && failed.length > 0) {
        finish = false
        toPlay.push(...state.failed)
        failed = []
      
    }

    const current = toPlay[0] || ''
    return {
      completed: [...state.completed, state.current],
      toPlay,
      current,
      finish,
      failed
    }
  }),
  fail: () => (set(state => {
    let finish = !state.toPlay[1]
    let toPlay = [...state.toPlay.filter(id => !(id === state.current))]
    let failed = [...state.failed, state.current]
    let heart = state.heart - 1
    if (finish && failed.length > 0) {
      finish = false
      toPlay.push(...failed)
      failed = []
    }
    const current = toPlay[0] || ''
    return {
      failed,
      toPlay,
      current,
      finish,
      heart
    }
  }))
}))


class Chapter{
  levelErros: any[] = []
  levels: ILevel[] =[]
  state = {}

  constructor(levels: ILevel[]) {
    this.levels = levels
  }
}

