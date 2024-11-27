// import React from "react";
import "./ChemicalsInfo.css";

const TitaniumDioxide = () => {
  return (
    <div className="container">
      <header className="header">
        <h1>Titanium Dioxide IP</h1>
      </header>
      <p className={"chemical-info-description"}>
        Swastik industries is pioneer in the manufacturing of Titanium Dioxide IP. In the pharmaceutical industry, titanium dioxide is used in most sunscreens to block UVA and UVB rays, similar to zinc oxide. It is also commonly used as pigment for pharmaceutical products such as gelatine capsules, tablet coatings and syrups. In the cosmetics industry, it is used in toothpaste, lipsticks, creams, ointments and powders. It can be used as an opacifier to make pigments opaque.
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
            <td>Assay</td>
            <td>98%</td>
          </tr>
          <tr>
            <td>Specific gravity</td>
            <td>3.8-3.9</td>
          </tr>
          <tr>
            <td>Refractive index</td>
            <td>2.5</td>
          </tr>
          <tr>
            <td>pH</td>
            <td>6.5-8</td>
          </tr>
          <tr>
            <td>Bulk density</td>
            <td>0.7 gm/cm3</td>
          </tr>
          <tr>
            <td>Water soluble substance</td>
            <td>0.3%</td>
          </tr>
          <tr>
            <td>Arsenic</td>
            <td>2 ppm</td>
          </tr>
          <tr>
            <td>Heavy metal</td>
            <td>8 ppm</td>
          </tr>
          <tr>
            <td>Iron</td>
            <td>19 ppm</td>
          </tr>
          <tr>
            <td>Oil absorption</td>
            <td>20-25 gm/100 gm</td>
          </tr>
          <tr>
            <td>Average particle size</td>
            <td>less than 40 microns</td>
          </tr>
          <tr>
            <td>Dispersibility</td>
            <td>Freely in both aqueous and non-aqueous media</td>
          </tr>
          </tbody>
        </table>
        <p className="note">
          The material is complies with IP specification of quantity and quality.
        </p>
      </section>

    </div>
  );
};

export default TitaniumDioxide;
