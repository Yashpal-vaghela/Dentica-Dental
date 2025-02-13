import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { FaLongArrowAltRight } from "react-icons/fa";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { FaBook } from "react-icons/fa";
import { FaTextWidth } from "react-icons/fa";
import Swal from "sweetalert2";

import AOS from "aos";
import "aos/dist/aos.css";
import { Container } from "react-bootstrap";

const Contact = () => {
  // const [submitButton, setSubmitButton] = useState(true);
  const [verified, setVerified] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile_number: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init();

    setLoading(false);
  }, []);

  // const excuteRecaptcha = async () => {
  //   return new Promise((resolve, reject) => {
  //     window.grecaptcha.ready(async () => {
  //       try {
  //         const token = await window.grecaptcha.execute(
  //           "6Lc7q98pAAAAANTVtph_4Mg5Jyb1TJWcDrIHJDMS",
  //           { action: "contact_form" }
  //         );
  //         resolve(token);
  //       } catch (error) {
  //         reject(error);
  //       }
  //     });
  //   });
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    // console.log(formData);
    e.preventDefault();
    try {
      if (!verified) {
        console.error("Please complete the manual verification.");
        return;
      }
      // const token = await excuteRecaptcha();
      const formDataSend = new FormData();
      formDataSend.append("name", formData.name);
      formDataSend.append("email", formData.email);
      formDataSend.append("mobile_number", formData.mobile_number);
      formDataSend.append("subject", formData.subject);
      formDataSend.append("message", formData.message);
      // formDataSend.append("recaptcha_token", token);

      const response = await fetch(
        "https://denticadentalstudio.com/webapp/api/contactus/store",
        {
          method: "POST",
          body: formDataSend,
        }
      );
      if (response.ok) {
        console.log("Data Saved Successfully");
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Contact details added   successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        setFormData({
          name: "",
          email: "",
          mobile_number: "",
          subject: "",
          message: "",
        });
      } else {
        console.error("Something Went to Wrong!");
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Something Went to Wrong!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.error("reCAPTCHA error: ", error);
    }
  };
  // useEffect(() => {
  //   const enableSubmitButton = async () => {
  //     const token = await excuteRecaptcha();
  //     if (token) {
  //       setSubmitButton(false);
  //     }
  //   };
  //   enableSubmitButton();
  // }, []);

  return (
    <div className="contact-main">
      {loading && (
        <div className="preloaderContainer">
          <div className="preloaderBg">
            <div className="preloader"></div>
            <div className="preloader2"></div>
          </div>
        </div>
      )}
      <div className="contact-sub" data-aos="fade-up" data-aos-duration="2000">
        <div className="pages-banner">
          <div className="pages-banner-sub">
            <div className="pages-content-box">
              <h1>Contact</h1>
              <ul className="pages-ul">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>
        <Container>
        <div className="contact-page-data-main">
          <div className="contact-page-data-sub">
            <div className="contact-page-touch-section">
              <div className="contact-page-touch-head">
                <div className="contact-page-touch-head-span">
                  <span>GET IN TOUCH</span>
                </div>
                <h1>Have a question to ask us?</h1>
              </div>
              <div className="contact-page-touch-content">
                <div className="contact-page-touch-loc">
                  <div className="contact-page-touch-icon">
                    <div className="contact-icon-main">
                      <IoLocationOutline />
                    </div>
                    <Link href="">Location</Link>
                  </div>
                  <div className="contact-page-icon-txt">
                    <p>
                      Plot no 1-8, Marutidham Industrial Estate, <br /> Velanja - Gothan Rd, Behind hotel royal, 
                      <br /> Surat, Gujarat-394130
                    </p>
                    <h5 className="contact-icon-a">
                      <Link
                        href="https://goo.gl/maps/eZALb3jJmV5B3CSf7"
                        target="_blank"
                      >
                        CHECK LOCATION
                        <span>
                          <FaLongArrowAltRight />
                        </span>
                      </Link>
                    </h5>
                  </div>
                </div>
                <div className="contact-page-touch-mob">
                  <div className="contact-page-touch-icon">
                    <div className="contact-icon-main">
                      <MdOutlinePhoneInTalk />
                    </div>
                    <Link>+91 8530101701</Link>
                  </div>
                  <div className="contact-page-icon-txt">
                    <p>
                      Mon to Sat: 9.00 am to 9.00 pm <br /> Sunday:Closed
                    </p>
                    <div className="contact-icon-a">
                      <a href="tel:+918530101701">
                        GET CALL BACK
                        <span>
                          <FaLongArrowAltRight />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="contact-page-touch-mail">
                  <div className="contact-page-touch-icon">
                    <div className="contact-icon-main">
                      <IoMailOutline />
                    </div>
                    <Link>denticadentalstudio@gmail.com</Link>
                  </div>
                  <div className="contact-page-icon-txt">
                    <p>
                      To better connect with our team send <br /> your mail.
                    </p>
                    <div className="contact-icon-a">
                      <a href="mailto:denticadentalstudio@gmail.com">
                        CONTACT FORM
                        <span>
                          <FaLongArrowAltRight />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-page-map-section">
              <div className="contact-page-map-sub">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.3011808750475!2d72.84564231420534!3d21.219902286602988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04ef120e021eb%3A0x38b0e81455dedbe7!2sAdvance%20dental%20Export!5e0!3m2!1sen!2sin!4v1665697964873!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: "0" }}
                  allowfullscreen=""
                  loading="lazy"
                  title="Google Maps Location"
                ></iframe>
              </div>
            </div>
            <div className="contact-page-form-section">
              <div className="home-msg-sub">
                <div className="home-msg-head">
                  <div className="home-msg-head-txt">
                    <span>SEND A MESSAGE</span>
                  </div>
                  <h1>
                    Drop a line & get a reply <br /> from our team
                  </h1>
                </div>
                <div className="home-msg-form-main">
                  <form className="home-msg-form" onSubmit={handleSubmit}>
                    <div className="home-msg-form-p1">
                      <div className="home-msg-input-div">
                        <p>Name</p>
                        <div>
                          <input
                            type="text"
                            placeholder="Name"
                            value={formData.name}
                            name="name"
                            onChange={handleChange}
                          />
                          <span>
                            <FaUser />
                          </span>
                        </div>
                      </div>
                      <div className="home-msg-input-div">
                        <p>Email</p>
                        <div>
                          <input
                            type="email"
                            placeholder="Email"
                            value={formData.email}
                            name="email"
                            onChange={handleChange}
                          />
                          <span>
                            <IoIosMail />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="home-msg-form-p2">
                      <div className="home-msg-input-div">
                        <p>Phone</p>
                        <div>
                          <input
                            type="number"
                            placeholder="Phone"
                            value={formData.mobile_number}
                            name="mobile_number"
                            onChange={handleChange}
                          />
                          <span>
                            <FaPhone />
                          </span>
                        </div>
                      </div>
                      <div className="home-msg-input-div">
                        <p>Subject</p>
                        <div>
                          <input
                            type="text"
                            placeholder="Subject"
                            value={formData.subject}
                            name="subject"
                            onChange={handleChange}
                          />
                          <span>
                            <FaBook />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="home-msg-form-p3">
                      <div className="home-msg-input-div home-msg-txt-area">
                        <p>Message</p>
                        <div>
                          <textarea
                            id=""
                            cols="30"
                            rows="10"
                            value={formData.message}
                            name="message"
                            onChange={handleChange}
                          />
                          <span>
                            <FaTextWidth />
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* <input
                      type="checkbox"
                      checked={verified}
                      onChange={(e) => setVerified(e.target.checked)}
                      style={{ marginRight: "5px" }}
                    /> */}
                    {/* <label
                      htmlFor="verified"
                      style={{
                        fontSize: "16px",
                        fontFamily: "Arial",
                        color: "#333",
                      }}
                    >
                      I am not a robot
                    </label> */}
                    <div className="home-msg-form-submit">
                      <input
                        type="submit"
                        value="SEND MESSAGE"
                        // disabled={submitButton}
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        </Container>
      </div>
    </div>
  );
};

export default Contact;
