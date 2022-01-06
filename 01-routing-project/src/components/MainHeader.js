import { NavLink } from "react-router-dom";

import classes from "./MainHeader.module.css";

const MainHeader = (props) => {
  const pages = ["welcome", "products"];
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          {pages.map((page) => {
            return (
              <li key={page}>
                <NavLink activeClassName={classes.active} to={`/${page}`}>
                  {page}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
