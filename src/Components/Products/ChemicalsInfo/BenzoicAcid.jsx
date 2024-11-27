// import React from "react";
import "./ChemicalsInfo.css";

const BenzoicAcid = () => {
  return (
    <div className="container">
      <header className="header">
        <h1>BENZOIC ACID</h1>
      </header>
      <p className={"chemical-info-description"}>
        Swastik industries is a strong supplier of Benzoic Acid. We offer world class quality benzoic acid, a product used in the paints and coatings industry and in alkyd composite resins.
        <br/>
        Benzoic acid is the most basic of aromatic carboxylic acids. This product is a building block used in the manufacture of many end products including alkyd resins. When used in alkyd resin applications, it improves gloss, hardness and chemical resistance. Benzoic acid is also used in other applications including pharmaceuticals, personal care and select industrial applications. Benzoic acid can be used as a preservative given that it increases storage stability and mitigates corrosion when used in emulsion formulations, liquid detergents, paints, polishes and waxes.
      </p>
      <section className="specifications">
        <h2>Specification</h2>
        <table>
          <tbody>
          <tr>
            <td>Description</td>
            <td>White flakes with characteristic odor.</td>
          </tr>
          <tr>
            <td>Sulphated ash</td>
            <td>0.05%</td>
          </tr>
          <tr>
            <td>Moisture content</td>
            <td>0.3%</td>
          </tr>
          <tr>
            <td>Melting point</td>
            <td>121 centigrade</td>
          </tr>
          <tr>
            <td>Assay</td>
            <td>99.65% (Titrimetric method)</td>
          </tr>

          </tbody>
        </table>
        <p className="note">
          The material is complies with IP specification of quantity and quality.
        </p>
      </section>
      <section className="grades">
        <h2>Grades of Benzoic acid.e</h2>
        <ul>
          <li>Benzoic acid IP</li>
          <li>Benzoic acid BP</li>
          <li>Benzoic acid resin grade</li>
        </ul>
      </section>
      <section className="applications">
        <h2>Application of Benzoic acid</h2>
        <ul>
          <li>Food and beverage additive, preservatives</li>
          <li>Intermediates for synthesis of other chemicals like Phenol, Benzene etc.</li>
          <li>Paint additives and coating additives</li>
          <li>De-icing and Antifreeze</li>
          <li>Adhesives and sealant chemicals</li>
          <li>Cosmetics and personal care</li>
          <li>Agriculture</li>
          <li>Solvents (for cleaning and degreasing)</li>
          <li>Plasticizers, phenol and other chemicals</li>
        </ul>
      </section>
    </div>
  );
};

export default BenzoicAcid;
