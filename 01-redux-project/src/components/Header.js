import { useDispatch, useSelector } from "react-redux";
import useAuth from "../hooks/use-auth";
import classes from "./Header.module.css";

const Header = () => {
  const { auth, logout } = useAuth();
  const { isAuthenticated } = auth;

  return (
    <header className={classes.header}>
      <h2>Redux</h2>
      {isAuthenticated && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
