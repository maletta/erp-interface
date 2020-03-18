import React from "react";
import { Route, Switch, Router } from "react-router-dom";
import { createBrowserHistory } from 'history';
import Private from './Private';
import SignUp from "../components/pages/SinglePages/SignUp";
import Dashboard from "../components/pages/Dashboard";
import Login from "../components/pages/login";
import Counter from "../components/pages/counter";
import TestPage from "../components/pages/test";


const history = createBrowserHistory();
history.listen(() => {});

const AppRouter = ({children}) => {
  return (
    <Router history={history}>
        <Switch>
          <Route path={"/signup"}> <SignUp /> </Route>
          <Route path={"/dashboard"}> <Dashboard /></Route>
          <Route path={"/counter"}> <Counter /></Route>
          <Route exact path={"/"} ><TestPage/></Route>

          <Private>
            <Switch>
              <Route path={"/login"}><Login /></Route>
            </Switch>
          </Private>
          
        </Switch>
        {children}
    </Router>
  );
};

export default AppRouter;
