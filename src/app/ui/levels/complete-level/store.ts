import { create } from "zustand"
import { CompleteLevel } from "../types"

export interface State {
  playing: boolean,
  selectedWords: string[]
  isCorrect: boolean | null
  level: CompleteLevel
  canAddWord: boolean,
  amountSpaces: number
  isReady: boolean
}

export interface Actions {
  setIsCorrect: (correct: boolean) => void
  addWord: (word: string) => void
  removeWord: (word: string) => void
  reset: () => void
  setLevel: (level: CompleteLevel) => void
  setSpacesAmount: (amount: number) => void
}
// Store
export const useCompleteLevelStore = create<State & Actions>((set) =>
({
  playing: true,
  selectedWords: [],
  isCorrect: null,
  level: {} as CompleteLevel,
  canAddWord: true,
  amountSpaces: 0,
  isReady: false,
  setIsCorrect: (correct) => set(state => {
    return {
      isCorrect: correct,
      playing: false
    }
  }),
  addWord: (word) => set(state => {
    if (!state.canAddWord) return {}

    const selectedWords = [...state.selectedWords, word]
    const amountSpaces = state.amountSpaces - state.selectedWords.length
    const canAddWord = !(state.amountSpaces - selectedWords.length === 0)
    const canAddWordNow = !(amountSpaces <= 0)

    console.log({ selectedWords: state.selectedWords.length, amountSpaces: state.amountSpaces, canAddWord, canAddWordNow, amountSpaces2: amountSpaces })

    if (!canAddWordNow) return {}
    return {
      selectedWords,
      canAddWord
    }
  }),

  removeWord: (word) => set(state => {

    return {
      selectedWords: state.selectedWords.filter(w => w !== word),
      canAddWord: true
    }
  }),
  reset: () => set(() => {

    return {
      playing: true,
      isCorrect: null,
      selectedWords: [],
      canAddWord: true
    }
  }),
  setLevel: level => set(state => {
    return {
      level: level,
      isReady: true
    }
  }),
  setSpacesAmount: amount => set(state => ({ amountSpaces: amount }))

}))