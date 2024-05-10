import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/home";
import Benefits from "./components/content/benefits/benefits";
import Card from "./components/content/card/card";

const MyRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/benefits" element={<Benefits />} />
        <Route path="/card" element={<Card />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoute;