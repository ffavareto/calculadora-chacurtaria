export function italianSalamiCalculations(quantidadeDeCarne) {
  return {
    gordura: Math.round(quantidadeDeCarne * (0.15 * 1000)).toFixed(2),
    sal: Math.round(quantidadeDeCarne * (0.024 * 1000)).toFixed(2),
    salDeCura: Math.round(quantidadeDeCarne * (0.003 * 1000)).toFixed(2),
    pimentaDoReino: Math.round(quantidadeDeCarne * (0.003 * 1000)).toFixed(2),
    alhoTriturado: Math.round(quantidadeDeCarne * (0.015 * 1000)).toFixed(2),
    vinhoSeco: Math.round(quantidadeDeCarne * (0.045 * 1000)).toFixed(2),
  };
}
