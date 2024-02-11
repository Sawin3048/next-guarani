import { create } from "zustand"
import { CompleteWithAudio } from "../types"

export interface State {
  playing: boolean,
  selectedWords: string[]
  isCorrect: boolean | null
  level: CompleteWithAudio
  canAddWord: boolean,
  amountSpaces: number
  isReady: boolean
  audios: { [name: string]: HTMLAudioElement }
  recording: boolean
  transcripting: boolean
}

export interface Actions {
  setIsCorrect: (correct: boolean) => void
  addWord: (word: string) => void
  removeWord: (word: string) => void
  reset: () => void
  setLevel: (level: CompleteWithAudio) => void
  setSpacesAmount: (amount: number) => void
  loadAudios: (audios: string[]) => void
  setRecording: (state: boolean) => void
  toggleTranscripting: () => void
}
// Store
export const useCompleteWithAudioStore = create<State & Actions>((set) =>
({
  playing: true,
  selectedWords: [],
  isCorrect: null,
  level: {} as CompleteWithAudio,
  canAddWord: true,
  amountSpaces: 0,
  isReady: false,
  recording: false,
  audios: {},
  transcripting: false,
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

  loadAudios: (audios) => set(state => {
    let audiosElement: any = {}
    audios.forEach(audio => {
      audiosElement[audio] = new Audio(`/public/audio/${audio}.mp3`)
    })

    return {
      audios: audiosElement
    }
  }),

  setLevel: level => set(state => {
    const audios = level.data.options.map(o => o.toLowerCase());
    state.loadAudios(audios)

    return {
      level: level,
      isReady: true
    }
  }),
  setSpacesAmount: amount => set(state => ({ amountSpaces: amount })),

  setRecording: (recording) => set(state => ({ recording })),

  toggleTranscripting: () => set(state => ({
    transcripting: !state.transcripting
  }))
}))