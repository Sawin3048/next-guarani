'use server'

import { notFound } from "next/navigation"
import Client from "./client/client";
import ChapterProvider from "./context/chapter-handler-context";

export default async function Page({ params }: any) {
  const req = await fetch(`./api/level/${params.levelID}`, {next:{revalidate:0}})
  
  console.log(req.ok)
  if (req.ok) {
    const chapter = await req.json()

  return <ChapterProvider chapter={chapter}>
    <Client/>
  </ChapterProvider>
  }

  notFound()
}
