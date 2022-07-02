import React, { useState } from "react";

import { CSSTransition } from "react-transition-group";
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";
import RemoveRedEyeRoundedIcon from "@mui/icons-material/RemoveRedEyeRounded";

import "../styles/auth.css";

const Auth = () => {
  const [isLoginPage, setIsLoginPage] = useState(true);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const passwordVisibilityHandler = () => {
    setIsPasswordVisible((prevValue) => !prevValue);
  };

  const loginAndSignupHandler = () => {
    setIsLoginPage((prevValue) => !prevValue);
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="auth-main-container">
      <div className="auth-contianer">
        <CSSTransition
          in={isLoginPage}
          timeout={300}
          classNames="loginAndSignup-button"
          unmountOnExit
        >
          <form onSubmit={submitHandler}>
            <h1>WELCOME TO JORDAN SHOES</h1>
            <p>IF YOU HAVE ACCONT JUST LOGIN INTO YOUR ACCOUNT.</p>
            <input type="email" name="email" placeholder="EMAIL" />
            <div>
              <input
                type={isPasswordVisible ? "text" : "password"}
                name="password"
                placeholder="PASSWORD"
                id="password"
              />
              <label htmlFor="password" onClick={passwordVisibilityHandler}>
                {isPasswordVisible ? (
                  <RemoveRedEyeRoundedIcon />
                ) : (
                  <VisibilityOffRoundedIcon />
                )}
              </label>
            </div>
            <button type="submit">LOGIN</button>
            <p>
              IF YOU DON’T HAV E ACCOUNT YOU NEED TO SIGN UP FOR MAKING NEW
              ACCOUNT.
            </p>
            <button onClick={loginAndSignupHandler}>GO TO SIGN UP</button>
          </form>
        </CSSTransition>
        <CSSTransition
          in={!isLoginPage}
          timeout={300}
          classNames="loginAndSignup-button"
          unmountOnExit
        >
          <form onSubmit={submitHandler}>
            <h1>SIGN UP</h1>
            <p>
              ATTENTION TO SAVE YOUR PASSWORD OR MEMORIAZE IT,BECAUSE THERE’S NO
              WAY BACK.
            </p>
            <input type="text" name="name" placeholder="NAME" />
            <input type="email" name="email" placeholder="EMAIL" />
            <div>
              <input
                type={isPasswordVisible ? "text" : "password"}
                name="password"
                placeholder="PASSWORD"
                id="password"
              />
              <label htmlFor="password" onClick={passwordVisibilityHandler}>
                {isPasswordVisible ? (
                  <RemoveRedEyeRoundedIcon />
                ) : (
                  <VisibilityOffRoundedIcon />
                )}
              </label>
            </div>
            <div>
              <input
                type={isPasswordVisible ? "text" : "password"}
                name="password"
                placeholder="PASSWORD AGAIN"
                id="password"
              />
              <label htmlFor="password" onClick={passwordVisibilityHandler}>
                {isPasswordVisible ? (
                  <RemoveRedEyeRoundedIcon />
                ) : (
                  <VisibilityOffRoundedIcon />
                )}
              </label>
            </div>
            <button type="submit">SIGN UP</button>
            <button onClick={loginAndSignupHandler}>GO TO LOGIN</button>
          </form>
        </CSSTransition>
      </div>
    </div>
  );
};

export default Auth;
