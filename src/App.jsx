import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Article from "./pages/Article";
import BareAct from "./pages/BareAct";
import CaseLaw from "./pages/CaseLaw";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article/:id" element={<Article />} />
          <Route path="/act/:actId" element={<BareAct />} />
          <Route path="/case/:caseId" element={<CaseLaw />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
