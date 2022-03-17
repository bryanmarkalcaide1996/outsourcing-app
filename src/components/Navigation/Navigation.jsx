import "./Navigation.css";
import logo from "../../Assets/logo.png";
import gear from "../../Assets/gear.png";
import { useNavigate } from "react-router-dom";
import useGetData from "../utils/useGetData";

function Navigation() {
  const navigate = useNavigate();
  const users = useGetData("users", "arr");
  const token = useGetData("currentUser", "obj");
  const filteredData = users.filter(
    (currentUser) => currentUser?.id !== token?.id
  );

  function handleSubmit() {
    localStorage.setItem("jobseeker", JSON.stringify({}));
    localStorage.setItem(
      "users",
      JSON.stringify([
        ...filteredData,
        JSON.parse(localStorage.getItem("currentUser")),
      ])
    );
    localStorage.removeItem("currentUser");
    navigate("/login");
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        <img
          src={logo}
          alt="phenomenal innovator"
          className="branding"
          id="home"
        />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse " id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link " aria-current="page" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact-us">
              Contact us
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#about">
              About
            </a>
          </li>
          {token?.isAuthenticated && (
            <li className="nav-item">
              <a className="nav-link" href="/talents">
                Talent Pool
              </a>
            </li>
          )}
          {!token?.isAuthenticated && (
            <li className="nav-item">
              <a className="nav-link" href="/login">
                Login
              </a>
            </li>
          )}
          {token?.isAuthenticated && (
            <li className="nav-item dropdown">
              <div
                className="nav-link dropdown-toggle"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img className="gear" src={gear} alt="gear" />
              </div>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="/profile">
                    Profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/talent-list">
                    Talent List
                  </a>
                </li>
                <li>
                  <button className="dropdown-item" onClick={handleSubmit}>
                    Logout
                  </button>
                </li>
              </ul>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
