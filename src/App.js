import React from "react";
import PropTypes from "prop-types";
import Counter from "./container/pages/counter";
import Login from "./container/pages/login";
import Connect from "./store/connect";
import Header from "./container/organisms/header";
import Dashboard from "./container/Dashboard";

const App = ({ auth }) => {
  return (
    <div className="full-screen">
      <div className="d-flex d-flex-align-center d-flex-justify-center h-100">
        {auth.isLogged ? (
          <>
            <Header />
            <Counter />
          </>
        ) : (
          <Login />
        )}
      </div>
    </div>
  );
};

App.propTypes = {
  auth: PropTypes.shape({
    isLogged: PropTypes.bool
  }).isRequired
};

const mapStateToProps = ({ counter,auth }, props) => {
  return {
    counter,
    auth,
    ...props
  };
};

export default Connect(mapStateToProps)(App);