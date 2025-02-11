import React, { useEffect, useState } from "react";
import "../css/style.css";
import logo from "../img/Logo.png";
import wp from "../img/whatsapp.png";
import fb from "../img/facebook.png";
import insta from "../img/instagra.png";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import { IoMail } from "react-icons/io5";

const Footer = () => {
  // const [scrolled, setScrolled] = useState(false);

  let [productData, setProductData] = useState([]);

  let [aboutData, setAboutData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://denticadentalstudio.com/webapp/api/product`)
      .then((res) => {
        // console.log(res.data);
        setProductData(res.data.data.product);
        // console.log(productData);
      })
      .catch((err) => {
        console.log(err);
      });

    // About API
    axios
      .get(`https://denticadentalstudio.com/webapp/api/abouts`)
      .then((res) => {
        // console.log(res.data.data.about);
        setAboutData(res.data.data.about);
        // console.log(aboutData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleNavClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="footer-main">
      <div className="footer-sub">
        <div className="main-footer-menu">
          <div className="main-footer-p1">
            <div className="main-footer-p1-content">
              <h1>Products</h1>
              <hr className="footer-hr" />
              {productData
                .filter((ele) => ele.product_type === 2)
                .map((ele) => (
                  <div className="footer-map-main">
                    <Link to={`/product/${ele.id}`} onClick={handleNavClick}>
                      <p>{ele.title}</p>
                    </Link>
                  </div>
                ))}
              <Link to="/digital-dentistry" onClick={handleNavClick}>
                <p>Digital-dentistry</p>
              </Link>
            </div>
            <div className="main-footer-p1-content">
              <h1>Useful Links</h1>
              <hr className="footer-hr" />
              <Link to="/about" onClick={handleNavClick}>
                <p>About</p>
              </Link>
              <Link to="/carrier" onClick={handleNavClick}>
                <p>Career</p>
              </Link>
              <Link to="/review" onClick={handleNavClick}>
                <p>Review</p>
              </Link>
              <Link to="/blog" onClick={handleNavClick}>
                <p>Blog</p>
              </Link>
              <Link to="/contact" onClick={handleNavClick}>
                <p>Contact</p>
              </Link>
              <Link to="/gallery" onClick={handleNavClick}>
                <p>Gallery</p>
              </Link>
              <Link to="//terms-and-condition" onClick={handleNavClick}>
                <p>Terms & Conditions</p>
              </Link>
              
            </div>
            {aboutData.map((ele) => (
              <div className="main-footer-p1-content">
                <h1>Lab Opening Hours</h1>
                <hr className="footer-hr" />
                <h3>
                  Mon-Saturday: <br />
                  <span>{ele.monday_saturday}</span>
                </h3>
                <h3 style={{ margin: "20px 0" }}>
                  Sunday: <br />
                  <span>{ele.sunday}</span>
                </h3>
              </div>
            ))}
          </div>
          {aboutData.map((ele) => (
            <div className="main-footer-p2">
              <h1>Get in touch</h1>
              <hr className="footer-hr" />
              <div className="footer-add">
                <h3>Our Location :</h3>
                <p> Plot no 1-8, Marutidham Industrial Estate, Velanja - Gothan Rd, Behind hotel royal, Umra, Gujarat 394130</p>
              </div>
              <div className="footer-num">
                <a href="mailto:info@dentco.net">
                  <p className="footer-cont-icon">
                    <span style={{ fontSize:"1.5rem",}}>
                      <IoMail />
                    </span> {ele.email}
                  </p>
                </a>
                <a href="tel:+918530101701">
                  <p className="footer-cont-icon">
                    <span>
                      <FaPhoneAlt />
                    </span>
                    {ele.phone_number1}
                  </p>
                </a>
                <a href="tel:+918487838383">
                  <p className="footer-cont-icon">
                    <span>
                      <FaPhoneAlt />
                    </span>
                    {ele.phone_number2}
                  </p>
                </a>
              </div>
              <div className="footer-icon">
                <a
                  href="https://www.facebook.com/denticadental.dental?mibextid=ZbWKwL"
                  target="_blank"
                >
                  <p className="footer-icon-fb">
                    <img src={fb} alt="" />
                  </p>
                </a>
                <a
                  href="https://www.instagram.com/dentica_dental_studio/?igshid=NzZhOTFlYzFmZQ%3D%3D"
                  target="_blank"
                >
                  <p className="footer-icon-insta">
                    <img src={insta} alt="" />
                  </p>
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=918530101701&text=Hello%2C%20Dentica%20Dental%20Studio"
                  target="_blank"
                >
                  <p className="footer-icon-wp">
                    <img src={wp} alt="" />
                  </p>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="footer-low">
          <div className="low-footer-img">
            <Link to="/" onClick={handleNavClick}>
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="low-footer-txt">
            <p>
              © 2025
              <span>
                <Link to="/" onClick={handleNavClick}>
                  Dentica Dental Studio.
                </Link>
              </span>
              All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
