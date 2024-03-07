import React from "react";
import Btn from "./Btn";

const Hero = () => {
  return (
    <div className="flex px-14">
      <div className="flex-1 text-balance pl-12">
        <h1 className="text-8xl pt-20 font-bold pb-8">YOUR FEET DESREVES THE BEST</h1>
        <p className="text-gray-700 pb-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim iure
          culpa saepe dignissimos rerum aperiam nulla exercitationem quam
          adipisci. Nihil eius facere modi quis dignissimos.
        </p>
        <Btn name="Shop Now"/>
        <div className="pt-6 text-gray-700">
            <h4>Also Available On:</h4>
            <div className="flex space-x-3 pt-1">
            <img src="images/flipkart.png" alt="Flipkart" />
            <img src="images/amazon.png" alt="Amazon" />
            </div>
        </div>
      </div>
      <div className="pt-14">
        <img src="/images/hero-image.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
