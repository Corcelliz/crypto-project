import { useState } from "react";
import NavBar from "../../header/navBar";
import "./style.css";

const CryptoTradeCalculator = () => {
  const [initialInvestment, setInitialInvestment] = useState("");
  const [annualReturnRate, setAnnualReturnRate] = useState("");
  const [investmentPeriod, setInvestmentPeriod] = useState("");
  const [totalReturn, setTotalReturn] = useState(0);

  const handleCalculate = () => {
    if (initialInvestment && annualReturnRate && investmentPeriod) {
      const principal = parseFloat(initialInvestment);
      const rate = parseFloat(annualReturnRate) / 100; // Convert percentage to decimal
      const years = parseInt(investmentPeriod);

      const total = principal * Math.pow(1 + rate, years);
      setTotalReturn(total.toFixed(2));
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  };

  return (
    <>
      <NavBar />
      <div className="investing-container">
        <h2 className="title">Simular Retorno de Investimento</h2>
        <div className="invest-container">
          <input
          placeholder="Investimento Inicial (R$)"
            type="number"
            id="initialInvestment"
            value={initialInvestment}
            onChange={(e) => setInitialInvestment(e.target.value)}
          />
        </div>
        <div className="returnTax-container">
          <input
          placeholder="Taxa de Retorno Anual (%)"
            type="text"
            id="annualReturnRate"
            value={annualReturnRate}
            onChange={(e) => setAnnualReturnRate(e.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="Período de Investimento (Anos)"
            type="number"
            id="investmentPeriod"
            value={investmentPeriod}
            onChange={(e) => setInvestmentPeriod(e.target.value)}
          />
        </div>
        <button className="button-form" onClick={handleCalculate}>
          Calcular
        </button>
        <div>
          <h3 className="subtitle-h3">Retorno Total do Investimento: R$ {totalReturn}</h3>
        </div>
      </div>
    </>
  );
};

export default CryptoTradeCalculator;
