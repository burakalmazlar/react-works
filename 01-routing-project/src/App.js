import { Redirect, Route, Switch } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import Product from "./pages/Product";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Route exact path="/">
          <Redirect to="/welcome" />
        </Route>
        <Route path="/welcome">
          <Welcome></Welcome>
        </Route>
        <Switch>
          <Route path="/products" exact>
            <Products></Products>
          </Route>
          <Route path="/products/help">
            <p>Products help page.</p>
          </Route>
          <Route path="/products/:id">
            <Product />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
