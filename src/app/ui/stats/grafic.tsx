"use client"

import { useRef } from "react";
import { Logs } from "./list";
import { init } from "echarts";

interface Params {
  logs: Logs[]
}
function formatDate(date: Date): string {
  // Obtener el año, el mes y el día del objeto Date
  const año: number = date.getFullYear();
  let mes: number | string = date.getMonth() + 1; // Se suma 1 porque los meses van de 0 a 11
  let dia: number | string = date.getDate();

  // Asegurarse de que el mes y el día tengan dos dígitos
  if (mes < 10) {
      mes = '0' + mes;
  }
  if (dia < 10) {
      dia = '0' + dia;
  }

  // Construir la cadena en formato "yyyy-mm-dd" y retornarla
  return `${año}-${mes}-${dia}`;
}

export function Grafic({ logs }: Params) {
  const conteiner = useRef<HTMLDivElement>({} as HTMLDivElement)  

  let exected = false
  
  setTimeout(() => {
    if (exected) return

    const grafic = init(conteiner.current)
    
      const data = logs.map(l => {
      // const time = l.date.getTime()
      const length = l.logs.length
      const erros = l.error
      const valueForOne = 100 / length
      const value = valueForOne * (length - erros)
      return Math.round(value)
      }).slice(-7)
      const option = {
        title: {
          text: ''
        },
        tooltip: {},
        xAxis: {
          data: []
        },
        yAxis: {},
        series: [
          {
            name: 'Porcentaje',
            type: 'bar',
            data: data
          }
        ]
      };
    grafic.setOption(option)
    exected = true  
  }, 2000)
  return (
    <div ref={conteiner} className="max-w-[600px] w-full aspect-[3/2] m-auto"></div>
  )
}