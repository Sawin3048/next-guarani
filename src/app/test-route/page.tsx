"use client"

import { useAudioRecorder } from "../utils/context"
import { ButtonLink } from "../ui/buttond"
import {  useEffect, useState } from "react"
import { downloadByBlob } from "../utils/downloader"
import { sendAudio } from "../utils/upload-audio"

function Page() {
  const [recording, setRecording] = useState(false)
  const [stopRecord , setStopRecord] = useState(false)
  const [audio, setAudio] = useState<null | Blob>(null)  
  const audioRecorder = useAudioRecorder()
  const [text, setText] = useState('')
  if (recording) audioRecorder.start()
  
  useEffect(() => { 
    if(audio !== null) downloadByBlob(audio,'algo.mp3')
  }, [stopRecord])
  
  useEffect(() => { 
    audio && sendAudio(audio).then(r=>setText(r))
  },[audio])
  
  if (stopRecord) audioRecorder.stop().then(r => setAudio(r))
  
  return (<>
    {audio !== null && <audio controls src={URL.createObjectURL(audio)}></audio>}
    <ButtonLink callback={() => setRecording(s => !s)}>
      {!recording ? 'Grabar' : 'Parar'}
    </ ButtonLink >    
    { <p>{JSON.stringify(text) }</p>}
  </>
  )
}

export default Page