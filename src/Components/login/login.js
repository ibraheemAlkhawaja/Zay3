import { useState } from "react";
import "./login.css";
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Config from "../../Constants/enviroment";
import useInput from "../../Custom Hooks/useInput";
import usePost from "../../Custom Hooks/usePost";
import SignInService from "../../Services/SignInService";
import Cookies from "js-cookies";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setusername] = useState();
  const [password, setpassword] = useState();
  const navigate = useNavigate();
  const [handleSubmit, loading] = usePost(SignInService.post, (res) => {
    console.log("aidjiasjdi");
    Cookies.setItem("token", res.data.token);
    navigate("/");
  });
  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit({
      username: username,
      password: password,
    });
  };
  return (
    <div className="signUp">
      <div className="wrapper">
        <form onSubmit={onSubmit}>
          <h1>login</h1>
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
export default Login;
