import React from "react";
import Navbar from "../../Components/Header/Navbar";
import {arr} from "../Login/Login";

function Sign() {
  return (
    <div>
      <Navbar a = {arr}/>
      <div className="container">
        <div className="row gy-3 my-3 mt-5">
          <div className="container a d-flex justify-content-center text-center">
            Sign-Up Page
          </div>

          <div className="col-sm-2 col-md-2 col-lg-3">
            <div className=""></div>
          </div>

          <div className="col-sm-8 col-md-8 col-lg-6">
            <div className="container card log h-100">
              <form className="row g-3 p-3" autocomplete="off">
                <div className="col-6">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div className="col-6">
                  <label className="form-label">I am a</label>
                  <select id="inputState" className="form-select" required>
                    <option selected value="">
                      Choose...
                    </option>
                    <option>Student</option>
                    <option>Parent</option>
                  </select>
                </div>

                <div className="col-12">
                  <text className="form-label">Username</text>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    placeholder="Name@123"
                    required
                  />
                </div>

                <div className="col-6">
                  <label for="inputEmail4" className="form-label">
                    Phone No.
                  </label>
                  <input
                    className="form-control"
                    type="tel"
                    placeholder="01234 56789"
                    required
                  ></input>
                </div>

                <div className="col-12">
                  <label for="inputEmail4" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                    required
                  />
                </div>

                <div className="col-12">
                  <label for="inputPassword4" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword4"
                    required
                  />
                </div>

                <div className="col-12">
                  <label for="inputPassword4" className="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword4"
                    required
                  />
                </div>

                <div className="d-grid gap-2 col-6 mx-auto mt-4">
                  <button type="submit" className="btn btn-primary">
                    Sign Up
                  </button>
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

export default Sign;
