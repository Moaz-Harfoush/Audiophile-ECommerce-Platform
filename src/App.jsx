import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "./utils/ScrollToTop";

import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import CategoryProducts from "./pages/CategoryProducts";
import ProductDetailPage from "./pages/ProductDetailPage";
import NotFound from "./pages/NotFound";

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
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
