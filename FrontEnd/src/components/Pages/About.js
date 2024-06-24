import React from "react";
import "./About.css";
import Footer from "../Footer";

function About() {
  return (
    <>
      <div className="About-Wrapper">
        <div className="About-Container">
          <form className="About-Us-Form">
            <div className="AboutandImageWrap">
            <h1 className="About-Us">About Us</h1>
            <img src="images/LeafLogo.png" alt=""/>
            </div>
            <div className="About-Farming-First-Wrapper">
            <div className="About-Farming-First">
            <h1>About Farming First</h1>
            </div>
            <h1 className="About-Farming-First-Information">Farming First is the leading source for the latest insights, news and case studies on agricultural <br/>   innovation for development.
                As a hub for diverse voices from across the agriculture sector globally,<br/><br/>we capture, centralise and amplify the thought leadership and evidence of the organisations and
                experts<br/> driving progress in support of sustainable food systems.
                We aim to share interesting stories of promising innovations<br/> and the ways they are addressing complex and interconnected challenges from hunger and malnutrition, to climate action<br/> and vibrant rural livelihoods.</h1>
            </div>
            <div className="About-Farming-First-Wrapper">
            <div className="About-Farming-First">
            <h1>About Us</h1>
            </div>
            <h1 className="About-Farming-First-Information">Welcome to St. Anthony's Farm, where the beauty of rural life meets the bounty of nature's harvest. Nestled in the heart of the countryside, our farm stands as a testament to tradition, sustainability, and wholesome goodness.

At St. Anthony's, we take pride in our commitment to raising healthy, happy animals and cultivating the finest produce. Our farm is home to a thriving community of pigs, chickens,<br/> and other livestock, all raised with care and respect for their well-being.

Step onto our grounds, and you'll be greeted by the cheerful clucking of hens, the playful antics of piglets, and the gentle rustle of the wind through the fields. Here, amidst rolling pastures and sunlit barns, we believe in the importance of nurturing our land and its inhabitants.

But St. Anthony's isn't just about the joy of farm life—it's also about sharing the fruits of our labor with our community. Whether you're in search of premium cuts of pork, farm-fresh eggs in shades of brown and white, or savory sausages bursting with flavor, <br/>you'll find it all here.

From our pasture to your plate, every product that bears the St. Anthony's name is a testament to our unwavering dedication to quality, sustainability, and the timeless values of the countryside.<br/> <br/> So come, experience the magic of St. Anthony's Farm, where nature's bounty is always in season.</h1>
            </div>
            <div className="About-Farming-First-Wrapper">
            <div className="About-Farming-First">
            <h1>Contact Us</h1>
            </div>
            <h1 className="About-Farming-First-Information">For more Information or business related matters or to place an order from our menu please contact us at this number <br/>
                <span>9284374228</span></h1>
            </div>
            <video className="VideoClass" src="Videos/Intro.mp4" alt=""/>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
