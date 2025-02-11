import React, { useEffect, useState } from "react";
import { CiFacebook } from "react-icons/ci";
import { BsInstagram } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";
import { ImWhatsapp } from "react-icons/im";
import { Link } from "react-router-dom";
import dent_lg from "../img/dent-logo.png";

const Socialmedia = () => {
  const [loading, setLoading] = useState(true);
  const [togglebutton,setToggleButton] = useState();

  useEffect(() => {
    setLoading(false);
  }, []);

  const handleTogglebutton = (e,id) =>{
    const contents = document.querySelectorAll('.communication-secation')
    const buttons = document.querySelectorAll('.communication-secation')

    contents.forEach((content)=>{
      content.classList.remove('active');
    })

    const targetContent = document.getElementById(id);
    console.log("targetContent",targetContent)
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
   
  }
  return (
    <div>
      <div className="social-media-container container">
        <h1 className="social-media-title">Social Media</h1>
        <div className="row my-4 social-media-content">
          <div
            className="col-lg-3 p-4"
            style={{
              "background-color": "#fff",
              borderRadius: "8px",
              boxShadow: "0px 0px 34px 0px rgba(0, 0, 0, 0.1)",
            }}
          >
            <img src="/dist/img/facebook.svg" className="img-fluid my-1"></img>
            <h2 className="social-media-subtitle mb-0">Facebook</h2>
          </div>
          <div
            className="col-lg-3 p-4"
            style={{
              "background-color": "#fff",
              borderRadius: "8px",
              boxShadow: "0px 0px 34px 0px rgba(0, 0, 0, 0.1)",
            }}
          >
            <img src="/dist/img/linkedin.svg" className="img-fluid my-1"></img>
            <h2 className="social-media-subtitle mb-0">Linkdin</h2>
          </div>
          <div
            className="col-lg-3 p-4"
            style={{
              "background-color": "#fff",
              borderRadius: "8px",
              boxShadow: "0px 0px 34px 0px rgba(0, 0, 0, 0.1)",
            }}
          >
            <img src="/dist/img/instrgram.svg" className="img-fluid my-1"></img>
            <h2 className="social-media-subtitle mb-0">Instagram</h2>
          </div>
          <div
            className="col-lg-3 p-4"
            style={{
              "background-color": "#fff",
              borderRadius: "8px",
              boxShadow: "0px 0px 34px 0px rgba(0, 0, 0, 0.1)",
            }}
          >
            <img src="/dist/img/call.svg" className="img-fluid my-1"></img>
            <h2 className="social-media-subtitle mb-0">Phone</h2>
          </div>
          <div
            className="col-lg-3 p-4"
            style={{
              "background-color": "#fff",
              borderRadius: "8px",
              boxShadow: "0px 0px 34px 0px rgba(0, 0, 0, 0.1)",
            }}
          >
            <img src="/dist/img/whatsapp.svg" className="img-fluid my-1"></img>
            <h2 className="social-media-subtitle mb-0">Whatsapp</h2>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="communication-secation my-5">
          <h1 className="communication-title mb-0"> Communication. </h1>
          <div className="row">
            <div className="col-lg-6" onClick={(e)=>handleTogglebutton(e,'work-case-inquiry')}>
              <div className="communication-wrapper" >
                <div className="communication-content d-flex justify-content-between align-items-center">
                  <h2 className="mb-0">For work progress & case inquiry:</h2>
                  <i className="fa-solid fa-chevron-left"></i>
                  <i class="fa-solid fa-chevron-right d-none"></i>
                </div>
              </div>
              <div className="communication-wrapper">
                <div className="communication-content d-flex justify-content-between align-items-center">
                  <h2 className="mb-0">Work collection & bill issue</h2>
                  <i className="fa-solid fa-chevron-left d-none"></i>
                  <i class="fa-solid fa-chevron-right "></i>
                </div>
              </div>
              <div className="communication-wrapper">
                <div className="communication-content d-flex justify-content-between align-items-center">
                  <h2 className="mb-0">Crown & Bridge</h2>
                  <i className="fa-solid fa-chevron-left d-none"></i>
                  <i class="fa-solid fa-chevron-right"></i>
                </div>
              </div>
              <div className="communication-wrapper">
                <div className="communication-content d-flex justify-content-between align-items-center">
                  <h2 className="mb-0">Implants Crown & Bridge</h2>
                  <i className="fa-solid fa-chevron-left d-none"></i>
                  <i class="fa-solid fa-chevron-right"></i>
                </div>
              </div>
              <div className="communication-wrapper">
                <div className="communication-content d-flex justify-content-between align-items-center">
                  <h2 className="mb-0">Metal Crown & Bridge</h2>
                  <i className="fa-solid fa-chevron-left d-none"></i>
                  <i class="fa-solid fa-chevron-right"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-6 communication-content-2 d-none work-case-inquiry">
              <h2>For work progress & case inquiry:</h2>
              <div className="communication-info m-3">
                <span>1</span>
                <p className="mb-0">
                  For work progress & case inquiry Hotline:
                </p>
                <i class="fa-solid fa-phone mr-2"></i>
                87584 57536
              </div>
            </div>
            <div className="col-lg-6 communication-content-2 d-none">
              <h2>Work collection & bill issue</h2>
              <div className="communication-info m-3">
                <div class="d-flex align-items-center ">
                  <span className="mr-2">1</span>
                  <p className="mb-0">Work collection & bill issue Hotline:</p>
                </div>
                <p className="mb-0"> Premjibhai:</p>
                <i class="fa-solid fa-phone mr-2"></i>
                8487838383
              </div>
              <div className="communication-info m-3">
                <div className="d-flex align-items-center ">
                  <span className="mr-2">2</span>
                  <p className="mb-0">Work collection & bill issue Hotline:</p>
                </div>
                <p className="mb-0"> Architbhai:</p>
                <i class="fa-solid fa-phone mr-2"></i>
                85301 01701
              </div>
            </div>
            <div className="col-lg-6 communication-content-2 d-none">
              <h2>Crown & Bridge</h2>
              <div className="communication-info m-3">
                <div class="d-flex align-items-center ">
                  <span className="mr-2">1</span>
                  <p className="mb-0">Crown & Bridge Hotline:</p>
                </div>
                <p className="mb-0"> Tusharbhai:</p>
                <i class="fa-solid fa-phone mr-2"></i>
                7698828884
              </div>
            </div>
            <div className="col-lg-6 communication-content-2 d-none">
              <h2>Implants Crown & Bridge</h2>
              <div className="communication-info m-3">
                <div class="d-flex align-items-center">
                  <span className="mr-2">1</span>
                  <p className="mb-0">Implants Crown & Bridge Hotline:</p>
                </div>
                <p className="mb-0">Sidhharthbhai:</p>
                <i class="fa-solid fa-phone mr-2"></i>
                8469848383
              </div>
            </div>
            <div className="col-lg-6 communication-content-2 ">
              <h2>Metal Crown & Bridge</h2>
              <div className="communication-info m-3">
                <div class="d-flex align-items-center">
                  <span className="mr-2">1</span>
                  <p className="mb-0">Metal Crown & Bridge Hotline:</p>
                </div>
                <p className="mb-0">Akashbhai:</p>
                  <i class="fa-solid fa-phone mr-2"></i>
                9327633394
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Socialmedia;
