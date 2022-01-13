import Head from "next/head";
import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";
import { Fragment } from "react";

function Layout(props) {
  return (
    <Fragment>
      <div>
        <MainNavigation />
        <main className={classes.main}>{props.children}</main>
      </div>
    </Fragment>
  );
}

export default Layout;
