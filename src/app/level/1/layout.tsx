import React from "react";

export default function Layout({children}:{children: React.ReactNode}){
  return <main className="flex items-center flex-col">
    <progress></progress>
    <div className="max-w-3xl w-full border  flex p-3 gap-3 justify-between rounded-2xl">
      <span>X</span>
      <div className="w-8/12 border border-red-600 rounded-2xl"></div>
      <div>❤️❤️❤️</div>
    </div>
    {children}
  </main>
}