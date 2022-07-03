import React from "react";

import { useDispatch } from "react-redux/es/exports";
import { authActions } from "../store/auth-slice";
import "../styles/logoutpopup.css";

const LogoutPopUp = ({ logoutPopUpHandler }) => {
  const dispatch = useDispatch();

  const logout = () => {
    logoutPopUpHandler();
    dispatch(authActions.Logout());
  };
  return (
    <>
      <section className="logout-pop-up">
        <h3>DO WANT TO LOGOUT?</h3>
        <div>
          <button onClick={logout}>LOGOUT</button>
          <button onClick={logoutPopUpHandler}>CANCEL</button>
        </div>
      </section>
      <div className="logout-pop-up-close" onClick={logoutPopUpHandler}></div>
    </>
  );
};

export default LogoutPopUp;
