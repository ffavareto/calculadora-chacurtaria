"use client";
import { useState } from "react";
import Title from "../components/title";
import SubTitle from "../components/subtitle";
import { italianSalamiCalculations } from "../utils/calculations";

export default function SalameItaliano() {
  const [quantidadeDeCarne, setQuantidadeDeCarne] = useState("");
  const [resultados, setResultados] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const quantidade = Number(quantidadeDeCarne);

    if (quantidade > 0) {
      const results = italianSalamiCalculations(quantidade);
      setResultados(results);
      return;
    }
    setResultados(null);
  };

  return (
    <div>
      <Title>Salame Italiano</Title>

      <form onSubmit={handleSubmit} className="flex gap-2 flex-col">
        <label htmlFor="quantidadeDeCarne">
          Quanto de carne foi usado? (kg)
        </label>
        <div className="flex gap-2 items-center">
          <input
            id="quantidadeDeCarne"
            className="border rounded p-2 w-full"
            type="number"
            required
            min="0"
            step="any"
            value={quantidadeDeCarne}
            onChange={(e) => setQuantidadeDeCarne(e.target.value)}
          />
          <button type="submit" className="bg-pink-800 text-white p-2 rounded">
            Calcular
          </button>
        </div>
      </form>

      {resultados && (
        <div className="mt-4">
          <SubTitle>Resultados:</SubTitle>
          <p>Quantidade de gordura: {resultados.gordura}g</p>
          <p>Quantidade de sal: {resultados.sal}g</p>
          <p>Quantidade de sal de cura: {resultados.salDeCura}g</p>
          <p>Quantidade de pimenta do reino: {resultados.pimentaDoReino}g</p>
          <p>Quantidade de alho triturado: {resultados.alhoTriturado}g</p>
          <p>Quantidade de vinho seco: {resultados.vinhoSeco}g</p>
        </div>
      )}
    </div>
  );
}
