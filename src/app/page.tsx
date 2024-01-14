import Link from "next/link";

export default function Home() {
  return (
    <main className="text-6xl">
      Aprende Guaraní
      <br />
      <Link href={ '/level'}>Intentar</Link>
    </main>
  );
}
