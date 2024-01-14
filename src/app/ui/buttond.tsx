import clsx from "clsx";
import React from "react";

type color = "emerald" | "pink" | "teal" | "purple" | "gray";
interface Params {
  children: React.ReactNode;
  className?: string;
  color?: color;
  callback?: () => void;
}
// Clases
//  mt-5
export function ButtonLink({ children, className, color, callback }: Params) {
  color = color || "gray";
  return (
    <button
      className={clsx(
        `${className} py-3 px-4 text-base font-bold rounded-xl border-2 border-b-4 border-${color}-500 shadow hover:bg-${color}-700 transform transition-transform active:scale-105`,
        {
          "border-emerald-500": color === "emerald",
          "hover:bg-emerald-700": color === "emerald",
          "border-pink-500": color === "pink",
          "hover:bg-pink-700": color === "pink",
          "border-teal-500": color === "teal",
          "hover:bg-teal-700": color === "teal",
          "border-purple-500": color === "purple",
          "hover:bg-purple-700": color === "purple",
          "border-neutral-400": color === "gray",
          "hover:bg-gray-700": color === "gray",
        }
      )}
      onClick={callback}
    >
      {children}
    </button>
  );
}
