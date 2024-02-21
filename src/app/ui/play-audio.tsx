"use client"
import clsx from 'clsx'
import Play from './svg/play'
import { useEffect, useRef, useState } from 'react'


interface Params{
  className?: string
  src: string
}

function PlayAudio({ className, src }: Params) {
  const [playing,set] = useState(false)
  const sound = useRef<HTMLAudioElement | undefined>(undefined)
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      sound.current = new Audio(src);
    }
  }, [src]);

  if (playing) {
    setTimeout(()=> set(false),(sound.current?.duration || 0) * 1000)
    sound.current?.play()
  }
  
  return (
    <button className={clsx({
        "opacity-20": playing
      })} onClick={()=>set(s=>!s)}>
        <Play className={className} />
    </button>
  )
}

export default PlayAudio