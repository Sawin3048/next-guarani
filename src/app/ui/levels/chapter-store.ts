import { ILevel } from "./types";
import { create } from 'zustand'

export interface Chapter {
  levels: ILevel[],
  id: string,
  nextChapterId: string
}

export interface ChapterLog {
  chapterId: string,
  logs: Log[]
  // errorCount: number
}

export interface Log {
  levelId: string;
  selected: string;
  correct: boolean;
  correctOption: string;
}

export interface State {
  //Level Logs
  logs: Log[]

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
  isReady: boolean,
  successLevelAudio: HTMLAudioElement,
  failLevelAudio: HTMLAudioElement,
  successChapterAudio: HTMLAudioElement,
  failChapterAudio: HTMLAudioElement,
  completeObject: Chapter
  finishAnimation: boolean
}

export interface Actions {
  init: (chapter: Chapter) => void
  complete: () => void
  fail: () => void
  updateUI: (guess: boolean) => void
  addLog: (log: Log) => void
}

export const useStore = create<State & Actions>((set) =>
({
  completeObject: {} as Chapter,
  // Init Level
  isReady: false,
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
  finishAnimation: false,
  // Const
  successLevelAudio: new Audio('/success.mp3'),
  failLevelAudio: new Audio('/fail.mp3'),
  successChapterAudio: new Audio('/victory.mp3'),
  failChapterAudio: new Audio('/derrota.mp3'),
  //Level Logs
  logs: [],
  init: (chapter) => set((state) => {
    const levels = chapter.levels
    const currentID = levels[0].id
    const current = levels.find(l => l.id === currentID) as ILevel
    state.successLevelAudio.load()
    state.failLevelAudio.load()
    return {
      completeObject: chapter,
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
      heartUI: 3,
      finishAnimation: false
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

  updateUI: (guess: boolean) => (set((state) => {
    if (guess) return { progressUI: state.progressUI + 1 }
    return { heartUI: state.heartUI - 1 }
  })),

  addLog: (log) => (set((state) => {
    return {
      logs: [...state.logs, log]
    }
  }))
}))




