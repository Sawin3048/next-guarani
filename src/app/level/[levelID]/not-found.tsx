import Link from "next/link"

export default function NotFound() {
  return <>
  <h1 className="text-7xl">El nivel que estas buscando no existe</h1>
  <Link href={'/level'} className="size-32 text-5xl border-neutral-950 border">Volver al Inicio</Link>
  </>
}