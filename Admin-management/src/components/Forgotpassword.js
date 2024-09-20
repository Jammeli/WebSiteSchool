import React, { useState } from "react";
import Inputs from "./Inputs";
import { jwtDecode } from "jwt-decode";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { setAuth } from "../Util/setAuth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Forgotpassword() {
  const [form, setForm] = useState({});
  const [user, setUser] = useState({});
  const [isConnected, setIsconnected] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://io.trustensia.com/admin/forgot-password", form)
      .then((response) => {
        toast.success("Check your email adress.", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setTimeout(() => {
          navigate("/version1/login");
        }, 3000);
      })
      .catch((error) => {
        console.log(error.response.data);
        setErrors(error.response.data);
      });
  };
  return (
    <div className="login-page-wrap">
      <ToastContainer />
      <div className="login-page-content">
        <div className="login-box">
          <div className="item-logo">
            <img src="img/logo2.png" alt="logo" />
          </div>
          <form onSubmit={onSubmit} className="login-form">
            <div className="form-group">
              <label>Identifiant</label>
              <Inputs
                name="email"
                type="text"
                placeholder="Votre identifiant"
                className="form-control"
                onChangeHandler={onChange}
              />
              <i className="far fa-envelope"></i>
              {errors && (
                <div className="badge bg-danger">{errors.message}</div>
              )}
            </div>
            <div className="form-group d-flex align-items-center justify-content-between">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="remember-me"
                />
              </div>

              <Link to="/version1/Login" className="forgot-btn">
                Login !
              </Link>
            </div>
            <div className="form-group">
              <button type="submit" className="login-btn">
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Forgotpassword;
