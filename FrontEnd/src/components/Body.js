import React from "react";
import "./Body.css";
import "react-multi-carousel/lib/styles.css";
import { BodyData } from "./BodyData";
import { BodyData2 } from "./BodyData2";
import Welcome from "./Welcome";

function Body() {
  return (
    <div className="Body-container">
      <div className="Welcome">
      <Welcome/>
      </div>
      <div className = "BodyData1">
      <BodyData2 
        images = "images/ChickensInFarm.jpeg"
        Text = "Get The"
        Text2 = "Healthiest" 
        Text3 = "Farm Broiler"
        Text4 = "Breed Chickens"
        />  
        </div>
        <div className = "BodyData2">
      <BodyData 
        images = "images/Pigs.jpg"
        Text = "Get The"
        Text2 = "Healthiest" 
        Text3 = "Pork Meat From"
        Text4 = "Farm Breed Animals"
        />  
        </div>
        <div className = "BodyData3">
      <BodyData2 
        images = "images/Sausages.jpeg"
        Text = "Get The"
        Text2 = "Best Goan" 
        Text3 = "Smoked and Sun-"
        Text4 = "dried sausages"
        />  
        </div>
        <div className = "BodyData4">
      <BodyData 
        images = "images/Eggs.jpeg"
        Text = "Get The"
        Text2 = "Freshest" 
        Text3 = "Brown & White"
        Text4 = "Eggs"
        />  
        </div>
    </div>
  );
}

export default Body;
