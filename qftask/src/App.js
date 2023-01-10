import "./App.css";
import { useState } from "react";
import { NavBar } from "./Components/NavBar";
import { Content } from "./Components/Content";
import { Footer } from "./Components/Footer";

function App() {
  const [sofasInBasket, setSofasInBasket] = useState(0);

  const addToBasket = () => {
    const numSofas = sofasInBasket + 1;
    setSofasInBasket(numSofas);
  };

  return (
    <div className="App">
      <NavBar sofasInBasket={sofasInBasket} />
      <Content addToBasket={addToBasket} />
      <Footer />
    </div>
  );
}

export default App;
