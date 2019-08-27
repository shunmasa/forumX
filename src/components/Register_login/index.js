import React from "react";
import MyButton from "../utils/button";
import Login from "./login";
import "./login_register.css";
const RegisterLogin = () => {
  return (
    <div className="page_wrapper">
      <div className="container">
        <div className="register_login_container">
          <div className="left">
            <h1>Register User</h1>
            <p style={{ fontSize: "20px" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
              corporis ipsa quis, repudiandae accusamus possimus, aliquid
              recusandae earum aspernatur voluptatem laborum dolore illo
              deleniti deserunt ipsum. Unde neque laborum quasi!
            </p>
            <MyButton
              type="default"
              title="Create an account"
              linkTo="/register"
              addStyles={{ margin: "10px 0 0 0" }}
            />
          </div>
          <div className="right">
            <h2 style={{ marginTop: "20px" }}>User Login</h2>
            <p style={{ fontSize: "15px" }}>
              If you have an account plese login
            </p>
            <Login />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterLogin;
