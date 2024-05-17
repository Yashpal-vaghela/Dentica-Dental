import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { SlMagnifierAdd } from "react-icons/sl";
import axios from "axios";

const Dentalshow = () => {
  const [loading, setLoading] = useState(true);
  const [eventData, setEventData] = useState([]);
  const [lightboxOpen, setLightboxOpen] = useState(null);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    axios
      .get(`https://denticadentalstudio.com/api/event`)
      .then((res) => {
        console.log(res.data.data.event);
        // Filter the data where category_id is 1
        const filteredEventData = res.data.data.event.filter(
          (item) => item.dimension === 0
        );
        setEventData(filteredEventData)
        console.log(eventData);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const openLightbox = (index) => {
    setLightboxOpen(index);
  };

  const closeLightbox = () => {
    setLightboxOpen(null);
  };

  const handleMouseEnter = (index) => {
    setHovered(index);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  return (
    <div className="dental-show-main">
      {loading && (
        <div className="preloaderContainer">
          <div className="preloaderBg">
            <div className="preloader"></div>
            <div className="preloader2"></div>
          </div>
        </div>
      )}
      <div className="dental-show-sub">
        <div className="pages-banner">
          <div className="pages-banner-sub">
            <div className="pages-content-box">
              <h1>Gujarat Dental Show 2024</h1>
              <ul className="pages-ul">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>Gujarat Dental Show 2024</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="dental-show-content-main">
          <div className="dental-show-content">
            {eventData.map((event, index) => (
              <div
                className="dental-show-content-box dental-show-content-box-1"
                key={event.id}
                style={{
                  height: "272px",
                  overflow: "hidden",
                  margin: "10px",
                }}
              >
                <div
                  className="dental-show-img dent-page-img"
                  style={{ height: "300px", position: "relative" }}
                  onClick={() => openLightbox(index)}
                >
                  <figure
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave()}
                  >
                    <img
                      src={event.image}
                      alt={`show ${event.id}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        maxWidth: "100%",
                        maxHeight: "100%",
                      }}
                    />
                    {hovered === index && (
                      <div className="dent-show-overlay">
                        <div className="zoom-icon">
                          <SlMagnifierAdd className="flaticon-zoom-icon" />
                        </div>
                      </div>
                    )}
                  </figure>
                </div>
              </div>
            ))}
          </div>

          {lightboxOpen !== null && (
            <Lightbox
              mainSrc={eventData[lightboxOpen].image}
              nextSrc={eventData[(lightboxOpen + 1) % eventData.length].image}
              prevSrc={
                eventData[
                  (lightboxOpen + eventData.length - 1) % eventData.length
                ].image
              }
              onCloseRequest={closeLightbox}
              onMovePrevRequest={() =>
                setLightboxOpen(
                  (prev) => (prev + eventData.length - 1) % eventData.length
                )
              }
              onMoveNextRequest={() =>
                setLightboxOpen((prev) => (prev + 1) % eventData.length)
              }
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Dentalshow;
