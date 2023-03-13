import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experiences from "./components/Experiences";
import Newslatter from "./components/Newslatter";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Experiences />
      <Newslatter />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
