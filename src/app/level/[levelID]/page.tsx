import { notFound } from "next/navigation"



export default function Page({params}:any) {
  
  if (params.levelID !== '1') return notFound()
  
  return <h1 className="text-7xl border h-96">Este seria el nivel uno</h1>
}