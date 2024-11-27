import "./Footer.css";
// import "/src/Components/Header/Header.css"
import logo from "../../assets/2onCfcMlLHgB2bFtT4LCtLxw92H.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-left">
          <div className="footer-logo-container">
            <img src={logo} className="logo-footer" alt="logo"/>
            <div className={"name"}>SWK Industries pvt. ltd.</div>
          </div>
          <div className="company-info">
            A young, dynamic and a progressive thinking-led company, SWK Industries Private Limited has rapidly risen in
            the chemical industry as a reliable distribution partner.
          </div>
        </div>


        <div className="footer-mid">
          <img alt="Get In Touch Icons" loading="lazy" decoding="async" data-nimg="fill" className="svg-img"
               src="https://dcpltechnology.com/images/get-in-touch/03.svg"/>
          <div className="email-info">
            E-Mail
          </div>
          <div className="email-add">
            <a className={"email-1"} href="mailto:info@swkindustries.com">
              info@swkindustries.com
            </a>

            <a className={"email-2"} href="mailto:sales@swkindustries.com">
              sales@swkindustries.com
            </a>
          </div>

        </div>
        <div className="footer-right">
          <img alt="Get In Touch Icons" loading="lazy" decoding="async" data-nimg="fill" className="svg-img"
               src="https://dcpltechnology.com/images/get-in-touch/02.svg"/>
          <div className="location-info">
            Location
          </div>
          <div className={"location-area"}>
            Office no. 457, The Galleria, Near SanjeevKumar Auditorium, Pal, Adajan, Surat, Gujarat - 395009

          </div>

        </div>

      </div>

      <hr className="footer-line" width={"80%"}/>

      <div className="footer-bottom">
        <div className="footer-bottom-left">
          © SWK Industries Pvt Ltd. All rights reserved.
        </div>
      </div>

    </footer>
  )
}

export default Footer;