import { notFound } from "next/navigation"
import Level from "@/app/ui/levels/level";
import { ILevel } from "@/app/ui/levels/types";
import { auth } from "@/auth";
import Link from "next/link";
import Close from "@/app/ui/svg/close";
import ProgressBar from "@/app/ui/levels/progress-bar";
import Hearts from "@/app/ui/levels/heart";
import { useSession } from "next-auth/react";


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

export default async function Page({params}:any) {
  if (params.levelID !== '1') return notFound()
  
  return <>
    <main className="flex items-center flex-col max-w-3xl m-auto max-h-dvh">
      <div className="max-w-3xl w-full border rounded-t-none md:rounded-t-2xl flex p-3 gap-4 justify-between rounded-2xl items-center bg-white">
        <Link className="text-gray-400" href={"/level"}>
          <Close />
        </Link>
        <ProgressBar percentage={`50%`} />
        <Hearts num={1}/>
      </div>
      <h1>Hola:{JSON.stringify((await auth())?.user )} </h1>
    <Level toRender={level} />
      <input type="range" min={"0"} max={"100"} />
    </main>
  </>
  
}
