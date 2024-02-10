import { ReactNode, createContext, useContext, useEffect } from 'react'
import { RecordAudio } from './audio-recorder'

export const AudioRecorderContext = createContext(new RecordAudio())

export function useAudioRecorder() {
  return useContext(AudioRecorderContext)
}

// export function CompleteLevelProvider({ children }: { children: ReactNode }) {
//   return (<CompleteLevelContext.Provider value={store}>
//     {children}
//   </CompleteLevelContext.Provider>)
// }
