import { useState } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_lq82njf", // Replace with your service ID
        "template_w1gg222", // Replace with your template ID
        formData, // Replace with your form data
        "DH0yuNSP42_nrkrc3" // Replace with your user ID
      )
      .then(
        (result) => {
          console.log("Email sent successfully!");
          setFormData({ firstName: "", lastName: "", email: "", message: "" });
        },
        (error) => {
          console.error("Failed to send email:", error);
        }
      );
  };

  return (
    <div className="contact" id={"Contact"}>
      <div className="space"></div>
      <hr className={"contact-hr"} width="80%"/>
      <section id="contact">

        <div className="left-section">
          <h2>Contact Us</h2>
          <p>
            Interested in working together? Fill out some info and we will be in
            touch shortly. We can’t wait to hear from you!
          </p>
        </div>
        <div className="right-section">
          <form onSubmit={handleSubmit}>
            <div className="name">
              <div className="input-group">
                <label>First Name (required)</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  required
                />
              </div>
              <div className="input-group">
                <label>Last Name (required)</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>
            <div className="input-group">
              <label>Email (required)</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
              />
            </div>
            <div className="input-group">
              <label>Message (required)</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button type="submit">SEND</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
