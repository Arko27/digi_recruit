import "./adv.css";
import { FaAngleRight } from "react-icons/fa";

function Adv() {
  return (
    <>
      <div className="container a d-flex justify-content-center text-center">
        Advantages
      </div>
      <div className="container">
        <div className="row gy-3 my-3">
          <div className="col-md-12 col-lg-2"></div>
          <div className="col-md-12 col-lg-8">
            <div className="card-text fcap text-center">
              Packed with benefits to boost efficiency
            </div>
            <div className="col-md-12 col-lg-2"></div>
          </div>
        </div>

        <div className="row gy-3 my-3">
          <div className="col-md-12 col-lg-1" />
          
          <div className="col-md-12 col-lg-5">
            <div className="card justify-content adv h-100">
              <i className="tick">
                <FaAngleRight />
                <i className="advt">Improve culture</i>
              </i>
              <i className="tick">
                <FaAngleRight />
                <i className="advt">Boost productivity</i>
              </i>
              <i className="tick">
                <FaAngleRight />
                <i className="advt">Promote well-being</i>
              </i>
              <i className="tick">
                <FaAngleRight />
                <i className="advt">Enhance teamwork</i>
              </i>
              <i className="tick">
                <FaAngleRight />
                <i className="advt">Improve decision-making</i>
              </i>
            </div>
          </div>

          <div className="col-md-12 col-lg-5">
            <div className="card justify-content adv h-100">
            <i className="tick">
                <FaAngleRight />
                <i className="advt">Foster a return-to-work culture</i>
              </i>
              <i className="tick">
                <FaAngleRight />
                <i className="advt">Attract and keep skilled employees</i>
              </i>
              <i className="tick">
                <FaAngleRight />
                <i className="advt">Decrease workers' compensation claims</i>
              </i>
              <i className="tick">
                <FaAngleRight />
                <i className="advt">Minimise stress leave and burnout</i>
              </i>
              <i className="tick">
                <FaAngleRight />
                <i className="advt">Be compliant with regulatory requirements</i>
              </i>
            </div>
          </div>

          <div className="col-md-12 col-lg-1" />
        </div>
      </div>
    </>
  );
}

export default Adv;
