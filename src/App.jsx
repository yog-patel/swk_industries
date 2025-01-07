import './App.css';
import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Home from "./Components/Home/Home.jsx";
import Products from "./Components/Products/Products.jsx";
import {useEffect, useState} from "react";
import logo from "./assets/2onCfcMlLHgB2bFtT4LCtLxw92H.svg";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Contact from "./Components/Contact/Contact.jsx";
import SodiumBenzoate from "./Components/Products/ChemicalsInfo/SodiumBenzoate.jsx";
import TitaniumDioxideIP from "./Components/Products/ChemicalsInfo/TitaniumDioxideIP.jsx";
import BenzoicAcid from "./Components/Products/ChemicalsInfo/BenzoicAcid.jsx";
import About from "./Components/About/About.jsx";
import TitaniumDioxideRutile from "./Components/Products/ChemicalsInfo/TitaniumDioxideRutile.jsx";
import TitaniumDioxideAnatase from "./Components/Products/ChemicalsInfo/TitaniumDioxideAnatase.jsx";



function App() {
  const [showLogo, setShowLogo] = useState(true);
  const [fadeInContent, setFadeInContent] = useState(false); // For main content fade-in

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(false); // Hide the logo after 2 seconds
      setFadeInContent(true); // Show main content with fade-in
    }, 1000);

    // Cleanup timer
    return () => clearTimeout(timer);
  }, []);

  return (
    // <>
    //   {showLogo ? (
    //     <div className="initial-logo-container">
    //       <img src={logo} className="initial-logo" alt="logo"/>
    //       <div className={"initial-name"}>SWK</div>
    //     </div>
    //   ) : (
    //     <div className={`main-content ${fadeInContent ? "fade-in" : ""}`}>
    //       <Header/>
    //       <Home />
    //       <Products />
    //       <Contact />
    //       <Footer/>
    //     </div>
    //   )}
    // </>
    <div className="App">
        <Routes>
          <Route path="/swk_industries" element={<>
            {showLogo ? (
              <div className="initial-logo-container">
                <img src={logo} className="initial-logo" alt="logo"/>
                <div className={"initial-name"}>SWK</div>
              </div>
            ) : (
              <div className={`main-content ${fadeInContent ? "fade-in" : ""}`}>
                <Header/>
                <Home />
                <Products />
                <Contact />
                <Footer/>
              </div>
            )}
          </>}/>
          {/*<Route path="/swk-industries/about" element={<Products/>}/>*/}
          <Route path="/swk_industries/sodium-benzoate" element={<><Header/><SodiumBenzoate/><Footer/></>}/>
          <Route path="/swk_industries/benzoic-acid" element={<><Header/><BenzoicAcid/><Footer/></>}/>
          <Route path="/swk_industries/titanium-dioxide-ip" element={<><Header/><TitaniumDioxideIP/><Footer/></>}/>
          <Route path="/swk_industries/titanium-dioxide-rutile" element={<><Header/><TitaniumDioxideRutile/><Footer/></>}/>
          <Route path="/swk_industries/titanium-dioxide-anatase" element={<><Header/><TitaniumDioxideAnatase/><Footer/></>}/>
          <Route path="/swk_industries/about" element={<><Header/><About/><Footer/></>}/>
        </Routes>
    </div>
  );
}

export default App
