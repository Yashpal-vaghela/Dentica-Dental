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
import { Container, Row, Col, Form, Button } from "react-bootstrap";

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
      <footer className="footer text-light py-4 text-left main-footer-menu" >
      <Container>
        <Row>
          {/* Column 1: Navigation */}
          <Col xs={12} sm={6} md={4} lg={3} className="mb-3">
            <h5>Products</h5>
            <hr className="footer-hr" />
            <ul className="nav flex-column">
              {productData
                .filter((ele) => ele.product_type === 2)
                .map((ele) => (
                  <div className="footer-map-main">
                    <Link to={`/product/${ele.id}`} onClick={handleNavClick} className="nav-link text-light p-0">
                      <li className="nav-item">{ele.title}</li>
                    </Link>
                  </div>
                ))}

            </ul>
          </Col>

          {/* Column 2: More Links */}
          <Col xs={12} sm={6} md={4} lg={3} className="mb-3">
            <h5>Useful Links</h5>
            <hr className="footer-hr" />
            <ul className="nav flex-column">
              <Link to="/about" onClick={handleNavClick} className="nav-link text-light p-0"><li className="nav-item">About</li></Link>
              <Link to="/carrier" onClick={handleNavClick} className="nav-link text-light p-0"><li className="nav-item">Career</li></Link>
              <Link to="/review" onClick={handleNavClick} className="nav-link text-light p-0"><li className="nav-item">Review</li></Link>
              <Link to="/blog" onClick={handleNavClick} className="nav-link text-light p-0"><li className="nav-item">Blog</li></Link>
              <Link to="/contact" onClick={handleNavClick} className="nav-link text-light p-0"><li className="nav-item">Contact</li></Link>
              <Link to="/gallery" onClick={handleNavClick} className="nav-link text-light p-0"><li className="nav-item">Gallery</li></Link>
              <Link to="/terms-and-condition" onClick={handleNavClick} className="nav-link text-light p-0"><li className="nav-item">Terms & Conditions</li></Link>
              <Link to="/digital-dentistry" onClick={handleNavClick} className="nav-link text-light p-0">
                <li>Digital-dentistry</li>
              </Link>


            </ul>
          </Col>

          {/* Column 3: Extra Links */}
          <Col xs={12} sm={6} md={4} lg={3} className="mb-3">
            <h5>Lab Opening Hrs</h5>
            <hr className="footer-hr" />

            {aboutData.map((ele) => (
              <ul className="nav flex-column">
                <li>
                  Mon-Saturday: <br />
                  <span>{ele.monday_saturday}</span>
                </li>
                <li style={{ margin: "20px 0" }}>
                  Sunday: <br />
                  <span>{ele.sunday}</span>
                </li>
              </ul>

            ))}

          </Col>

          {/* Column 4: Newsletter */}
          <Col xs={12} sm={6} md={12} lg={3} className="mb-3">
            <h5>Get In Touch</h5>
            <hr className="footer-hr" />
            <p><b>Our Location :</b></p>
            <p style={{ paddingBottom: 20 }}>Plot no 1-8, Marutidham Industrial Estate, Velanja - Gothan Rd, Behind hotel royal, Umra, Gujarat 394130</p>
            
            
            <a href="mailto:info@dentco.net" className="footer-cont-icon">
              <div >
                <span style={{ fontSize: "1.2rem", }}>
                  <IoMail />
                </span>  denticadentalstudio@gmail.com
              </div>
            </a>

            <a href="tel:+918530101701" className="footer-cont-icon ">
              <div >
                <span>
                  <FaPhoneAlt />
                </span>
                &nbsp; +918530101701
              </div>
            </a>
            <a href="tel:+918487838383" className="footer-cont-icon">
              <div>
                <span>
                  <FaPhoneAlt />
                </span>
                &nbsp; +918487838383
              </div>
            </a>

            <div className="footer-icon">
              <a
                href="https://www.facebook.com/denticadental.dental?mibextid=ZbWKwL"
                target="_blank"
              >
                <p className="footer-icon-fb">
                  <img src={fb} alt="" />
                </p>
              </a>
              <a href="https://www.instagram.com/dentica_dental_studio/?igshid=NzZhOTFlYzFmZQ%3D%3D"
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
          </Col>
        </Row>

        
      </Container>
    </footer>
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
