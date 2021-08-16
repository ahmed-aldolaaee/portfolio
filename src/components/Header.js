import { Link } from "react-router-dom";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Header = () => {

  const collapser = () => {
    const x = document.getElementById("navbarNav");
    x.classList.remove('show');
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark mb-5">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src={process.env.PUBLIC_URL + "/logo.svg"}
            width="70px"
            height="70px"
            alt="logo"
          ></img>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`navbar collapse navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/" onClick={() => collapser()}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/skills" onClick={() => collapser()}>
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects" onClick={() => collapser()}>
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={() => collapser()}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={() => collapser()}>
                Contact
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://github.com/ahmed-aldolaaee"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub className="h-logo" />
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://linkedin.com/in/ahmed-aldolaaee"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillLinkedin className="h-logo" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
