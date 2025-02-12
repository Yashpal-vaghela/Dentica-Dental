import React, { useEffect } from "react";
import "./App.css";
import "./css/style.css";
import Nav from "./component/Nav";
import Footer from "./component/Footer";
import AllRoutes from "./component/AllRoutes";
import "./css/responsive.css";
import "./css/admin.css";
import { FaArrowUp } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import Header from "./component/Header";
import SideNav from "./component/SideNav";
import AdminFooter from "./component/AdminFooter";

function App() {
  const location = useLocation();
  /* check for url start */
  const validRoutes = [
    "/",
    "/about",
    "/product",
    "/digital-dentistry",
    "/blog",
    "/carrier",
    "/contact",
    "/review",
    "/events",
    "/gallery",
    "/social-links",
    "/terms-and-condition"
  ];
  const isPathValid = (pathname) => {
    return (
      validRoutes.includes(pathname) ||
      pathname.match(/^\/(product|blog|events)\/[^/]+$/)
    );
  };
  const isNotFoundpage = !isPathValid(location.pathname);
  /* url checking over */

  /*checking for Admin url */
  const isAdminRoute =
    location.pathname.match("/admin") && location.pathname !== "/admin";
  const isDashboardPage = location.pathname === "/admin/dashboard";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        document.body.classList.add("scrolled");
      } else {
        document.body.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      {isAdminRoute && <Header />}
      {isAdminRoute && <SideNav />}
      {!isNotFoundpage && <Nav />}
      <AllRoutes />
      <a href="#" className="back-to-top" onClick={scrollToTop}>
        <FaArrowUp />
      </a>
      {!isNotFoundpage && <Footer />}
      {isAdminRoute && <AdminFooter isDashboardPage={isDashboardPage} />}
    </div>
  );
}

export default App;
