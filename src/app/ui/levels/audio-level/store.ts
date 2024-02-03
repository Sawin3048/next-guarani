import { create } from "zustand"
import { QuestionAndAudioLevel } from "../types"

export interface State {
  playing: boolean,
  level: QuestionAndAudioLevel
  isReady: boolean
  isCorrect: boolean | null

}

export interface Actions {
  setIsCorrect: (correct: boolean) => void
  setLevel: (level: QuestionAndAudioLevel) => void

  reset: () => void

}

// Store
export const useQuestionAndAudioStore = create<State & Actions>((set) =>
({
  isReady: false,
  isCorrect: null,
  playing: true,
  level: {} as QuestionAndAudioLevel,

  setIsCorrect: (correct) => set(state => {
    return {
      isCorrect: correct,
      playing: false
    }
  }),
  setLevel: level => set(state => {
    return {
      level: level,
      isReady: true
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

}))