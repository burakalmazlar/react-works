import { Fragment } from "react";
import MainHeader from "./MainHeader";

const Layout = (props) => {
  return (
    <Fragment>
      <MainHeader onToggleCart={props.onToggleCart} />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
