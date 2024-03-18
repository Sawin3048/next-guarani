import { auth } from "@/auth";
import { nanoid } from "nanoid";
import { NextRequest } from "next/server";
import { z } from "zod";

const logShema = z.object({
  levelId: z.string().min(4),
  selected: z.string().min(2),
  correct: z.boolean(),
  correctOption: z.string().min(2)
})

const shema = z.object({
  chapterId: z.string().min(4),
  logs: z.array(logShema)
})

export async function POST(req: NextRequest) {
  const authInfo = await auth()
  const userId = authInfo?.user?.name
  const data = await req.formData()
  const rowLogs = data.get('logs')
  console.log({ rowLogs })
  if (rowLogs === null) return new Response('Needs a logs entrie')
  let logs

  if (!userId) return new Response('Not user')
  try {
    console.log({ rowLogs })
    logs = shema.parse(JSON.parse(rowLogs.toString()))
  } catch (error) {
    console.log('Not valid log. Catch error')
    console.error(error)
    return new Response('Not valid logs')
  }

  const forDBData = {
    id: nanoid(),
    chapterId: logs.chapterId,
    authorId: userId,
    date: new Date().toISOString(),
    error: logs.logs.filter(l => !l.correct).length,
    logs: logs.logs,
  }

  await prisma?.try.create({
    data: forDBData
  })

  return new Response()
}