import { Chapter } from "@/app/ui/levels/chapter-store"
import { auth } from "@/auth"
import { NextRequest } from "next/server"
import { conjugar } from "./level1"
import { preguntas } from "./preguntas"
import { level3 } from "./level3"

const chapters: Chapter[] = [
  conjugar,
  preguntas,
  level3,
  {
    id: 'fx1GsK8Jmk4rC6dgw53BM',
    nextChapterId: 'JutTOC_DYbvJoFrt3Cr62',
    levels: []
  },
  {
    id: 'JutTOC_DYbvJoFrt3Cr62',
    nextChapterId: 'chapter4',
    levels: []
  },
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