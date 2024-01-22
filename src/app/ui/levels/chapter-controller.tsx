import { ILevel } from "./types";

import { StateCreator, create } from 'zustand'

interface State{
  levels: ILevel[]
  current: string
  passed: string[]
  failed: string[]
  amount: number
  toPlay: string[]
  played: string[]
}

interface Actions {

}

const useStore = create<State>((set) =>
({
  levels: [],
  amount: 0,
  toPlay: [],
  played:[],
  failed: [],
  passed: [],
  current: '',
  finish: false,
  complete: () => set((state) => {
    return {
      passed: [...state.passed, state.current],
      toPlay: [...state.toPlay.filter(id => !(id === id))],
      current: [state.toPlay[1]]
    }
  
  })
}))


class Chapter{
  levelErros: any[] = []
  levels: ILevel[] =[]
  state = {}

  constructor(levels: ILevel[]) {
    this.levels = levels
  }
}

