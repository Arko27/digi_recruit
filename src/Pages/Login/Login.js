import React from "react";
import Navbar from "../../Components/Header/Navbar";
import { Link } from "react-router-dom";

const arr = [
  {
    opt: (
      <a href="#" className="nav-link">
        Business Solutions
      </a>
    ),
  },
  {
    opt: (
      <a href="#sc" className="nav-link">
        Science
      </a>
    ),
  },
  {
    opt: (
      <a href="/" className="nav-link">
        About
      </a>
    ),
  },
  {
    opt: (
      <a href="#price" className="nav-link">
        Pricing
      </a>
    ),
  },
  {
    opt: (
      <a href="#resrc" className="nav-link">
        Resources
      </a>
    ),
  },
  {
    opt: (
      <a href="#contact" className="nav-link">
        Contact
      </a>
    ),
  },
];

export { arr };

function Login() {
  return (
    <div>
      <Navbar a={arr} />
      <div className="container">
        <div className="row gy-3 my-3">
          <div className="container a d-flex justify-content-center text-center">
            Login Page
          </div>

          <div className="col-sm-2 col-md-2 col-lg-3">
            <div className=""></div>
          </div>

          <div className="col-sm-8 col-md-8 col-lg-6">
            <div className="container card log h-100">
              <form className="row g-3 p-3" autocomplete="off">
                <div className="col-md-12">
                  <label for="inputEmail4" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                    placeholder="Type in Email Address"
                  />
                </div>
                <div className="col-md-12">
                  <label for="inputPassword4" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword4"
                    placeholder="Type in Password"
                  />
                </div>

                <div className="col-12">
                  <a href="">Forgot Password?</a>
                </div>
                <div className="d-grid col-6 mx-auto my-1">
                  <br />
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </div>
                <div>
                  Don't have an account yet?&nbsp;&nbsp;
                  <Link to="/signup">Sign Up</Link>
                </div>
              </form>
            </div>
          </div>

          <div className="col-sm-2 col-md-2 col-lg-3">
            <div className=""></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
