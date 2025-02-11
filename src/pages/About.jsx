import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import box1 from "../img/thumb_box-1.png";
// import box2 from "../img/thumb_box-2.png";
// import box3 from "../img/thumb_box-3.png";
// import about_center from "../img/home_about-center.png";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { Container } from "react-bootstrap";

const About = () => {
  // const [loading, setLoading] = useState(true);
  let [aboutData, setAboutData] = useState([]);

  useEffect(() => {
    AOS.init();

    axios
      .get(`https://denticadentalstudio.com/webapp/api/abouts`)
      .then((res) => {
        // console.log(res.data.data.about);
        setAboutData(res.data.data.about);
        // console.log(aboutData);
      })
      .catch((err) => {
        console.log(err);
      })  
      // .finally(() => {
      //   setLoading(false);
      // });
  }, []);

  return (
    <div className="about-page-main">
      {/* {loading && (
        <div className="preloaderContainer">
          <div className="preloaderBg">
            <div className="preloader"></div>
            <div className="preloader2"></div>
          </div>
        </div>
      )} */}
      <div
        className="about-page-sub"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div className="pages-banner">
          <div className="pages-banner-sub">
            <div className="pages-content-box">
              <h1>About Us</h1>
              <ul className="pages-ul">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>About</li>
              </ul>
            </div>
          </div>
        </div>
        <Container>
        <div className="about-page-content">
          {aboutData.map((ele) => (
            <div className="about-p1 about-page-p1-main">
              <div className="about-p1-txt">
                <div className="sec-title">
                  <span className="sub-title">{ele.title}</span>
                  <h1>{ele.short_description}</h1>
                </div>
                <div className="sec-text">
                  <p dangerouslySetInnerHTML={{ __html: ele.description }}></p>
                </div>
              </div>
              <div className="about-p1-img">
                <div className="image-box">
                  {/* <div className="shape">
                    <div className="shape-1"></div>
                    <div className="shape-2"></div>
                  </div>
                  <div className="box">
                    <figure className="box-1 thumb">
                      <img src={box1} alt="" />
                    </figure>
                    <figure className="box-2 thumb">
                      <img src={box2} alt="" />
                    </figure>
                    <figure className="box-3 thumb">
                      <img src={box3} alt="" />
                    </figure>
                  </div> */}
                  <figure className="image">
                    <img src={ele.image} alt="" />
                  </figure>
                  {/* <div className="text">
                    <h2>
                      12 <span>+</span>
                    </h2>
                    <h6>Years of Experience</h6>
                  </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>
        </Container>
      </div>
    </div>
  );
};

export default About;
