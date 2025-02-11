import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import "../css/style.css";
import AOS from "aos";
import { FaMagnifyingGlassPlus } from "react-icons/fa6";
import "aos/dist/aos.css";
import axios from "axios";

const DigitalDentistry = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [images, setImages] = useState([]);
  const [content, setContent] = useState([]);
  const [productData, setProductData] = useState([]);
  const [relatedImages, setRelatedImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://denticadentalstudio.com/webapp/api/product")
      .then((res) => {
        const data = res.data.data.product;
        setContent(data);
        if (data) {
          const filteredData = data.filter((item) => item.product_type === 1);
          if (filteredData) {
            const images = filteredData.flatMap((item) =>
              item.product_images.map((src) => ({
                src,
                lightboxOpen: false,
                hovered: false,
              }))
            );
            setImages(images);
            setProductData(filteredData);
            const related = data
              .filter((item) => item.product_type !== 1)
              .flatMap((item) => item.product_images.map((src) => src));
            setRelatedImages(related);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const handleMouseEnter = (index) => {
    const updatedImages = [...images];
    updatedImages[index].hovered = true;
    setImages(updatedImages);
  };

  const handleMouseLeave = (index) => {
    const updatedImages = [...images];
    updatedImages[index].hovered = false;
    setImages(updatedImages);
  };

  const moveNext = () => {
    setSelectedImageIndex((selectedImageIndex + 1) % images.length);
  };

  const movePrev = () => {
    setSelectedImageIndex(
      (selectedImageIndex + images.length - 1) % images.length
    );
  };

  const handleNavClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="dent-page-main">
      <div className="dent-page-sub" data-aos="fade-up" data-aos-duration="2000">
        <div className="pages-banner">
          <div className="pages-banner-sub">
            <div className="pages-content-box">
              <h1>Digital Dentistry</h1>
              <ul className="pages-ul">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>Digital Dentistry</li>
              </ul>
            </div>
          </div>
        </div>
        <Container>
        <div className="dent-page-content" style={{ position: "relative", overflow: "hidden" }}>
          <div className="implant-content-p1">
            <div className="implant-p1-img">
              <h1>{productData.title}</h1>
              {productData.map((product, index) => (
                <div key={index} style={{ marginBottom: "2rem" }}>
                  <div className="implant-p1-img-box">
                    <img src={product.image} alt={product.title} />
                  </div>
                  <div
                    className="implant-p1-img-txt"
                    dangerouslySetInnerHTML={{ __html: product.description }}
                  ></div>
                </div>
              ))}
            </div>
            <div className="implant-p1-link-main">
              <h1>Our products</h1>
              {content
                .filter((item) => item.product_type === 2)
                .map((ele) => (
                  <div className="implant-p1-link-sub" key={ele.id}>
                    <div className="implant-p1-link">
                      <Link to={`/product/${ele.id}`} onClick={handleNavClick}>
                        {ele.title}
                      </Link>
                    </div>
                    <hr />
                  </div>
                ))}
            </div>
          </div>
          <div className="implant-content-p2">
            <div className="implant-p2-head">
              <h1>Related Product Images</h1>
            </div>
            <div
              id="project-block-two"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="dent-page-image"
            >
              <div
                className="inner-box"
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto auto auto",
                  gap: "20px",
                }}
              >
                {images.map((image, imgIndex) => (
                  <figure
                    key={imgIndex}
                    className="image-box"
                    onMouseEnter={() => handleMouseEnter(imgIndex)}
                    onMouseLeave={() => handleMouseLeave(imgIndex)}
                    onClick={() => openLightbox(imgIndex)}
                    style={{
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      margin: "1rem",
                      width: "250px",
                      boxShadow: image.hovered
                        ? "0 6px 10px rgba(0, 0, 0, 0.6)"
                        : "none",
                    }}
                  >
                    <img
                      src={image.src}
                      style={{ height: "100%", width: "100%" }}
                      alt={`Image ${imgIndex}`}
                    />
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </div>
        </Container>
      </div>
      {lightboxOpen && (
        <Lightbox
          mainSrc={images[selectedImageIndex].src}
          nextSrc={images[(selectedImageIndex + 1) % images.length].src}
          prevSrc={
            images[
              (selectedImageIndex + images.length - 1) % images.length
            ].src
          }
          onCloseRequest={closeLightbox}
          onMovePrevRequest={movePrev}
          onMoveNextRequest={moveNext}
        />
      )}
    </div>
  );
};

export default DigitalDentistry;
