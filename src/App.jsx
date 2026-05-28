import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "./utils/scrollToTop";
import Layout from "./components/layout/Layout";

const Home = lazy(() => import("./pages/Home"));
const CategoryProducts = lazy(() => import("./pages/CategoryProducts"));
const ProductDetailPage = lazy(() => import("./pages/ProductDetailPage"));
const Checkout = lazy(() => import("./pages/Checkout"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/:categoryName" element={<CategoryProducts />} />
          <Route
            path="/:categoryName/:itemName"
            element={<ProductDetailPage />}
          />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
