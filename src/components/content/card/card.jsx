import "./style.css";
import NavBar from "../../header/navBar";
import { CiMoneyCheck1 } from "react-icons/ci";
import { IoTrendingUpSharp } from "react-icons/io5";
import { FaPlaneDeparture } from "react-icons/fa";
import { TfiTimer } from "react-icons/tfi";
import { IoIosWifi } from "react-icons/io";

const Card = () => {
  return (
    <>
      <NavBar />
      <div className="card-container">
        <img className="card-img" src="public\assets\unicoin-card.png" />
        <p className="card-paragraph">
          Nosso cartão Unicoins é o seu passaporte para o mundo das
          criptomoedas. Com ele, você pode usar o saldo de suas criptomoedas em
          milhões de estabelecimentos ao redor do mundo, tanto online quanto
          offline. Seja para compras do dia a dia ou grandes investimentos, o
          cartão Unicoins oferece flexibilidade e conveniência sem igual.
        </p>
        <div className="icons">
          <CiMoneyCheck1 />
          <IoTrendingUpSharp />
          <FaPlaneDeparture />
          <TfiTimer />
          <IoIosWifi />
        </div>
      </div>
    </>
  );
};

export default Card;
