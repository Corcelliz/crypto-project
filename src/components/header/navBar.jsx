import "./style.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/">
            <img src="\assets\uniCoin-logo.png" className="icon" />
          </Link>
          <title>Unicoins</title>
        </div>
        <div className="navbar-links">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/benefits">Benefícios</Link>
          </li>
          <li>
            <Link to="/card">Cartão</Link>
          </li>
          <li>
            <Link to="/invest">Investimento</Link>
          </li>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
