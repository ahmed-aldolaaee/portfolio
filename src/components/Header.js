import { Link } from 'react-router-dom';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark mb-3">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={process.env.PUBLIC_URL + "/logo.svg"} width="70px" height="70px"></img>
        </Link>
        <div className=" navbar collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/skills">
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="#">
                <AiFillGithub className="h-logo" />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                <AiFillLinkedin className="h-logo" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
