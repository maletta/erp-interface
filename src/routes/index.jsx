import React from "react";
import { Route, Switch, Router } from "react-router-dom";
import { createBrowserHistory } from 'history';
import Private from './Private';
import SignUp from "../components/pages/SinglePages/SignUp";
import Dashboard from "../components/pages/Dashboard";
import Login from "../components/pages/login";
import Counter from "../components/pages/counter";
import TablePage from "../components/pages/test/TablePage";
import EnhancedTable from "../components/pages/test/TablePage2";
import CardPage from "../components/pages/test/CardPage";
import AccountsPayable from "../components/pages/AccountsPayable";





const history = createBrowserHistory();
history.listen(() => {});

const AppRouter = ({children}) => {
  return (
    <Router history={history}>
        <Switch>
          <Route path={"/signup"}> <SignUp /> </Route>
          <Route path={"/dashboard"}> <Dashboard /></Route>
          <Route path={"/counter"}> <Counter /></Route>
          <Route path={"/table"}> <TablePage/> </Route>
          <Route path={"/table2"}> <EnhancedTable/> </Route>
          <Route path={"/card"}> <CardPage/> </Route>
          <Route exact path={"/"} > <AccountsPayable/> </Route>

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
