import { notFound } from "next/navigation"
import Client from "./client/client";
import ChapterProvider from "./context/chapter-handler-context";

export default async function Page({ params }: any) {
  // if (params.levelID !== '1') return notFound()
  const req = await fetch(`http://localhost:3000/api/level/${params.levelID}`, {next:{revalidate:0}})
  
  console.log(req.ok)
  if (req.ok) {
    const chapter = await req.json()
  return <ChapterProvider chapter={chapter}>
    <Client/>
  </ChapterProvider>
  }
  notFound()
}
