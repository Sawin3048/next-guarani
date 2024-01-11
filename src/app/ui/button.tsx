import React from "react";

interface Params {  
  children: React.ReactNode;
  className?: string
  color?: string
}
// Clases
//  mt-5
export function ButtonD({ children, className, color }: Params) {
  color = color || 'gray'
  return (
    <button className={`${className} py-3 px-4 text-base font-bold rounded-xl border-2 border-b-4 border-${color}-500 shadow hover:bg-${color}-700 transform transition-transform active:scale-105`}>
      {children}
    </button>
  );
}
