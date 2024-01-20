import Link from "next/link";

export default function Home() {
  return (
    <main className="text-6xl">
      Aprende Guaraní
      <br />
      <Link className="border-4 m-5" href={ '/level'}>Intentar</Link>
    </main>
  );
}
