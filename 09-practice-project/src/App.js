import { Redirect, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import QuotesPage from "./pages/quotes-page";
import NewQuotePage from "./pages/new-quote-page";

function App() {
  return (
    <Layout>
      <Route exact path="/">
        <Redirect to="/quotes" />
      </Route>
      <Route path="/quotes">
        <QuotesPage />
      </Route>
      <Route path="/new-quote">
        <NewQuotePage />
      </Route>
    </Layout>
  );
}

export default App;
