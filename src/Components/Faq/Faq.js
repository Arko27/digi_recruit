import "./faq.css";
import { BiDownArrowAlt } from "react-icons/bi";

var h = 0;

function Faq() {
  function show(event) {
    const i = event.target.id;
    console.log(i);
    const id = i.replace("ques", "ans");
    if (h % 2 == 1) {
      document.getElementById(id).style.display = "none";
      h = h - 1;
    } else {
      document.getElementById(id).style.display = "block";
      h = h + 1;
    }
  }

  return (
    <>
      <div className="container a d-flex justify-content-center text-center">
        Frequently Asked Questions
      </div>
      <div className="container">
        <div className="row gy-3 my-3">
          <div className="col-md-12 col-lg-2" />

          <div className="col-md-12 col-lg-8">
            <div className="card-text fcap ftf">
              <p className="fcap ftf text-center">
                Will DigiRecruit software helpo me demonstarte Work, Health,
                Safety compliance?
              </p>
              <p className="ftf" id="ans1" style={{ display: "none" }}>
                Yes. InCheq’s live and/or downloadable reporting provides
                information and tracking of psychosocial hazards which is an
                essential element of psychosocial risk management.
              </p>
              <BiDownArrowAlt
                id="ques1"
                onClick={show}
                style={{ cursor: "pointer", "width":"2rem", "width":"2rem", "color": "white"}}
              />
            </div>
          </div>

          <div className="col-md-12 col-lg-2" />

          <div className="col-md-12 col-lg-2" />
          <div className="col-md-12 col-lg-8">
            <div className="card-text fcap ft">
              <p className="fcap ft text-center">
                How do we manage survey fatigue and maximise survey engagement?
              </p>
              <p className="ftf" id="ans2" style={{ display: "none" }}>
                A common myth surrounding organisational change is that survey
                fatigue is driven by the amount and length of surveys deployed.
                However, research suggests that the number one driver of survey
                fatigue is actually the employee's perception that the
                organisation won’t act upon the results, and therefore it’s a
                waste of their time.
                <br />
                <br />
                Employees are far more likely to actively participate in future
                surveys when they understand the purpose and process. If an
                organisation promotes their commitment to achieving systemic
                change, and the benefits of employee participation, they can
                expect a much higher uptake and engagement.
                <br />
                <br />
                We provide all of our clients with a communications strategy to
                drive survey engagement, including tips for running a successful
                survey campaign.
              </p>
              <BiDownArrowAlt
                id="ques2"
                onClick={show}
                style={{ cursor: "pointer", "width":"2rem", "width":"2rem", "color": "white"}}
              />
            </div>
          </div>
          <div className="col-md-12 col-lg-2" />

          <div className="col-md-12 col-lg-2" />
          <div className="col-md-12 col-lg-8">
            <div className="card-text fcap ft">
              <p className="fcap ft text-center">
                Will I be able to filter survey results?
              </p>
              <p className="ftf" id="ans3" style={{ display: "none" }}>
                You’ll be able to filter all dynamic data visualisations by
                department, gender, location, and work type (ie. full-time,
                part-time etc.)
              </p>
              <BiDownArrowAlt
                id="ques3"
                onClick={show}
                style={{ cursor: "pointer", "width":"2rem", "width":"2rem", "color": "white"}}
              />
            </div>
          </div>
          <div className="col-md-12 col-lg-2" />

          <div className="col-md-12 col-lg-2" />
          <div className="col-md-12 col-lg-8">
            <div className="card-text fcap ft">
              <p className="fcap ft text-center">
                How will this reduce insurance claims?
              </p>
              <p className="ftf" id="ans4" style={{ display: "none" }}>
                Mental Injuries, also commonly called Psychological Injuries,
                are some of the most expensive workers compensation claims. They
                can cost up to four times more than claims relating to physical
                injuries. They also result in more time off work than physical
                injury claims.
                <br />
                <br />
                Psychological injuries at work can be caused by a range of
                psychosocial risks. By proactively identifying whether your
                workforce is experiencing psychosocial risks, you can put
                preventative measures in place, which will result in a reduction
                in psychological injuries, and workers compensation claims.
              </p>
              <BiDownArrowAlt
                id="ques4"
                onClick={show}
                style={{ cursor: "pointer", "width":"2rem", "width":"2rem", "color": "white"}}
              />
            </div>
          </div>
          <div className="col-md-12 col-lg-2" />
        </div>
      </div>
    </>
  );
}

export default Faq;
