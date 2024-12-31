import React from "react";
import Navbar from "./components/Header";
import { useState } from "react";

// import App, Header, Footer, Matrix
import App from "./App";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Matrix from "./components/Matrix";


function Layout() {
  const [loaded, setLoad] = useState(false); // remember to change this to true

  setTimeout(() => {
    setLoad(true);
  }, 8000);

  return loaded ? (
    <>
      <Navbar />
      <App />
      <Footer />
    </>
  ) : (
    <>
      <Matrix />
    </>
  );
}

export default Layout;
