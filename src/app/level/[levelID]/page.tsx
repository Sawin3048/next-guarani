"use server"
import { notFound } from "next/navigation"
import Client from "./client";





export default async function Page({ params }: any) {
  
  if (params.levelID !== '1') return notFound()
  const a = async () => {
    "use server"
    console.log("desde el cliente")
  }
  return <Client  />
}
