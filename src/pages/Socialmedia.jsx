import React, { useEffect, useState } from "react";

const Socialmedia = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  const handleToggleButton = (e, id) => {
    // Hide all sections
    document.querySelectorAll(".communication-content-2").forEach((content) => {
      content.classList.add("d-none");
    });

    // Show the selected section using ID
    const targetContent = document.getElementById(id);
    if (targetContent) {
      targetContent.classList.remove("d-none");
    }

    // Remove active state from all buttons
    document.querySelectorAll(".communication-wrapper").forEach((btn) => {
      btn.classList.remove("active");
      btn.querySelector(".fa-chevron-left").classList.add("d-none");
      btn.querySelector(".fa-chevron-right").classList.remove("d-none");
    });

    // Add active state to the clicked button
    e.currentTarget.classList.add("active");
    e.currentTarget.querySelector(".fa-chevron-left").classList.remove("d-none");
    e.currentTarget.querySelector(".fa-chevron-right").classList.add("d-none");
  };



  // targetContent.classList.add('active');

  // const targetButton = Array.from(buttons).find(button => button.getAttribute('onclick').includes(id));
  //   targetButton.classList.add('active');

  // console.log("a",a,id,"a1",a1,"id:",id)
  // if(a1.length !== 0){
  //   const c = a1[0] == id
  //   console.log("x",c)
  // }
  // if(a1.length !== 0){
  //   const b =  a1.filter((i)=>console.warn("i",i))
  // }

  // const b = a.filter((i)=>i == id)
  return (
    <div>
      <div className="social-media-container container mt-5">
        <h1 className="social-media-title">Social Media</h1>
        <div className="row justify-content-center align-items-center g-3 social-media-content">
          <a
            className="col-lg-2 col-md-3 col-sm-4 col-4 text-center p-3"
            style={{
              backgroundColor: "#fff",
              borderRadius: "8px",
              boxShadow: "0px 0px 34px 0px rgba(0, 0, 0, 0.1)",
            }}
            href="https://www.facebook.com/denticadental.dental?mibextid=ZbWKwL"
            target="_blank"
          >
            <img src="/dist/img/facebook.svg" className="img-fluid my-1" style={{ width: "50px" }} alt="Facebook" />
            <h2 className="social-media-subtitle mb-0">Facebook</h2>
          </a>

          <a
            className="col-lg-2 col-md-3 col-sm-4 col-4 text-center p-3"
            style={{
              backgroundColor: "#fff",
              borderRadius: "8px",
              boxShadow: "0px 0px 34px 0px rgba(0, 0, 0, 0.1)",
            }}
            href="https://www.instagram.com/dentica_dental_studio/?igshid=NzZhOTFlYzFmZQ%3D%3D"
            target="_blank"
          >
            <img src="/dist/img/instrgram.svg" className="img-fluid my-1" style={{ width: "50px" }} alt="Instagram" />
            <h2 className="social-media-subtitle mb-0">Instagram</h2>
          </a>

          <a
            className="col-lg-2 col-md-3 col-sm-4 col-4 text-center p-3"
            style={{
              backgroundColor: "#fff",
              borderRadius: "8px",
              boxShadow: "0px 0px 34px 0px rgba(0, 0, 0, 0.1)",
            }}
            href="tel:+918530101701"
          >
            <img src="/dist/img/call.svg" className="img-fluid my-1" style={{ width: "50px" }} alt="Phone" />
            <h2 className="social-media-subtitle mb-0">Phone</h2>
          </a>

          <a
            className="col-lg-2 col-md-3 col-sm-4 col-4 text-center p-3"
            style={{
              backgroundColor: "#fff",
              borderRadius: "8px",
              boxShadow: "0px 0px 34px 0px rgba(0, 0, 0, 0.1)",
            }}
            href="https://api.whatsapp.com/send?phone=918530101701&text=Hello%2C%20Dentica%20Dental%20Studio"
            target="_blank"
          >
            <img src="/dist/img/whatsapp.svg" className="img-fluid my-1" style={{ width: "50px" }} alt="Whatsapp" />
            <h2 className="social-media-subtitle mb-0">Whatsapp</h2>
          </a>
        </div>
      </div>

      <div className="container">
        <div className="communication-secation my-md-3 my-3">
          <h1 className="communication-title mb-0">Get In Touch With Us</h1>
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="communication-wrapper" onClick={(e) => handleToggleButton(e, 'work-case-inquiry')}>
                <div className="communication-content d-flex justify-content-between align-items-center">
                  <h2 className="mb-0">For work progress & case inquiry:</h2>
                  <i className="fa-solid fa-chevron-left"></i>
                  <i className="fa-solid fa-chevron-right d-none"></i>
                </div>
              </div>
              <div className="communication-wrapper" onClick={(e) => handleToggleButton(e, 'work-collection')}>
                <div className="communication-content d-flex justify-content-between align-items-center">
                  <h2 className="mb-0">Work collection & bill issue</h2>
                  <i className="fa-solid fa-chevron-left d-none"></i>
                  <i className="fa-solid fa-chevron-right"></i>
                </div>
              </div>
              <div className="communication-wrapper" onClick={(e) => handleToggleButton(e, 'crown-bridge')}>
                <div className="communication-content d-flex justify-content-between align-items-center">
                  <h2 className="mb-0">Crown & Bridge</h2>
                  <i className="fa-solid fa-chevron-left d-none"></i>
                  <i className="fa-solid fa-chevron-right"></i>
                </div>
              </div>
              <div className="communication-wrapper" onClick={(e) => handleToggleButton(e, 'implants-crown')}>
                <div className="communication-content d-flex justify-content-between align-items-center">
                  <h2 className="mb-0">Implants Crown & Bridge</h2>
                  <i className="fa-solid fa-chevron-left d-none"></i>
                  <i className="fa-solid fa-chevron-right"></i>
                </div>
              </div>
              <div className="communication-wrapper" onClick={(e) => handleToggleButton(e, 'metal-crown')}>
                <div className="communication-content d-flex justify-content-between align-items-center">
                  <h2 className="mb-0">Metal Crown & Bridge</h2>
                  <i className="fa-solid fa-chevron-left d-none"></i>
                  <i className="fa-solid fa-chevron-right"></i>
                </div>
              </div>
            </div>
            <div id="work-case-inquiry" className="col-lg-6 col-12 communication-content-2 e work-case-inquiry">
              <h2>For work progress & case inquiry:</h2>
              <div className="communication-info mt-2 mb-3 m-sm-5 m-md-5  m-lg-3">
                <div className="d-flex align-items-center mb-3">
                  <span className="mr-2">1</span>
                  <p className="mb-0">For work progress & case inquiry Hotline:</p>
                </div>
                <i className="fa-solid fa-phone mr-2"></i> 87584 57536
              </div>
            </div>

            <div id="work-collection" className="col-lg-6 communication-content-2 d-none">
              <h2>Work collection & bill issue</h2>
              <div className="communication-info m-sm-4 m-md-4 m-3">
                <div className="d-flex align-items-center">
                  <span className="mr-2">1</span>
                  <p className="mb-0">Work collection & bill issue Hotline:</p>
                </div>
                <p className="mb-0">Premjibhai:</p>
                <i className="fa-solid fa-phone mr-2"></i> 8487838383
              </div>
              <div className="communication-info m-sm-4 m-md-4 m-3">
                <div className="d-flex align-items-center">
                  <span className="mr-2">2</span>
                  <p className="mb-0">Work collection & bill issue Hotline:</p>
                </div>
                <p className="mb-0">Architbhai:</p>
                <i className="fa-solid fa-phone mr-2"></i> 85301 01701
              </div>
            </div>

            <div id="crown-bridge" className="col-lg-6 communication-content-2 d-none">
              <h2>Crown & Bridge</h2>
              <div className="communication-info m-sm-5 m-md-5 m-3">
                <div className="d-flex align-items-center">
                  <span className="mr-2">1</span>
                  <p className="mb-0">Crown & Bridge Hotline:</p>
                </div>
                <p className="mb-0">Tusharbhai:</p>
                <i className="fa-solid fa-phone mr-2"></i> 7698828884
              </div>
            </div>

            <div id="implants-crown" className="col-lg-6 communication-content-2 d-none">
              <h2>Implants Crown & Bridge</h2>
              <div className="communication-info  m-sm-5 m-md-5 m-3">
                <div className="d-flex align-items-center">
                  <span className="mr-2">1</span>
                  <p className="mb-0">Implants Crown & Bridge Hotline:</p>
                </div>
                <p className="mb-0">Sidhharthbhai:</p>
                <i className="fa-solid fa-phone mr-2"></i> 8469848383
              </div>
            </div>

            <div id="metal-crown" className="col-lg-6 communication-content-2 d-none">
              <h2>Metal Crown & Bridge</h2>
              <div className="communication-info  m-sm-5 m-md-5 m-3">
                <div className="d-flex align-items-center">
                  <span className="mr-2">1</span>
                  <p className="mb-0">Metal Crown & Bridge Hotline:</p>
                </div>
                <p className="mb-0">Akashbhai:</p>
                <i className="fa-solid fa-phone mr-2"></i> 9327633394
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Socialmedia;
