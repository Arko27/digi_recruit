import {
  FaWhatsapp,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import foot from "../../Assets/Company Logo.PNG";
import "./footer.css";

var arrow = <MdKeyboardArrowRight style={{ width: "2rem", width: "2rem" }} />;
const qlinks = [
  { link: "", text: "Platform" },
  { link: "", text: "Services" },
];
const offsites = [
  { link: "", text: "Our Approach" },
  { link: "", text: "Data Science" },
];

const blog = [
  { link: "", text: "Blog" },
  { link: "", text: "WHS Regulation" },
  { link: "", text: "FAQs" },
];

const comp = [
  { link: "", text: "About" },
  { link: "", text: "Pricing" },
  { link: "", text: "Contact" },
];

const social = [
  { icon: <FaWhatsapp />, link: "", id: "wp" },
  { icon: <FaFacebook />, link: "", id: "fb" },
  { icon: <FaLinkedin />, link: "", id: "li" },
  { icon: <FaInstagram />, link: "", id: "insta" },
];

function Footer() {
  return (
    <div className="foot">
      <div className="container">
        <div className="row gy-3 mt-3">
          <div className="col-sm-6 col-md-6 col-lg-2">
            <div className="card f">
              <div className="card-body">
                <h5 className="card-title f">Business Solution </h5>
                {qlinks.map((i) => (
                  <p className="card-text f">
                    {arrow}
                    <a href={i.link}>{i.text}</a>
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-6 col-lg-2">
            <div className="card f">
              <div className="card-body">
                <h5 className="card-title f">Science</h5>
                {offsites.map((i) => (
                  <p className="card-text f">
                    {arrow}
                    <a href={i.link}>{i.text}</a>
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-6 col-lg-2">
            <div className="card f">
              <div className="card-body">
                <h5 className="card-title f">Resources</h5>
                {blog.map((i) => (
                  <p className="card-text f">
                    {arrow}
                    <a href={i.link}>{i.text}</a>
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-6 col-lg-2">
            <div className="card f">
              <div className="card-body">
                <h5 className="card-title f">Company</h5>
                {comp.map((i) => (
                  <p className="card-text f">
                    {arrow}
                    <a href={i.link}>{i.text}</a>
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-6 col-lg-4">
            <div className="card f">
              <div className="card-body">
                <h5 className="card-title f">Connect With Us</h5>
                <p className="card-text fs">
                  {social.map((i) => (
                    <a href={i.link} id={i.id}>
                      {i.icon}
                    </a>
                  ))}
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-6 col-lg-5">
            <div className="card f">
              <div className="card-body">
                <h5 className="card-title">
                  <a className="card-text f">
                    <img
                      src={foot}
                      className="card-img-top"
                      id="foot-img"
                      alt=""
                    ></img>
                  </a>
                </h5>
                We acknowledge the Traditional Owners of the land where we work
                and live, the Gadigal people of the Eora Nation and pay our
                respects to Elders past, present, and emerging. We celebrate the
                stories, culture and traditions of Aboriginal and Torres Strait
                Islander Elders of all communities who also work and live on
                this land.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
