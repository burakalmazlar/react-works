import { Fragment } from "react";

import Header from "./components/Header";
import Auth from "./components/Auth";
import Counter from "./components/Counter";

import useAuth from "./hooks/use-auth";

function App() {
  const { auth } = useAuth();
  const { isAuthenticated } = auth;
  return (
    <Fragment>
      <Header />
      {!isAuthenticated && <Auth />}
      {isAuthenticated && <Counter />}
    </Fragment>
  );
}

export default App;
