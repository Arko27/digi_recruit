import "./App.css";
import React, { Fragment } from "react";
import Navbar from "./Components/Header/Navbar";
import { Link } from "react-router-dom";
import Car from "./Components/Carousel/Car";
import About from "./Components/About/About";
import Feature from "./Components/Features/Feature";
import Survey from "./Components/Flagship_Survey/Survey";
import Emp from "./Components/Employee_Exp/Emp";
import Adv from "./Components/Advantage/Adv";
import Faq from "./Components/Faq/Faq";
import Footer from "./Components/Footer/Footer";

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
      <a href="#about" className="nav-link">
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
  {
    opt: (
      <Link to="/login" className="nav-link">
        Login
      </Link>
    ),
  },
];

function App() {
  return (
    <Fragment>
      <Navbar a={arr} />
      <Car />
      <About />
      <Feature />
      <Survey />
      <Emp />
      <Adv />
      <Faq />
      <Footer/>
    </Fragment>
  );
}

export default App;
