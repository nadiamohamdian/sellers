// src/router/AppRouter.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import Dashboard from "../pages/DashboardPage.tsx";
import Orders from "../pages/Orders";
import Products from "../pages/Products";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/Dashboard" element={<Layout><Dashboard /></Layout>} />
        <Route path="/orders" element={<Layout><Orders /></Layout>} />
        <Route path="/products" element={<Layout><Products /></Layout>} />
      </Routes>
    </Router>
  );
}