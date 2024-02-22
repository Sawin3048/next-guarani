import { Chapter } from "@/app/ui/levels/chapter-store"
import { auth } from "@/auth"
import { NextRequest } from "next/server"
import { conjugar } from "./level1"
import { preguntas } from "./preguntas"
import { level3 } from "./level3"
import { level4 } from "./level4"
import { level5 } from "./level5"

const chapters: Chapter[] = [
  conjugar,
  preguntas,
  level3,
  level4,
  level5
]

export async function GET(req: NextRequest) {
  const a = await auth()
  console.log('peticion a GET', a)
  console.log(req.url)
  const id = req.url.split("/").pop()


  const chapter = chapters.find(chapter => chapter.id === id)
  console.log({ id, chapter })
  if (!!chapter) return Response.json(chapter)
  else throw new Error('Ese nivel no existe')
}