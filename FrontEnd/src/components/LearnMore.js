import React from "react";
import "./LearnMore.css";
import Footer from "./Footer";

function LearnMore() {
  return (
    <>
      <div className="About-Wrapper">
        <div className="About-Container">
          <form className="About-Us-Form">
            <div className="AboutandImageWrap">
            <h1 className="About-Us">Learn More</h1>
            <img src="images/LeafLogo.png" alt=""/>
            </div>
            <div className="About-Farming-First-Wrapper">
            <div className="About-Farming-First">
            <h1>Broiler Breed Chickens</h1>
            </div>
            <h1 className="About-Farming-First-Information">Breed broiler is any chicken that is bred and raised specifically for meat production. Most commercial broilers reach slaughter weight between four and six weeks of age,<br/> although slower growing breeds reach slaughter weight at approximately 14 weeks of age. Typical broilers have white feathers and yellowish skin. Broiler or sometimes broiler-fryer is also used sometimes to refer specifically to younger chickens under 2.0 kilograms , as compared with the larger roasters. </h1>
            </div>
            <div className="About-Farming-First-Wrapper">
            <div className="About-Farming-First">
            <h1>Farm Breed Pigs</h1>
            </div>
            <h1 className="About-Farming-First-Information">Pig farming, pork farming, or hog farming is the raising and breeding of domestic pigs as livestock, and is a branch of animal husbandry. Pigs are farmed principally for food and skins.
Pigs are amenable to many different styles of farming: intensive commercial units, commercial free range enterprises, or extensive farming. Historically, farm pigs were kept in small numbers and were closely associated with the residence of the owner, or in the same village or town.<br/> They were valued as a source of meat and fat, and for their ability to convert inedible food into meat and manure, and were often fed household food waste when kept on a homestead. Pigs have been farmed to dispose of municipal garbage on a large scale.</h1>
            </div>
            <div className="About-Farming-First-Wrapper">
            <div className="About-Farming-First">
            <h1>Freshest Goan Smoked Sausages</h1>
            </div>
            <h1 className="About-Farming-First-Information">Farming First is the leading source for the latest insights, news and case studies on agricultural <br/>   innovation for development.
                As a hub for diverse voices from across the agriculture sector globally,<br/><br/> we capture, centralise and amplify the thought leadership and evidence of the organisations and
                experts<br/> driving progress in support of sustainable food systems.
                We aim to share interesting stories of promising innovations<br/> and the ways they are addressing complex and interconnected challenges from hunger and malnutrition, to climate action<br/> and vibrant rural livelihoods.</h1>
            </div>
            <div className="About-Farming-First-Wrapper">
            <div className="About-Farming-First">
            <h1>Freshest Brown & White Eggs</h1>
            </div>
            <h1 className="About-Farming-First-Information">Many people believe that the colour of an egg determines its health benefits or nutrients. But the colour of an egg essentially comes down to the type of chicken that lays it; thus, it is determined by the chicken breed and its genes. <br/><br/>The primary pigment in brown eggshells is something called protoporphyrin IX, and blue eggshells get their colour from the pigment biliverdin. While factors like the chickens feed or environment might bring in shade variations, they dont change the eggshells main colour.</h1>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default LearnMore;
