import React from "react";
import "./style.css";
import "./App.css";
import logo from "./raitlogop.png";

import {
  Drawer as MUIDrawer,
  ListItem,
  List,
  ListItemText
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
const drawerWidth = 190

const useStyles = makeStyles({
  drawer: {
    width: drawerWidth
 },
  drawerPaper: {
    width: drawerWidth
  }
});

const Drawer = props => {
  const { history } = props;
  const classes = useStyles();
  const itemsList = [
    {
      text: "Dashboard",
      onClick: () => history.push("/")
    },
    {
      text: "Profile",
      onClick: () => history.push("/profile")
    },
    {
      text: "Logout",
      onClick: () => history.push("/logout")
    }
  ];
  return (
    <MUIDrawer 
     variant="permanent" 
     className={classes.drawer}
     classes={{ paper: classes.drawerPaper}}
     >
    <div className="top-section">
        <div className="logo">
        <img src={logo} alt="RAIT" />
        </div>
    </div>
      <List className='drawer'>
        {itemsList.map((item, index) => {
          const { text, onClick } = item;
          return (
            <ListItem button key={text} onClick={onClick} >
              
              <ListItemText primary={text} className='t' />
            </ListItem>
          );
        })}
      </List>
    </MUIDrawer>
 
  );
};

export default withRouter(Drawer);
