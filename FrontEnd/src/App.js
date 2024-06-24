import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home";
import Services from "./components/Pages/Services";
import { Helmet } from "react-helmet";
import About from "./components/Pages/About";
import { Cart } from "./components/Cart";
import { ShopContextProvider } from "./Context/Shop-Context";
import LearnMore from "./components/LearnMore";

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>SAFFARM</title>
        <link rel="canonical" href="http://SAF.com" />
      </Helmet>
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/Services" exact element={<Services />} />
            <Route path="/About" exact element={<About />} />
            <Route path="/Cart" exact element={<Cart />} />
            <Route path="/Learn-More" exact element={<LearnMore/>}/>
          </Routes>
        </Router>
      </ShopContextProvider>
    </>
  );
}

export default App;
