// import React from "react";
import "./ChemicalsInfo.css";

const SodiumBenzoate = () => {
  return (
    <div className="container">
      <header className="header">
        <h1>SODIUM BENZOATE</h1>
      </header>
      <p className={"chemical-info-description"}>
        Sodium Benzoate is primarily used as a preservative in food and
        beverage applications as an antimicrobial agent. Sodium Benzoate is
        typically used at levels up to 0.1% in food and beverages, is FDA
        Approved and GRAS classified. It is most suitable when used in foods
        and beverages with a pH of 4.5 or below. Sodium benzoate is not
        recommended as a preservative at pH ranges higher than 4.5.
      </p>
      <section className="specifications">
        <h2>Specification</h2>
        <table>
          <tbody>
          <tr>
            <td>Description</td>
            <td>White crestline powder with faint odor, hygroscopic</td>
          </tr>
          <tr>
            <td>Solubility</td>
            <td>Freely soluble in water & sparingly soluble in ethanol</td>
          </tr>
          <tr>
            <td>Acidity</td>
            <td>0.07 ml of 0.01M NaOH</td>
          </tr>
          <tr>
            <td>Arsenic</td>
            <td>0.6 ppm</td>
          </tr>
          <tr>
            <td>Heavy Metal</td>
            <td>08 ppm</td>
          </tr>
          <tr>
            <td>Moisture Content</td>
            <td>0.7%</td>
          </tr>
          <tr>
            <td>Chlorinated Compound</td>
            <td>10 ppm</td>
          </tr>
          <tr>
            <td>Assay</td>
            <td>99.70% on dry basis (Titrimetric method)</td>
          </tr>
          </tbody>
        </table>
        <p className="note">
          The material complies with IP specification of quantity and quality.
        </p>
      </section>
      <section className="grades">
        <h2>Grades of Sodium Benzoate</h2>
        <ul>
          <li>Sodium benzoate IP</li>
          <li>Sodium benzoate BP</li>
          <li>Sodium benzoate Tech grade</li>
        </ul>
      </section>
      <section className="applications">
        <h2>Application of Sodium Benzoate</h2>
        <ul>
          <li>Preservative for food and beverages</li>
          <li>Use as a preservative in pharmaceuticals</li>
          <li>Agricultural chemicals (non-pesticidal)</li>
          <li>Corrosion inhibitors and anti-scaling agents</li>
          <li>Oxidizing/reducing agents</li>
          <li>Paint additives and coating additives</li>
          <li>Plating agents and surface treating agents</li>
          <li>Processing aids</li>
          <li>Stabilizers</li>
        </ul>
      </section>
    </div>
  );
};

export default SodiumBenzoate;
