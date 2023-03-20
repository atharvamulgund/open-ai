import React from "react";
import Hero from "./Hero.react";
import Navbar from "./Navbar";
const Landing = () => {
  return (
    <>
      <div className="gradient__bg lg:h-screen h-full">
        <Navbar />
        <Hero />
      </div>
    </>
  );
};

export default Landing;
