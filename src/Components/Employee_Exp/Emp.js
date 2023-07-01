import "./emp.css";
import { RiFolderReceivedLine, RiSurveyLine } from "react-icons/ri";
import { BsSendX } from "react-icons/bs";

function Emp() {
  return (
    <>
      <div className="container a d-flex justify-content-center text-center">
        The Employee Experience
      </div>
      <div className="container">
        <div className="row gy-3 my-3">
          <div className="col-md-12 col-lg-2"></div>
          <div className="col-md-12 col-lg-8">
            <div className="card-text fcap text-center" id="small">
              We’re making your people a priority in every aspect of the InCheq
              experience. With user-experience at the forefront of our product,
              we’ve prioritised accessibility to engage all employees.
            </div>
            <div className="col-md-12 col-lg-2"></div>
          </div>
        </div>

        <div className="row gy-3 my-3">
          <div className="col-md-12 col-lg-4">
            <div className="card justify-content c h-100">
              <i className="l text-center">
                <RiFolderReceivedLine/>
              </i>
              <p className="heading text-center">Receive an Invitation</p>
              <p className="headtext">
                We’re giving employees the freedom to complete the survey when
                and how it suits them. With our blended approach of email and
                sms survey dissemination, we ensure accessibility that caters to
                employees with limited computer access, and geographically
                diverse workforces.
              </p>
            </div>
          </div>

          <div className="col-md-12 col-lg-4">
            <div className="card justify-content h-100 c">
              <i className="l text-center">
                <RiSurveyLine />
              </i>
              <p className="heading text-center">Engage with the Survey</p>
              <p className="headtext">
                The user experience of our products is a high priority for us.
                By leveraging responsive design technology, a clear and
                intuitive user interface, and a consistent response style, we’re
                simplifying organisational surveys to maximise the quality of
                employee feedback.
              </p>
            </div>
          </div>

          <div className="col-md-12 col-lg-4">
            <div className="card justify-content h-100 c">
              <i className="l text-center">
                <BsSendX />
              </i>
              <p className="heading text-center">Submit Anonymously</p>
              <p className="headtext">
                At InCheq, we believe that trust is the foundation of valuable
                feedback. That's why we're committed to protecting the privacy
                of our respondents by keeping all survey data confidential in a
                hope to empower people to speak their mind!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Emp;
