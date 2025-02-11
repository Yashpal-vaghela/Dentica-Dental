import React, { useState, useEffect } from "react";
import logo from "../img/Logo.png";
import wp from "../img/whatsapp.png";
import insta from "../img/instagra.png";
import fb from "../img/facebook.png";
import { FaPhone } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import $ from "jquery";
import { IoClose } from "react-icons/io5";
import axios from "axios";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [productData, setProductData] = useState({});

  useEffect(() => {
    axios
      .get(`https://denticadentalstudio.com/webapp/api/product`)
      .then((res) => {
        setProductData(res.data.data.product);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    const handleToggleNav = () => {
      const $nav = $("#navigation-demo");
      const $hasClass = $nav.hasClass("open");

      if (!$hasClass) {
        $nav.addClass("open");
        $("body").append("<div class='navigation-backdrop'></div>");
      } else {
        $nav.removeClass("open");
        $(".navigation-backdrop").remove();
      }
    };

    $(document).on(
      "click",
      ".button-nav, .navigation-backdrop",
      handleToggleNav
    );

    return () => {
      $(document).off(
        "click",
        ".button-nav, .navigation-backdrop",
        handleToggleNav
      );
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const navData = document.getElementById("navData");
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > 100) {
        navData.classList.add("fixed");
      } else {
        navData.classList.remove("fixed");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleWarrantySubmit = (e) => {
    e.preventDefault();
  };

  // jQuery click event handler for opening the form
  $(document).on("click", "#btnOpenForm", function (event) {
    event.preventDefault();
    $(".form-popup-bg").addClass("is-visible");
  });

  // jQuery click event handler for closing the form
  $(document).on("click", "#btnCloseForm, .form-popup-bg", function (event) {
    event.preventDefault();
    $(".form-popup-bg").removeClass("is-visible");
  });

  return (
    <div className="nav-main">
      <div className="nav-sub">
        <div className="top-nav-main">
          <div className="top-nav-data">
            <div className="top-nav-loc">
              <span>
                <FaLocationDot />
              </span>
              <p> Velanja Road, Umra, Surat - 394130</p>
            </div>
            <div className="top-nav-email">
              <span>
                <FaEnvelope />
              </span>
              <a href="mailto:info@dentco.net">denticadentalstudio@gmail.com</a>
            </div>
          </div>
          <div className="top-nav-btn">
            <div className="top-nav-btn-sub">
              <a className="button" href="#popup1">
                Verify Warranty
              </a>
            </div>
            <div id="popup1" class="verify-overlay">
              <div class="popup">
                <div className="verify-head">
                  <h2>Verify Warranty</h2>
                  <a class="close" href="/">
                    &times;
                  </a>
                </div>
                <div class="content">
                  <div className="verify-form-input">
                    <h1>Order Id</h1>
                    <input type="text" placeholder="Enter order Id" />
                  </div>
                  <div className="verify-form-input">
                    <h1>Authentication Id</h1>
                    <input type="text" placeholder="Enter Authentication Id" />
                  </div>
                  <div className="verify-form-submit">
                    <button onClick={handleWarrantySubmit}>Submit</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="top-nav-btn-sub">
              <Link to="/submit-stl-file">Submit STL File</Link>
            </div>
          </div>
        </div>
        <div className="nav-data" id="navData">
          <div className="nav-logo-main">
            <div className="nav-logo-sub nav-logo-box">
              <Link to="/" onClick={handleNavClick}>
                <img src={logo} alt="" />
              </Link>
            </div>
          </div>
          <div className={`nav-menu-main ${scrolled ? "scrolled" : " "}`}>
            <ul className="nav-menu-ul">
              <li className="nav-menu-li">
                <Link to="/" onClick={handleNavClick} title="Home">
                  Home
                </Link>
              </li>
              <li className="nav-menu-li">
                <Link to="/about" onClick={handleNavClick} title="About-Us">
                  About
                </Link>
              </li>
              <li className="nav-menu-li dropdown">
                <Link
                  to="/product"
                  className="dropbtn"
                  onClick={handleNavClick}
                  title="Products"
                >
                  Products
                  <IoIosArrowDown />
                </Link>
                <div className="dropdown-content">
                  {Array.isArray(productData) &&
                    productData
                      .filter((ele) => ele.product_type === 2)
                      .map((ele) => (
                        <ul key={ele.slug}>
                          <Link
                            to={`/product/${ele.id}`}
                            onClick={handleNavClick}
                          >
                            {ele.title}
                          </Link>
                        </ul>
                      ))}
                </div>
              </li>
              <li className="nav-menu-li">
                <Link
                  to="/digital-dentistry"
                  onClick={handleNavClick}
                  title="Digital Dentistry"
                >
                  Digital Dentistry
                </Link>
              </li>
              <li className="nav-menu-li">
                <Link to="/blog" onClick={handleNavClick} title="Blog">
                  Blog
                </Link>
              </li>
              <li className="nav-menu-li">
                <Link to="/carrier" onClick={handleNavClick} title="Career">
                  Career
                </Link>
              </li>
              <li className="nav-menu-li">
                <Link to="/contact" onClick={handleNavClick} title="Contact">
                  Contact
                </Link>
              </li>
              <li className="nav-menu-li">
                <Link to="/review" onClick={handleNavClick} title="Review">
                  Review
                </Link>
              </li>
              <li className="nav-menu-li">
                <Link to="/events" onClick={handleNavClick} title="Events">
                  Events
                </Link>
              </li>
            </ul>
          </div>
          <div className="nav-contact-main">
            <div className="nav-contact-phone">
              <span>
                <FaPhone />
              </span>
              <a href="tel:+918530101701">+91 8530101701</a>
            </div>
          </div>
        </div>

        {/* Tablet Screen */}
        <div className="tab-nav">
          <div className="tab-nav-p1">
            <div className="nav-logo-main">
              <div className="nav-logo-sub">
                <Link to="/">
                  <img src={logo} alt="" />
                </Link>
              </div>
            </div>
            <div className="nav-contact-main">
              <div className="nav-contact-icon">
                <div className="nav-contact-img nav-wp">
                  <Link
                    to="https://api.whatsapp.com/send?phone=918530101701&text=Hello%2C%20Dentica%20Dental%20Studio"
                    target="_blank"
                  >
                    <img src={wp} alt="" />
                  </Link>
                </div>
                <div className="nav-contact-img nav-insta">
                  <Link
                    to="https://www.instagram.com/dentica_dental_studio/?igshid=NzZhOTFlYzFmZQ%3D%3D"
                    target="_blank"
                  >
                    <img src={insta} alt="" />
                  </Link>
                </div>
                <div className="nav-contact-img nav-fb">
                  <Link
                    to="https://www.facebook.com/denticadental.dental?mibextid=ZbWKwL"
                    target="_blank"
                  >
                    <img src={fb} alt="" />
                  </Link>
                </div>
              </div>
              <div className="nav-contact-phone">
                <span>
                  <FaPhone />
                </span>
                <a href="tel:+918530101701">+91 8530101701</a>
              </div>
            </div>
          </div>
          <div className="nav-menu-main">
            <ul className="nav-menu-ul">
              <li className="nav-menu-li">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-menu-li">
                <Link to="/about">About</Link>
              </li>
              <li className="nav-menu-li dropdown">
                <Link to="/product" className="dropbtn">
                  Products
                </Link>
              </li>
              <li className="nav-menu-li">
                <Link to="/digital-dentistry">Digital Dentistry</Link>
              </li>
              <li className="nav-menu-li">
                <Link to="/blog">Blog</Link>
              </li>
              <li className="nav-menu-li">
                <Link to="/carrier">Career</Link>
              </li>
              <li className="nav-menu-li">
                <Link to="/contact">Contact</Link>
              </li>
              <li className="nav-menu-li">
                <Link to="/review">Review</Link>
              </li>
              <li className="nav-menu-li">
                <Link to="/events">Events</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Mobile Screen */}

      <div class="main">
        <div class="header-top">
          <div className="mobile-header-img-box">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <button class="button-nav">
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
          </button>
        </div>

        <div class="navigation" id="navigation-demo">
          <nav>
            <div className="mobile-nav-logo">
              <div class="navigation-heading popup-nav-logo">
                <img src={logo} alt="" />
              </div>
              <div class="navigation-button">
                <button class="button-nav">
                  <IoClose />
                </button>
              </div>
            </div>
            <div className="mobile-nav-content">
              <div className="mobile-nav-menu-main">
                <ul class="navigation-list">
                  <li>
                    <Link to="/" class="button-nav">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" class="button-nav">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="/product" class="button-nav">
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link to="/digital-dentistry" class="button-nav">
                      Digital Dentistry
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog" class="button-nav">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link to="/carrier" class="button-nav">
                      Career
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" class="button-nav">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link to="/review" class="button-nav">
                      Review
                    </Link>
                  </li>
                  <li>
                    <Link to="/events" class="button-nav">
                      Events
                    </Link>
                  </li>
                </ul>
                <div className="mobile-view-nav-btn">
                  <button id="btnOpenForm" className="mob-verify-pop">
                    Verify Warranty
                  </button>

                  <div class="form-popup-bg">
                    <div class="form-container">
                      <div className="form-container-head">
                        <h1>Contact Us</h1>
                        <button id="btnCloseForm" class="close-button">
                          X
                        </button>
                      </div>
                      <form action="" className="mobile-pop-form">
                        <div className="verify-form-input">
                          <h1>Order Id</h1>
                          <input type="text" placeholder="Enter order Id" />
                        </div>
                        <div className="verify-form-input">
                          <h1>Authentication Id</h1>
                          <input
                            type="text"
                            placeholder="Enter Authentication Id"
                          />
                        </div>
                        <div className="verify-form-submit">
                          <button>Submit</button>
                        </div>
                      </form>
                    </div>
                  </div>

                  <Link to="/submit-stl-file" reloadDocument>
                    Submit STL File
                  </Link>
                </div>
              </div>
              <div className="mobile-view-nav-data">
                <div className="mobile-view-nav-data-txt">
                  <h1>Contact Info</h1>
                  <div className="mobile-view-nav-data-txt-loc">
                    <p>
                      <b>Our Location :</b> <br />
                      Plot No. 3/3-3/4, Dhuna House, opp. Patel Nagar, Varachha,
                      Surat, Gujarat 395008
                    </p>
                  </div>
                  <div className="mobile-view-nav-data-txt-link">
                    <p>
                      <b>Contact :</b>{" "}
                      <Link to="tel:+918530101701">+91 85301 01701</Link>
                    </p>
                    <p>
                      <b>Email :</b>
                      <Link to="mailto:info@dentco.net">
                        denticadentalstudio@gmail.com
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="mobile-view-nav-data-icon">
                  <div>
                    <Link
                      to="https://api.whatsapp.com/send?phone=918530101701&text=Hello%2C%20Dentica%20Dental%20Studio"
                      target="_blank"
                    >
                      <img src={wp} alt="" />
                    </Link>
                  </div>
                  <div style={{ width: "40px" }}>
                    <Link
                      to="https://www.instagram.com/dentica_dental_studio/?igshid=NzZhOTFlYzFmZQ%3D%3D"
                      target="_blank"
                    >
                      <img src={insta} alt="" />
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="https://www.facebook.com/denticadental.dental?mibextid=ZbWKwL"
                      target="_blank"
                    >
                      <img src={fb} alt="" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Nav;
