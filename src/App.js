import React from "react";
import "./style.css";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Logout from "./Logout";
import { Route, Switch } from "react-router-dom";
import Drawer from "./Drawer";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    display: "flex"
  }
});

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Drawer />
      <Switch>
        <Route exact from="/" render={props => <Dashboard {...props} />} />
        <Route exact path="/profile" render={props => <Profile {...props} />} />
        <Route exact path="/logout" render={props => <Logout {...props} />} />
      </Switch>
    </div>
  );
}
