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
import TitaniumDioxide from "./Components/Products/ChemicalsInfo/TitaniumDioxide.jsx";
import BenzoicAcid from "./Components/Products/ChemicalsInfo/BenzoicAcid.jsx";



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
          <Route path="/swkindustries" element={<>
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
          <Route path="/about" element={<Products/>}/>
          <Route path="/sodium-benzoate" element={<><Header/><SodiumBenzoate/><Footer/></>}/>
          <Route path="/benzoic-acid" element={<><Header/><BenzoicAcid/><Footer/></>}/>
          <Route path="/titanium-dioxide" element={<><Header/><TitaniumDioxide/><Footer/></>}/>
        </Routes>
    </div>
  );
}

export default App
