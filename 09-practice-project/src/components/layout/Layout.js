import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";
import QuotesPage from "../../pages/quotes-page";
import { Redirect, Route } from "react-router-dom";
import NewQuotePage from "../../pages/new-quote-page";

const Layout = (props) => {
  return (
    <>
      <MainNavigation />
      <main className={classes.main}>
        <Route exact path="/">
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes">
          <QuotesPage />
        </Route>
        <Route path="/new-quote">
          <NewQuotePage />
        </Route>
      </main>
    </>
  );
};

export default Layout;
