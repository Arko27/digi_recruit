import "./about.css";

function About() {
  return (
    <>
      <div className="container a d-flex justify-content-center text-center">
      About Us
      </div>
      <div className="container" id="about">
        <div className="row gy-3 my-3">
          <div className="col-md-12 col-lg-1" />
          <div className="col-md-12 col-lg-8">
            <p className="card-text first">
              We’re helping decision-makers
              determine the root cause of
              organisational problems in order to
              make changes that have real impact.
            </p>
          </div>
        </div>
        <br />

        <div className="row gy-3 my-3">
          <div className="col-md-12 col-lg-5" />
          <div className="col-md-12 col-lg-6">
            <p className="card-text second">
              Our platform provides employers with rich data insights into the
              employee experience, whilst assisting them in meeting their legal
              obligations. By investing in creating a psychologically safe
              workplace, organisations can see enormous benefits.
            </p>
          </div>
          <div className="col-md-12 col-lg-1" />
        </div>
      </div>
    </>
  );
}

export default About;
