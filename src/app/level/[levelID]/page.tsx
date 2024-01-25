import { notFound } from "next/navigation"
import Client from "./client/client";
import ChapterProvider from "./context/chapter-handler-context";
import { ReactNode } from "react";


function Wapper({ children }: { children: ReactNode }) {
  return <ChapterProvider>{children}</ChapterProvider>
}

export default async function Page({ params }: any) {
  
  if (params.levelID !== '1') return notFound()

  return <Wapper>
    <Client/>
  </Wapper>
}
