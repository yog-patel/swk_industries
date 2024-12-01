// import React from "react";
import "./ChemicalsInfo.css";

const TitaniumDioxideAnatase = () => {
  return (
    <div className="container">
      <header className="header">
        <h1>Titanium Dioxide ANATASE</h1>
      </header>
      <p className={"chemical-info-description"}>
        In the pharmaceutical industry, titanium dioxide is used in most sunscreens to block UVA and UVB rays, similar to zinc oxide. It is also commonly used as pigment for pharmaceutical products such as gelatine capsules, tablet coatings and syrups. In the cosmetics industry, it is used in toothpaste, lipsticks, creams, ointments and powders. It can be used as an opacifier to make pigments opaque.
      </p>
      <section className="specifications">
        <h2>Specification</h2>
        <table>
          <tbody>
          <tr>
            <td>Description</td>
            <td>A white infusible powder,odorless</td>
          </tr>
          <tr>
            <td>Titanium Dioxide Content</td>
            <td>99.15%</td>
          </tr>
          <tr>
            <td>Volatile at 105 centigrade</td>
            <td>0.38</td>
          </tr>
          <tr>
            <td>water soluble</td>
            <td>0.5%</td>
          </tr>
          <tr>
            <td>pH of water suspension</td>
            <td>7.43</td>
          </tr>
          <tr>
            <td>whiteness</td>
            <td>98.2</td>
          </tr>
          <tr>
            <td>Oil absorption</td>
            <td>18.21 gm/100 gm</td>
          </tr>
          </tbody>
        </table>
      </section>

    </div>
  );
};

export default TitaniumDioxideAnatase;
