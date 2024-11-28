import "./Header.css";
import logo from "/src/assets/2onCfcMlLHgB2bFtT4LCtLxw92H.svg"
import {Link} from "react-router-dom";
function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} className="logo" alt="logo"/>
        <div className={"name"}>SWK</div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className={"header-links"} href="/swk-industries/#Home">
              HOME
            </a>
          </li>
          <li className="nav-item">
            <a className={"header-links"} href="/swk-industries/#Products">
              PRODUCTS
            </a>
          </li>
          <li className="nav-item">
            <a className={"header-links"} href="/swk-industries/#Contact">
              CONTACT
            </a>
          </li>

          <Link className={"header-links"} to={'/swk-industries/about'}
                style={{textDecoration: 'none', color: '#797979FF'}}>
            <li className="nav-item">
              ABOUT
            </li>
          </Link>

      </ul>
      </nav>
    </header>
  )
}

export default Header;