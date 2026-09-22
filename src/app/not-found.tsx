import Link from "next/link";
export default function NotFound() {
  return (
    <main className="not-found dark">
      <p className="eyebrow">Cole Odontologia · 404</p>
      <h1>Esta página não foi encontrada.</h1>
      <Link href="/" className="button">
        Voltar ao início
      </Link>
    </main>
  );
}
