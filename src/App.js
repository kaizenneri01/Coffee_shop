import React from "react";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import AboutPage from "./components/AboutPage/AboutPage";
import Product from "./components/Product/Product";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <HomePage />
      <AboutPage />
      <Product />
    </div>
  );
}

export default App;
