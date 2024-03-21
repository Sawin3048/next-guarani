import { auth } from "@/auth"
import { Log } from "../levels/chapter-store"
import { z } from "zod"
import prisma from "@/db"

export const logShema = z.object({
  levelId: z.string().min(4),
  selected: z.string().min(2),
  correct: z.boolean(),
  correctOption: z.string().min(2)
})

const shema = z.object({
  chapterId: z.string().min(4),
  logs: z.array(logShema)
})

export default async function getLog() {
  const sesion = await auth()
  const userId = sesion?.user?.name

  if (!userId) return []

  let logs = await prisma?.try.findMany({
    where: {
      authorId: userId
    },
    orderBy: {
      date: 'desc'
    }
  })



  if (logs === undefined) return []

  const dbLogs = logs.map(l => {
    const raw = l.logs?.valueOf()
    const logs = z.array(logShema).safeParse(raw)


    return {
      id: l.id,
      error: l.error,
      date: l.date,
      chapterId: l.chapterId,
      logs: logs.success ? raw as Log[] : []
    }
  })

  return dbLogs
}