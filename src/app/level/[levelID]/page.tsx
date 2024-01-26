import { notFound } from "next/navigation"
import Client from "./client/client";
import ChapterProvider from "./context/chapter-handler-context";

export default async function Page({ params }: any) {
  if (params.levelID !== '1') return notFound()

  return <ChapterProvider>
    <Client/>
  </ChapterProvider>
}
