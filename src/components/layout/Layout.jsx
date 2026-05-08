import { Outlet } from "react-router-dom";

import Header from "./header/Header";
import Footer from "./footer/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-40">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
