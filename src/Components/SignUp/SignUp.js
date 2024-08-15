import { useState } from "react";
import "./SignUp.css";
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Config from "../../Constants/enviroment";
import useInput from "../../Custom Hooks/useInput";
import usePost from "../../Custom Hooks/usePost";
import SignUpService from "../../Services/SignUpService";
const SignUp = () => {
  const [username, setusername] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [handelsubmit, loading] = usePost(SignUpService.post);
  const onSubmit = (e) => {
    e.preventDefault();
    handelsubmit({
      username: username,
      email: email,
      password: password,
    });
  };
  return (
    <div className="signUp">
      <div className="wrapper">
        <form onSubmit={onSubmit}>
          <h1>SignUp</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="UserName"
              required
              onChange={(e) => {
                setusername(e.target.value);
              }}
            />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input
              type="text"
              placeholder="Email"
              required
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
            <MdEmail className="icon" />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              required
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
            <FaLock className="icon" />
          </div>
          <div className="remmber-forgot">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot Password</a>
          </div>
          <button type="submit">
            {loading === true
              ? "تم التسجيل بنجاح"
              : loading === false
              ? "حدث خطأ"
              : loading === null
              ? "submit"
              : "الرجاء الانتظار"}
          </button>
          <div className="register-link">
            <p>
              dont have an account? <a href="#">Register</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
