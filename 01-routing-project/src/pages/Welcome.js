import { Route, Switch } from "react-router-dom";

const Welcome = (props) => {
  return (
    <section>
      <h1>Welcome Page</h1>
      <Switch>
        <Route path="/welcome/new-user">
          <p>Welcome New User!</p>
        </Route>
        <Route path="/welcome">
          <p>Welcome back!</p>
        </Route>
      </Switch>
    </section>
  );
};

export default Welcome;
