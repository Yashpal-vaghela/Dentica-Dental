import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaPowerOff } from "react-icons/fa";
import Cookies from "js-cookie";
import axios from "axios";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1000) {
        // console.log("opened",isMenuOpen);
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleLogout = () => {
    Cookies.remove("token");
    axios.post("https://denticadentalstudio.com/api/logout", null, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`
      }
    })
      .then(response => {
        if (response.status === 200) {
          window.location.href = "/admin";

        } else {
          throw new Error("LogOut failed");
        }
      })
      .catch((error) => {
        console.error("LogOut error:", error);
      });

  };
  return (
    <div>
      <nav className="main-header navbar navbar-expand navbar-white navbar-light"
        style={{ zIndex: 1000 }}
      >

        {/* <!-- Left navbar links --> */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="pushmenu"
              href="#"
              role="button"
              onClick={toggleMenu}
            >
              <i className="fas fa-bars"></i>
            </a>
          </li>
        </ul>

        {/* <!-- Right navbar links --> */}
        <ul className="navbar-nav ml-auto">
          {/* <!-- Notifications Dropdown Menu --> */}
          <li className="nav-item dropdown">
            <a className="nav-link" data-toggle="dropdown" href="#">
              <i className="">
                <FaPowerOff />
              </i>
            </a>
            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
              <span className="dropdown-item dropdown-header">
                Confirm Log out !
              </span>
              {/* <div className="dropdown-divider"></div> */}
              <a
                href="/admin"
                className="dropdown-item dropdown-footer"
                onClick={handleLogout}>
                Log Out !
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header