import { Suspense } from "react";

import { Outlet } from "react-router-dom";

import Header from "./header/Header";
import Footer from "./footer/Footer";

const Layout = () => {
  return (
    <>
      {/* Global header layout container */}
      <Header />

      {/* Core main wrapper where nested sub-route pages populate dynamically */}
      <main className="flex flex-col gap-40">
        <Suspense
          fallback={
            <div className="text-center py-40 text-lg font-bold">
              Loading Page...
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </main>

      {/* Global footer layout container */}
      <Footer />
    </>
  );
};

export default Layout;
