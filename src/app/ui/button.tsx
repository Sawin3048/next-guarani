import clsx from "clsx";
import React from "react";

interface Params {
  active: boolean
  onclick?: () => void
  children: React.ReactNode
  className?:string
}

export function Button({active, onclick, children, className}:Params) {
  return (
    <button className={clsx(`py-3 px-4 text-base font-bold rounded-xl border-2 border-b-4 shadow transform  active:scale-105 transition-colors duration-500`, {
      "text-white": active,
      "border-emerald-700": active,
      "bg-emerald-700": active,
      "hover:bg-emerald-700": active,
      "border-neutral-400": !active,
      "text-neutral-400": !active,
      "active:transform-none": !active,  
    },className) } onClick={onclick} disabled={!active}>
      {children}
    </button>
  );
}