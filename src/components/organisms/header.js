import React from "react";
import { logoutAction } from "../../store/reducers/auth";
import useStore from "../../store/hooks/useStore";

const Header = () => {
  const {
    dispatch,
    store: { auth }
  } = useStore();
  const logoutHandler = () => dispatch(logoutAction());
  return (
    <div className="top-position d-flex d-flex-justify-between d-flex-align-center w-100">
      <div className="container w-100">
        <div className="d-flex d-flex-justify-between d-flex-align-center w-100">
          <p className="logo p-center">
            Context + useState ={" "}
            <span role="img" aria-label="Coração">
              ❤️
            </span>
          </p>
          <div className="d-flex d-flex-align-center">
            <p className="m-right-10 color-dark">Olá, {auth.user}</p>
            <button onClick={logoutHandler} className="btn logout">
              Sair
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;