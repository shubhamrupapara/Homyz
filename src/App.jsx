import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import './App.css'
import Companies from "./components/companies/Companies";
import Residencies from "./components/residencies/Residencies";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Companies />
      <Residencies />
    </div>
  );
}

export default App;
