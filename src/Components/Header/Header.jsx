import "./Header.css";
import logo from "/src/assets/2onCfcMlLHgB2bFtT4LCtLxw92H.svg"
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
            <a className={"header-links"} href="/swkindustries/#Home">
              HOME
            </a>
          </li>
          <li className="nav-item">
            <a className={"header-links"} href="/swkindustries/#Products">
              PRODUCTS
            </a>
          </li>
          <li className="nav-item">
            <a className={"header-links"} href="/swkindustries/#Contact">
              CONTACT
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;