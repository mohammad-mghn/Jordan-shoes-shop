import React, { useState, useRef } from "react";

import { useDispatch } from "react-redux";
import { CSSTransition } from "react-transition-group";
import RemoveRedEyeRoundedIcon from "@mui/icons-material/RemoveRedEyeRounded";
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";

import { authActions } from "../store/auth-slice";
import { cartActions } from "../store/cart-slice";

import "../styles/auth.css";

const Auth = () => {
  const dispatch = useDispatch();

  const logInRef = useRef();
  const signUpRef = useRef();

  const [error, setError] = useState(null);
  const [isLoginPage, setIsLoginPage] = useState(true);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [islogInButtonActive, setisLogInButtonActive] = useState(false);
  const [isSignUpButtonActive, setisSignUpButtonActive] = useState(false);

  const passwordVisibilityHandler = () => {
    setIsPasswordVisible((prevValue) => !prevValue);
  };

  const loginAndSignupHandler = () => {
    setError(null);
    setIsLoginPage((prevValue) => !prevValue);
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const ButtonIsDisableHandler = () => {
    if (isLoginPage) {
      const logInForm = logInRef.current;

      if (
        logInForm[0].value.trim().length !== 0 &&
        logInForm[1].value.trim().length !== 0
      ) {
        setisLogInButtonActive(true);
      } else {
        setisLogInButtonActive(false);
      }
    } else {
      const signUpForm = signUpRef.current;

      if (
        signUpForm[2].value === signUpForm[3].value &&
        signUpForm[0].value.trim().length !== 0 &&
        signUpForm[1].value.trim().length !== 0 &&
        signUpForm[2].value.trim().length !== 0
      ) {
        setisSignUpButtonActive(true);
      } else {
        setisSignUpButtonActive(false);
      }
    }
  };

  const signUpHandler = async () => {
    setError(null);
    try {
      const response = await fetch(
        "https://vito-shopping-app-default-rtdb.asia-southeast1.firebasedatabase.app/users.json"
      );

      var usersList = await response.json();

      // next line is because of firebase don't return empty array of users return null
      // which is useless and cause bug
      const localUsersList = usersList ? usersList : [];

      if (isLoginPage) {
        const userEmail = logInRef.current[0].value;
        const userPassword = logInRef.current[1].value;

        const existingUser = localUsersList.find(
          (user) => user.email === userEmail
        );

        if (existingUser) {
          if (existingUser.password === userPassword) {
            dispatch(authActions.Login(existingUser));

            dispatch(
              cartActions.setItemsList(
                existingUser.cartItemsList ? existingUser.cartItemsList : []
              )
            );

            localStorage.setItem(
              "jordan-shop-user",
              JSON.stringify(existingUser)
            );
          } else {
            throw new Error("PASSWORD IS NOT CORRECT.");
          }
        } else {
          throw new Error("THERE IS NO ACCOUNT SIGNED UP WITH THIS EMAIL.");
        }
      } else {
        const user = {
          name: signUpRef.current[0].value,
          email: signUpRef.current[1].value,
          password: signUpRef.current[2].value,
        };

        localStorage.setItem("jordan-shop-user", JSON.stringify(user));

        localUsersList.push(user);

        await fetch(
          "https://vito-shopping-app-default-rtdb.asia-southeast1.firebasedatabase.app/users.json",
          {
            method: "PUT",
            body: JSON.stringify(localUsersList),
          }
        );

        setError(null);

        signUpRef.current[0].value = "";
        signUpRef.current[1].value = "";
        signUpRef.current[2].value = "";

        dispatch(authActions.Login(user));
      }
    } catch (err) {
      setError(
        err.message === "Failed to fetch"
          ? "PLEASE CHECK YOUR NETWORK CONNECTION"
          : err.message
      );
    }
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
          <form
            onSubmit={submitHandler}
            ref={logInRef}
            onChange={ButtonIsDisableHandler}
          >
            <h1>WELCOME TO JORDAN SHOES</h1>
            <p>IF YOU HAVE ACCONT JUST LOGIN INTO YOUR ACCOUNT.</p>
            <input type="email" placeholder="EMAIL" />
            <div>
              <input
                type={isPasswordVisible ? "text" : "password"}
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
            <button
              type="submit"
              className={!islogInButtonActive && "disabled"}
              onClick={signUpHandler}
            >
              LOGIN
            </button>
            {error && <h4>{error}</h4>}
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
          <form
            onSubmit={submitHandler}
            ref={signUpRef}
            onChange={ButtonIsDisableHandler}
          >
            <h1>SIGN UP</h1>
            <p>
              ATTENTION TO SAVE YOUR PASSWORD OR MEMORIAZE IT,BECAUSE THERE'S NO
              WAY BACK.
            </p>
            <input type="text" placeholder="NAME" />
            <input type="email" placeholder="EMAIL" />
            <div>
              <input
                type={isPasswordVisible ? "text" : "password"}
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
                placeholder="PASSWORD AGAIN"
                id="password-again"
              />
              <label
                htmlFor="password-again"
                onClick={passwordVisibilityHandler}
              >
                {isPasswordVisible ? (
                  <RemoveRedEyeRoundedIcon />
                ) : (
                  <VisibilityOffRoundedIcon />
                )}
              </label>
            </div>
            <button
              type="submit"
              onClick={signUpHandler}
              disabled={!isSignUpButtonActive}
              className={!isSignUpButtonActive && "disabled"}
            >
              SIGN UP
            </button>

            {error && <h4>{error}</h4>}

            <button onClick={loginAndSignupHandler}>GO TO LOGIN</button>
          </form>
        </CSSTransition>
      </div>
    </div>
  );
};

export default Auth;
