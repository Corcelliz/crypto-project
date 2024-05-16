import { useState } from "react";
import NavBar from "../../header/navBar";
import { TbCurrencyReal } from "react-icons/tb";
import { FiDollarSign } from "react-icons/fi";
import "./style.css";

const CryptoConverter = () => {
  const [cryptoAmount, setCryptoAmount] = useState("");
  const [convertedValueUSD, setConvertedValueUSD] = useState("");
  const [convertedValueBRL, setConvertedValueBRL] = useState("");

  const cryptoValueUSD = 18.5;

  const handleCryptoAmountChange = (event) => {
    setCryptoAmount(event.target.value);
  };

  const convertValues = () => {
    const cryptoAmountFloat = parseFloat(cryptoAmount);

    if (!isNaN(cryptoAmountFloat)) {
      const conversionRateBRL = (5.13).toFixed(1);
      const convertedValueBRL =
        (cryptoValueUSD * cryptoAmountFloat * conversionRateBRL).toFixed(2);
      setConvertedValueUSD(cryptoValueUSD * cryptoAmountFloat);
      setConvertedValueBRL(convertedValueBRL);
    }
  };

  return (
    <div>
      <NavBar />
      <div className="calc-container">
        <h2 className="calc-title">Conversor Da UniCoins</h2>
        <div>
          <label>Quantidade de criptomoeda:</label>
          <input
            type="text"
            value={cryptoAmount}
            onChange={handleCryptoAmountChange}
          />
        </div>
        <button className="button" onClick={convertValues}>
          Converter
        </button>
        <div>
          <p className="paragraph">
            Valor em Dólar:
            <FiDollarSign className="FiDollarSign" /> {convertedValueUSD}
          </p>
          <p className="paragraph">
            Valor em Real:
            <TbCurrencyReal className="TbCurrencyReal" /> {convertedValueBRL}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CryptoConverter;
