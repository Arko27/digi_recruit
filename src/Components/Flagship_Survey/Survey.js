import "./survey.css";
import { RiFilePaper2Line } from "react-icons/ri";
import { AiOutlineCheckCircle } from "react-icons/ai";

function Survey() {
  return (
    <>
      <div className="container a d-flex justify-content-center text-center">
        Flagship Survey
      </div>
      <div className="container">
        <div className="row gy-3 my-3">
          <div className="col-md-12 col-lg-2"></div>
          <div className="col-md-12 col-lg-8">
            <div className="card-text fcap text-center">
              Workplace Psychosocial <br />
              Hazard Assessment
              <div id="small">
                Drive organisational change with a survey that’s mapped to
                regulations.
              </div>
            </div>
            <div className="col-md-12 col-lg-2"></div>
          </div>
        </div>

        <div className="row gy-3 my-3">
          <div className="col-md-12 col-lg-6">
            <div className="card justify-content h-100 c">
              <i className="l text-center">
                <RiFilePaper2Line />
              </i>
              <p className="heading text-center">
                Aligned with Australian regulations
              </p>
              <p className="headtext">
                Our flagship survey is aligned to the State and National
                regulatory bodies Codes of Practice on managing psychosocial
                hazards and measures the 16 psychosocial hazards identified
                within these regulatory standards. Designed with the expertise
                of a specialist workplace psychologist, this survey assists
                employers in becoming compliant with state and national
                regulations for managing psychosocial hazards. The best part?
                We’ve packaged all this into only 40 questions, which only takes
                employees 10 minutes to complete.
              </p>
            </div>
          </div>

          <div className="col-md-12 col-lg-6">
            <div className="card justify-content h-100 c">
              <i className="l text-center">
                <AiOutlineCheckCircle />
              </i>
              <p className="heading text-center">End-to-end solution</p>
              <p className="headtext">
                Using industry-leading expertise, we’re making psychological
                knowledge accessible in the workplace by utilising data-mapping
                algorithms that transform employee feedback into psychosocial
                risk profiles. With organisation-wide oversight, we transform
                survey responses into best-practice action plans and
                recommendations to assist organisations in mitigating, managing,
                or eliminating identified hazards. Understanding your data has
                never been easier with access to live response rates, dynamic
                risk profiles, and department-specific recommendations and
                action plans.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Survey;
