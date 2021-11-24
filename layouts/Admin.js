import React from "react";

import Sidebar from "components/Sidebar/Sidebar.js";
import Footer from "components/Footers/Footer.js";

export default function Admin({ children }) {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-gradient-test">
        <div className="relative md:pt-32 pb-24 pt-12 bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500">
        </div>
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          {children}
        </div>
      </div>
    </>
  );
}
