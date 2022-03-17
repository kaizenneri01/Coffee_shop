import React from "react";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import AboutPage from "./components/AboutPage/AboutPage";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <HomePage />
      <AboutPage />
    </div>
  );
}

export default App;
