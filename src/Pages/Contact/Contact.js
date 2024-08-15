import { SignUp } from "../../Components";
import {Footer} from "../../Section"
import "./Contact.css";
const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="text-contact">
          <span>Contact Us</span>
          <p>
            Proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum. Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
      <SignUp />
      <Footer />
    </>
  );
};
export default Contact;
