import "./Navigation.css";
import { Link } from "react-router-dom";

function Navigation({ token, id }) {
  return (
    <nav className="navigation-bar" id={id}>
      <ul className="navigation-container">
        <li className="navigation-link-container">
          <Link to="/" className="links">
            Home
          </Link>
        </li>
        <li className="navigation-link-container">
          <Link to="/contact-us" className="links">
            Contact us
          </Link>
        </li>
        <li className="navigation-link-container">
          <Link to="/services" className="links">
            Services
          </Link>
        </li>

        <li className="navigation-link-container">
          {token && (
            <Link to="/profile" className="links">
              Profile
            </Link>
          )}
        </li>
        {token && (
          <li className="navigation-link-container">
            <Link to="/talents" className="links">
              Talents
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navigation;
