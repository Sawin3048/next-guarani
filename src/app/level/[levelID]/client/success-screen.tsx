import Image from "next/image"
import { ButtonLink } from "@/app/ui/buttond"
import Link from "next/link"
import { useChapter } from "../context/chapter-handler-context"
import JSConfetti from "js-confetti"
import { useEffect } from "react"

function SuccessSreen() {
  const chapter = useChapter()
  const jsConfetti = new JSConfetti()
  if (chapter.finish) { jsConfetti.addConfetti() }
  chapter.successChapterAudio.play()
  
  return <>
    <main className="flex justify-around items-center  flex-col m-auto bg-white max-w-3xl h-dvh">
      <div className="font-bold text-5xl text-center text-emerald-600">
      <h2 className="">¡Felicidales!</h2> 
      <h3 className=" text-3xl text-balance">Completaste el Capítulo</h3>
      </div>
      <div className="flex justify-around w-full overflow-hidden">
        <Image src={'/niño-festejando.png'} alt="" width={180} height={180}></Image>
        <Image src={'/niña-festejando.png'} alt="" width={180} height={180}></Image>
      </div>
      <div className="flex w-full justify-around mt-24">
        <Link href={'/level'}>
        <ButtonLink    color="pink" className="bg-pink-600 w-fit text-white ">Volver al Inicio</ButtonLink>
        </Link>
      <ButtonLink color="emerald" className="bg-emerald-600 w-fit text-white ">Siguiente Nivel</ButtonLink>
      </div>
    
    </main>
  </>
}

export default SuccessSreen