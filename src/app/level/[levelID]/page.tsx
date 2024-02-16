'use server'

import { notFound } from "next/navigation"
import Client from "./client/client";
import ChapterProvider from "./context/chapter-handler-context";
import { serverURL } from "@/../env";

export default async function Page({ params }: any) {

  const ChapterReq = await fetch(`${serverURL}/api/level/${params.levelID}`, { next: { revalidate: 0 } })
  
  console.log(ChapterReq.ok)
  if (ChapterReq.ok) {
    const chapter = await ChapterReq.json()

  return <ChapterProvider chapter={chapter}>
    <Client/>
  </ChapterProvider>
  }

  notFound()
}
