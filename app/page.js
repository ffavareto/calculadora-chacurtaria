import Link from "next/link";
import Title from "./components/title";

export default function Home() {
  return (
    <div>
      <Title>Calculadora para receitas de salame</Title>

      <div>
        <p>Escolha uma receita:</p>

        <ul>
          <li>
            <Link href="salame-italiano" className="underline">
              Salame Italiano
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
