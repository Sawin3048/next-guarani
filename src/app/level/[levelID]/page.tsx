import { notFound } from "next/navigation"
import Level from "@/app/ui/levels/level";
import { ILevel } from "@/app/ui/levels/types";
import { auth } from "@/auth";
import Link from "next/link";
import Close from "@/app/ui/svg/close";
import ProgressBar from "@/app/ui/levels/progress-bar";
import Hearts from "@/app/ui/levels/heart";
import { SessionProvider, useSession } from "next-auth/react";
import { useStore } from "@/app/ui/levels/chapter-controller";
import Client from "./client";


const level = {
  "type": "complete",
  "data":{
    "imageSrc": "/niña-comiendo.png",
    "words": [
      {
      "type": "space"
      },
      {
        "type": "word", "word": "akaru."
      }
    ],
    "options": ["Che", "Nde", "Ha'e", "Ore"],
    "correctOption": "Che",
  },
  "id": "kalsdjflsdñfkasdjfñ"
} satisfies ILevel


export default function Page({ params }: any) {
  
  if (params.levelID !== '1') return notFound()
  
  return <Client/>
}
