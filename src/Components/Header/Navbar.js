import logo from "../../../src/Assets/Company Logo.PNG";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0 changeable">
      <div className="container-fluid head">
        <Link to="/" className="navbar-brand">
          <img src={logo} id="logo" />
        </Link>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            {props.a.map((i) => i.opt)}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
