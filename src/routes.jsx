import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/home";
import Benefits from "./components/content/benefits/benefits";
import Card from "./components/content/card/card";
import CryptoTradeCalculator from "./components/content/calculator/calc";

const MyRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/benefits" element={<Benefits />} />
        <Route path="/card" element={<Card />} />
        <Route path="/invest" element={<CryptoTradeCalculator />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoute;