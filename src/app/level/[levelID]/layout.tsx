"use client";

import Link from "next/link";
import React from "react";
import Close from "@/app/ui/svg/close";
import Heart from "@/app/ui/svg/heart";
import ProgressBar from "@/app/ui/levels/progress-bar";
import { useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState("0");
  const handelRange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setProgress(evt.target.value);
  };

  return (
    <main className="flex items-center flex-col">
      <div className="max-w-3xl w-full border flex p-3 gap-3 justify-between rounded-2xl items-center">
        <Link className="text-gray-400" href={"/level"}>
          <Close />
        </Link>
        <ProgressBar percentage={`${progress}%`} />
        <div className="text-red-500 flex">
          <Heart />
          <Heart />
          <Heart />
        </div>
      </div>
      <input
        type="range"
        min="0"
        max="100"
        className="my-10"
        onChange={handelRange}
      />
      {children}
    </main>
  );
}
