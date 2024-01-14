"use client";

import Link from "next/link";
import React from "react";
import Close from "@/app/ui/svg/close";
import ProgressBar from "@/app/ui/levels/progress-bar";
import { useState } from "react";
import Hearts from "@/app/ui/levels/heart";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState("0");
  const handelRange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setProgress(evt.target.value);
  };

  return (
    <main className="flex items-center flex-col max-w-3xl m-auto max-h-dvh">
      <div className="max-w-3xl w-full border rounded-t-none md:rounded-t-2xl flex p-3 gap-4 justify-between rounded-2xl items-center bg-white">
        <Link className="text-gray-400" href={"/level"}>
          <Close />
        </Link>
        <ProgressBar percentage={`${progress}%`} />
        <Hearts num={1}/>
      </div>
      
      <input type="range" onChange={handelRange} min={"0"} max={"100"} />
      {children}
    </main>
  );
}
