import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const QuotesPage = React.lazy(() => import("./pages/quotes-page"));
const NewQuotePage = React.lazy(() => import("./pages/new-quote-page"));
const NotFoundPage = React.lazy(() => import("./pages/not-found-page"));

function App() {
  return (
    <Layout>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Navigate replace to="/quotes" />} />
          <Route path="/quotes/*" element={<QuotesPage />} />
          <Route path="/new-quote" element={<NewQuotePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
