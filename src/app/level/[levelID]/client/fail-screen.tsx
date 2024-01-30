import Image from "next/image"
import Link from "next/link"
import { ButtonLink } from "@/app/ui/buttond"
import { useChapter } from "../context/chapter-handler-context"

function FailScreen() {
  const chapter = useChapter()
  chapter.failChapterAudio.play()

  return <>
  <audio src="/derrota.mp3" autoPlay hidden></audio>
  <main className="flex justify-around items-center  flex-col m-auto bg-white max-w-3xl h-dvh">
    <div className="font-bold text-5xl text-center text-pink-600">
    <h2 className="">¡No que mal!</h2> 
    <h3 className=" text-3xl text-balance">Te quedaste sin corazones</h3>
    </div>
    <div className="flex justify-around w-full overflow-hidden">
      <Image src={'/niño-triste.png'} alt="" width={180} height={180}></Image>
      <Image src={'/niña-triste.png'} alt="" width={180} height={180}></Image>
    </div>
    <div className="flex w-full justify-around mt-24">
      <Link href={'/level'}>
      <ButtonLink color="pink" className="bg-pink-600 w-fit text-white ">Volver al Inicio</ButtonLink>
      </Link>
    <ButtonLink callback={()=>chapter.init(chapter.completeObject)}  color="emerald" className="bg-emerald-600 w-fit text-white ">Intentar de nuevo</ButtonLink>
    </div>
  
  </main>
</>
}

export default FailScreen