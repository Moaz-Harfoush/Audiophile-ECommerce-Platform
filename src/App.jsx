import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import OtherLinks from "./pages/OtherLinks";
import ScrollToTop from "./components/utils/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryName" element={<OtherLinks />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
