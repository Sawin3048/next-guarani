import { notFound } from "next/navigation"
import Level, { ILevel } from "@/app/ui/levels/level";
import { cookies } from "next/headers";


const level = {
  "type": "complete",
  "data":{
    "imageSrc": "/niña-comiendo.png",
    "words": [{
      "type": "space"
    },{"type":"word","word":"akaru."}],
    "options": ["Che", "Nde", "Ha'e", "Ore"],
    "correctOption": "Che"
  }
} satisfies ILevel

export default function Page({params}:any) {
  
  if (params.levelID !== '1') return notFound()
  
  return <>
    <h1>Hola:{cookies().get("username")?.value} </h1>
    <Level toRender={level} />
  </>
}