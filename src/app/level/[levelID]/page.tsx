import { notFound } from "next/navigation"
import Level from "@/app/ui/levels/level";

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
};

export default function Page({params}:any) {
  
  if (params.levelID !== '1') return notFound()
  
  return <Level toRender={level}/>
}