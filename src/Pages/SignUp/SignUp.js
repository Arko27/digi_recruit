import React from "react";
import Navbar from "../../Components/Header/Navbar";
import { arr } from "../Login/Login";

function Sign() {
  return (
    <div>
      <Navbar a={arr} />
      <div className="container">
        <div className="row gy-3 my-3 mt-3">
          <div className="container a d-flex justify-content-center text-center">
            Sign-Up Page
          </div>

          <div className="col-sm-2 col-md-2 col-lg-2">
            <div className=""></div>
          </div>

          <div className="col-sm-8 col-md-8 col-lg-8">
            <div className="container card log h-100">
              <form className="row g-3 p-3" autocomplete="off">
                <div className="col-12">
                  <label className="form-label">Company Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    placeholder="Company Name"
                    required
                  />
                </div>

                <div className="col-12">
                  <text className="form-label">Number of Employees</text>
                  <input
                    type="tel"
                    className="form-control"
                    id="inputAddress"
                    placeholder="500"
                    required
                  />
                </div>

                <div className="col-12">
                  <text className="form-label">Contact Name</text>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    placeholder="Contact Name"
                    required
                  />
                </div>

                <div className="col-12">
                  <label for="inputEmail4" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                    placeholder="Email Address"
                    required
                  />
                </div>

                <div className="col-6">
                  <label for="inputPassword4" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword4"
                    placeholder="********"
                    required
                  />
                </div>

                <div className="col-6">
                  <label for="inputPassword4" className="form-label">
                    Re-enter Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword4"
                    placeholder="********"
                    required
                  />
                </div>

                <div className="col-6">
                  <label for="inputEmail4" className="form-label">
                    Mobile Number
                  </label>
                  <input
                    className="form-control"
                    type="tel"
                    placeholder="Mobile Number"
                    required
                  ></input>
                </div>

                <div className="col-6">
                  <label for="inputEmail4" className="form-label">
                    Telephone Number
                  </label>
                  <input
                    className="form-control"
                    type="tel"
                    placeholder="Telephone Number"
                  ></input>
                </div>

                <div className="col-12">
                  <text className="form-label">Address </text>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    placeholder="Address"
                    required
                  />
                </div>

                <div className="col-6">
                  <text className="form-label">Suburb </text>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    placeholder="Suburb"
                    required
                  />
                </div>

                <div className="col-6">
                  <text className="form-label">Post Code</text>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    placeholder="Post Code"
                    required
                  />
                </div>

                <div className="col-6">
                  <text className="form-label">State/Territory</text>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    placeholder="State/Territory"
                    required
                  />
                </div>

                <div className="col-sm-2 col-md-2 col-lg-3">
                  <div className=""></div>
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
