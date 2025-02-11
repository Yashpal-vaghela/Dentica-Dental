import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { Container } from "react-bootstrap";

const Event = () => {
  // const [loading, setLoading] = useState(true);
  const [eventCat, setEventCat] = useState([]);

  useEffect(() => {
    AOS.init();

    axios
      .get(`https://denticadentalstudio.com/webapp/api/event_category`)
      .then((res) => {
        // console.log(res.data.data.event_category);
        setEventCat(res.data.data.event_category);
        // console.log(eventCat);
      })
      .catch((err) => {
        console.log(err);
      })
      // .finally(() => {
      //   setLoading(false);
      // });
  }, []);

  return (
    <div className="event-main">
      {/* {loading && (
        <div className="preloaderContainer">
          <div className="preloaderBg">
            <div className="preloader"></div>
            <div className="preloader2"></div>
          </div>
        </div>
      )} */}
      <div className="event-sub" data-aos="fade-up" data-aos-duration="2000">
        <div className="pages-banner">
          <div className="pages-banner-sub">
            <div className="pages-content-box">
              <h1>Events</h1>
              <ul className="pages-ul">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>Events</li>
              </ul>
            </div>
          </div>
        </div>

        <Container>
        <div className="event-page-content-main" style={{ display: "flex" }}>
          {eventCat.map((ele) => (
            <div className="blog-page-data-sub event-page-data-sub">
              <div className="blog-page-data-img">
                <img src={ele.image} alt="" />
              </div>
              <div className="blog-page-content-main-txt">
                <div className="blog-page-data-txt">
                  <Link to={`/events/${ele.id}`}>
                    <h1>{ele.name}</h1>
                  </Link>
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

export default Event;
