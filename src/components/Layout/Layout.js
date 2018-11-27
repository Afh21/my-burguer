import React from "react";
// HOC
import Auxiliary from "../../hoc/Auxiliary";
// Css
import classes from "./Layout.css";

const layout = props => (
  <Auxiliary>
    <div>Toolbar, Sidebar</div>
    <main className={classes.Content}>{props.children}</main>
  </Auxiliary>
);

export default layout;
