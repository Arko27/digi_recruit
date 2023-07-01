import "./feature.css";
import { PiStackSimpleBold } from "react-icons/pi";
import { VscOrganization } from "react-icons/vsc";
import { BsGraphUpArrow } from "react-icons/bs";

function Feature() {
  return (
    <>
      <div className="container a d-flex justify-content-center text-center">
        Features
      </div>
      <div className="container">
        <div className="row gy-3 my-3">
          <div className="col-md-12 col-lg-2"></div>
          <div className="col-md-12 col-lg-8">
            <div className="card-text fcap text-center">
              Unlocking the power of
              employee feedback
              through data analytics.
            </div>
            <div className="col-md-12 col-lg-2"></div>
          </div>
        </div>

        <div className="row gy-3 my-3">
          <div className="col-md-12 col-lg-4">
            <div className="card justify-content c h-100">
              <i className="l text-center">
                <PiStackSimpleBold />
              </i>
              <p className="heading text-center">A simplified approach</p>
              <p className="headtext">
                While there are several state, national, and international
                standards, Australian employers only need one risk management
                solution. Our platform provides clinical expertise at the click
                of a button, simplifying your approach to managing workplace
                psychosocial hazards while ensuring compliance with work,
                health, and safety regulations.
              </p>
            </div>
          </div>

          <div className="col-md-12 col-lg-4">
            <div className="card justify-content h-100 c">
              <i className="l text-center">
                <VscOrganization />
              </i>
              <p className="heading text-center">Organisation-wide oversight</p>
              <p className="headtext">
                Our platform provides you with the tools you need to monitor and
                manage psychosocial hazards across the whole of your
                organisation. With our scalable survey delivery, we ensure that
                you can reach every employee in your organisation to get the
                complete picture.
              </p>
            </div>
          </div>

          <div className="col-md-12 col-lg-4">
            <div className="card justify-content h-100 c">
              <i className="l text-center">
                <BsGraphUpArrow />
              </i>
              <p className="heading text-center">Agile reporting</p>
              <p className="headtext">
                We make it easy for you to understand and act on the data
                insights provided with our dynamic reporting dashboard. This
                allows cross-departmental filtering capability giving you the
                ability to focus on the information that matters most to your
                organisation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feature;
