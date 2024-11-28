
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Us</h1>
      </header>
      <div className="about-section">
        <h2>Who We Are</h2>
        <p>
          SWK Industries Pvt. Ltd., incorporated in 2020, is a dynamic trading company specializing in key products such
          as Sodium Benzoate, Benzoic Acid, and Titanium Dioxide.
          With years of rich experience in the field, we have established ourselves as a trusted partner in the chemical
          trading industry.
        </p>
        <p>
          We are proud to collaborate with our sister concern, <b>Swastik Industries</b>, to expand our reach and
          provide exceptional services to our customers.
          Our global presence includes importing from many countries and exporting to several Asian and African nations.
        </p>
      </div>

      <div className="vision-mission">
        <div className="vision">
          <h2>Our Vision</h2>
          <p>
            To become a global leader in the chemical trading industry by delivering innovative solutions, ensuring
            sustainable practices, and building long-lasting partnerships with clients across the world.
          </p>
        </div>
        <div className="mission">
          <h2>Our Mission</h2>
          <p>
            To consistently provide high-quality products, maintain customer satisfaction, and uphold ethical business
            practices while contributing to the growth of the chemical industry on a global scale.
          </p>
        </div>

      </div>
      <div className="values-section">
        <h2>Our Values</h2>
        <ul>
          <li><b>Integrity:</b> We uphold honesty and transparency in all our business dealings.</li>
          <li><b>Customer Focus:</b> We prioritize our clients' needs and strive for their satisfaction.</li>
          <li><b>Innovation:</b> We embrace new ideas to stay ahead in the dynamic trading industry.</li>
          <li><b>Sustainability:</b> We are committed to eco-friendly practices and solutions.</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
