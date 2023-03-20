import React from "react";
import people from "../../assets/landing/assets/people.png";
import ai from "../../assets/landing/assets/ai.png";

const Hero = () => {
  return (
    <div className="section__padding flex justify-between items-center lg:flex-row flex-col-reverse">
      <div className="flex flex-col items-start justify-center w-full h-full">
        <h1 className="gradient__text text-5xl lg:text-7xl md:text w-full lg:w-85 py-4">
          Let's Build Something amazing with Open Ai
        </h1>
        <p className="text-xl py-4">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="flex items-center justify-start gap-8 flex-col lg:flex-row w-full h-full">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="w-98 lg:w-7/12">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Hero;
