import React from "react";

import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Info from "./components/Info";
import Interests from "./components/Interests";

function App() {
  return (
    <div className="card">
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}

export default App;
