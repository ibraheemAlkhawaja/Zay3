import "./About.css";
import img1 from "../../Assets/img/about-hero.svg";
import Lottie from "lottie-react";
import img2 from "../../Assets/img/cycle.json"
import { Footer, OurBrand, OurService } from "../../Section/index";
const About = () => {
  return (
    <>
      <div className="container-fluid aboutUs">
        <div className="row row-cols-md-2 row-cols-sm-1">
          <div className="col">
            <div className="text-aboutUs">
              <h1>About Us</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          <div className="col">
            <div className="img-aboutUs">
              <Lottie animationData={img2} />
            </div>
          </div>
        </div>
      </div>
      <OurService />
      <OurBrand />
      <Footer />
    </>
  );
};
export default About;
