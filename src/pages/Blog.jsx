import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container } from "react-bootstrap";

const Blog = () => {
  const [blogData, setBlogData] = useState([]);

  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    axios
      .get("https://denticadentalstudio.com/webapp/api/blogs")
      .then((res) => {
        // console.log(res.data);
        setBlogData(res.data.data.blog);
        // console.log(blogData);
      })
      .catch((err) => {
        console.log(err);
      })
      // .finally(() => {
      //   // Set loading to false when fetching data completes
      //   setLoading(false);
      // });
  }, []);

  return (
    <div className="blog-page-main">
      {/* loading  */}
      {/* {loading && (
        <div className="preloaderContainer">
          <div className="preloaderBg">
            <div className="preloader"></div>
            <div className="preloader2"></div>
          </div>
        </div>
      )} */}
      <div
        className="blog-page-sub"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div className="pages-banner">
          <div className="pages-banner-sub">
            <div className="pages-content-box">
              <h1>Blog</h1>
              <ul className="pages-ul">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>Blog</li>
              </ul>
            </div>
          </div>
        </div>
        <Container>
        <div
          className="blog-page-data"
          style={{ display: "flex", gap: "20px" }}
        >
          {blogData &&
            blogData.map((ele) => (
              <div className="blog-page-data-sub" key={ele.id}>
                <div className="blog-page-data-img">
                  <img src={ele.image} alt={ele.meta_title} />
                </div>
                <div className="blog-page-content-main-txt">
                  <div className="blog-page-data-txt">
                    <h1>{ele.meta_title}</h1>
                    <p
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                      dangerouslySetInnerHTML={{ __html: ele.description }}
                    ></p>
                  </div>
                  <div className="blog-page-data-btn">
                    <h1>{ele.created_at}</h1>
                    <Link to={`/blog/${ele.id}`}>Read More</Link>
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

export default Blog;
