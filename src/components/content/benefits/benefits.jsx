import "./style.css";
import NavBar from "../../header/navBar";
import { TfiThought } from "react-icons/tfi";
import { FaMagnifyingGlassDollar } from "react-icons/fa6";import { FaArrowUpShortWide } from "react-icons/fa6";
import { FaHandshake } from "react-icons/fa";

const Benefits = () => {
  return (
    <>
      <NavBar />
      <h1 className="benefits-title">
        Bem-vindo ao Unicoins, a revolução das criptomoedas!
      </h1>
      <div className="about-container">
        <div className="about-grid">
          <div className="grid1">
            <TfiThought className="icon"/>
            <h2>Inovação</h2>
            <p className="paragraph">O Unicoins é mais do que uma simples wallet de criptomoedas. É uma solução completa para suas necessidades financeiras digitais. Com nossa interface intuitiva e recursos avançados de segurança, você pode comprar, vender, armazenar e até mesmo gastar suas criptomoedas com total confiança.</p>
          </div>
          <div className="grid2">
            <FaHandshake className="icon"/>
            <h2>Parceria</h2>
            <p className="paragraph">A Apple e a Unicoins revoluciona os pagamentos digitais. Integrada ao Apple Vision Pro e ao Apple Watch, a Unicoins oferece transações rápidas, seguras e sem contato. Com reconhecimento facial e biométrico, as transações ficam mais simples e protegidas.</p>
          </div>
          <div className="grid3">
            <FaArrowUpShortWide className="icon"/>
            <h2>Vantagem</h2>
            <p className="paragraph">Com o Unicoins, você tem acesso a uma série de benefícios exclusivos, incluindo taxas competitivas, suporte 24/7, e programas de recompensas para incentivar seu uso contínuo. Além disso, nossa plataforma está em constante evolução, com novos recursos e parcerias sendo adicionados regularmente para melhor atender às suas necessidades.</p>
          </div>
          <div className="grid4">
            <FaMagnifyingGlassDollar className="icon"/>
            <h2>Oportunidade</h2>
            <p className="paragraph">Junte-se a nós hoje e experimente o futuro das finanças digitais com o Unicoins. Cadastre-se agora e comece a aproveitar todos os benefícios que nossa plataforma tem a oferecer!</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Benefits;
