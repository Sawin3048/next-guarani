import { create } from "zustand"
import { ILevel } from "../types"

export interface State {
  playing: boolean,
  selectedWords: string[]
  isCorrect: boolean | null
  level: ILevel
}

export interface Actions {
  setIsCorrect: (correct: boolean) => void
  addWord: (word: string) => void
  removeWord: (word: string) => void
  reset: () => void
  setLevel: (level: ILevel) => void
}
// Store
export const useCompleteLevelStore = create<State & Actions>((set) =>
({
  playing: true,
  selectedWords: [],
  isCorrect: null,
  level: {} as ILevel,
  setIsCorrect: (correct) => set(state => {

    return {
      isCorrect: correct,
      playing: false
    }
  }),
  addWord: (word) => set(state => {

    return {
      selectedWords: [...state.selectedWords, word]
    }
  }),

  removeWord: (word) => set(state => {

    return {
      selectedWords: state.selectedWords.filter(w => w !== word)
    }
  }),
  reset: () => set(() => {

    return {
      playing: true,
      isCorrect: null,
      selectedWords: [],
    }
  }),
  setLevel: level => set(state => {
    return { level: level }
  })

}))