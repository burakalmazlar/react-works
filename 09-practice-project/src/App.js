import { Navigate, Route, Routes } from "react-router-dom";

import Layout from "./components/layout/Layout";
import QuotesPage from "./pages/quotes-page";
import NewQuotePage from "./pages/new-quote-page";
import NotFoundPage from "./pages/not-found-page";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate replace to="/quotes" />} />
        <Route path="/quotes/*" element={<QuotesPage />} />
        <Route path="/new-quote" element={<NewQuotePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
