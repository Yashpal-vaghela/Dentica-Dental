import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Cookies from "js-cookie";
import axios from "axios";


const Adminhome = () => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState(null);
  const [wp, setWp] = useState("");
  const [insta, setInsta] = useState("");
  const [fb, setFb] = useState("");
  const [loading, setLoading] = useState(true);

  const handleFormsubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("subtitle", subtitle);
    formData.append("description", desc);
    formData.append("image", image);
    axios
      .post(`https://denticadentalstudio.com/webapp/api/home/store`, formData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      })
      .then((res) => {
        // console.log(res.data);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Form Submited !",
          showConfirmButton: false,
          timer: 1000,
        });
        setTitle("");
        setSubtitle("");
        setDesc("");
        setImage("");
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Error !",
          showConfirmButton: false,
          timer: 1000,
        });
      });
     setTimeout(() => window.location.reload(), 1000);
  };

  const handleSocialsubmit = (e) => {
    e.preventDefault();
    const formData = {
      whatsapp: wp || undefined,
      instagram: insta || undefined,
      facebook: fb || undefined,
    };

    axios
      .post(`https://denticadentalstudio.com/webapp/api/socialmedia/store`, formData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      })
      .then((res) => {
        // console.log(res.data);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Link Saved !",
          showConfirmButton: false,
          timer: 1000,
        });
        // Clear the state variables after successful submission
        setWp("");
        setInsta("");
        setFb("");
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Error !",
          showConfirmButton: false,
          timer: 1000,
        });
      });
    setTimeout(() => window.location.reload(), 1000);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://denticadentalstudio.com/webapp/api/home`
      );
      if (response.data.status === "success") {
        // console.log(response.data);
        const homeData = response.data.data.home;
        setTitle(homeData.title);
        setSubtitle(homeData.subtitle);
        setDesc(homeData.description);
        setImage(homeData.image);
        setWp(response.data.data.whatsapp_url);
        setInsta(response.data.data.instagram_url);
        setFb(response.data.data.facebook_url);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
    setLoading(false);
  }, []);
  return (
    <div>
    {loading && (
      <div className="preloaderContainer">
        <div className="preloaderBg">
          <div className="preloader"></div>
          <div className="preloader2"></div>
        </div>
      </div>
    )}
    <div className="wrapper">
      {/* <!-- Content Wrapper. Contains page content --> */}
      <div className="content-wrapper">
        {/* <!-- Content Header (Page header) --> */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6 text-left">
                <h1>Home Page</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <Link to="/admin/dashboard">Dashboard</Link>
                  </li>
                  <li
                    className="breadcrumb-item active"
                    style={{ color: "#ca629d" }}
                  >
                    Home
                  </li>
                </ol>
              </div>
            </div>
          </div>
          {/* <!-- /.container-fluid --> */}
        </section>

        {/* <!-- Main content --> */}
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              {/* <!-- left column --> */}
              <div className="col-md-6">
                {/* <!-- general form elements --> */}
                <div className="card card-primary">
                  <div
                    className="card-header"
                    style={{ backgroundColor: "rgb(37, 111, 152)" }}
                  >
                    <h3 className="card-title">Add Home Data</h3>
                  </div>
                  {/* <!-- /.card-header --> */}
                  {/* <!-- form start --> */}
                  <form className="text-left" onSubmit={handleFormsubmit}>
                    <div className="card-body">
                      <div className="form-group">
                        <label for="exampleInputEmail1">Title</label>
                        <input
                          onChange={(e) => setTitle(e.target.value)}
                          value={title}
                          type="text"
                          className="form-control"
                          id="exampleInputTitle"
                          placeholder="Enter title"
                        />
                      </div>
                      <div className="form-group">
                        <label for="exampleInputPassword1">Sub Title</label>
                        <input
                          onChange={(e) => setSubtitle(e.target.value)}
                          value={subtitle}
                          type="text"
                          className="form-control"
                          id="exampleInputSubtitle"
                          placeholder="Enter SubTitle"
                        />
                      </div>
                      <div className="form-group">
                        <label>Description</label>
                        <textarea
                          onChange={(e) => setDesc(e.target.value)}
                          value={desc}
                          className="form-control"
                          rows="3"
                          placeholder="Enter ..."
                        ></textarea>
                      </div>
                      <div className="form-group">
                        <label for="exampleInputFile">
                          Image <span style={{ color: "red" }}>*</span>
                        </label>
                        <div className="input-group">
                          <div className="custom-file">
                            <input
                              type="file"
                              onChange={(e) => {
                                const file = e.target.files[0];
                                setImage(file);
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- /.card-body --> */}

                    <div className="card-footer">
                      <button
                        type="submit"
                        className="btn btn-primary form-dlt-btn"
                        style={{ backgroundColor: "#ca629d", border: "0" }}
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
                {/* <!-- /.card --> */}
              </div>
              {/* <!--/.col (left) --> */}
              <div className="col-md-6">
                {/* <!-- general form elements --> */}
                <div className="card card-primary">
                  <div
                    className="card-header"
                    style={{ backgroundColor: "rgb(37, 111, 152)" }}
                  >
                    <h3 className="card-title">Social Media Links</h3>
                  </div>
                  {/* <!-- /.card-header --> */}
                  {/* <!-- form start --> */}
                  <form className="text-left" onSubmit={handleSocialsubmit}>
                    <div className="card-body">
                      <div className="form-group">
                        <label for="exampleInputWhatsappLink">Whatsapp</label>
                        <input
                          type="url"
                          className="form-control"
                          id="exampleInputWhatsappLink"
                          placeholder="Enter Whatsapp Link"
                          onChange={(e) => setWp(e.target.value)}
                          value={wp}
                        />
                      </div>
                      <div className="form-group">
                        <label for="exampleInputInstagramLink">
                          Instagram
                        </label>
                        <input
                          type="url"
                          className="form-control"
                          id="exampleInputInstagramLink"
                          placeholder="Enter Instagram Link"
                          onChange={(e) => setInsta(e.target.value)}
                          value={insta}
                        />
                      </div>
                      <div className="form-group">
                        <label for="exampleInputFacebookLink">Facebook</label>
                        <input
                          type="url"
                          className="form-control"
                          id="exampleInputFacebookLink"
                          placeholder="Enter Facebook Link"
                          onChange={(e) => setFb(e.target.value)}
                          value={fb}
                        />
                      </div>
                    </div>
                    {/* <!-- /.card-body --> */}

                    <div className="card-footer">
                      <button
                        type="submit"
                        className="btn btn-primary form-dlt-btn"
                        style={{ backgroundColor: "#ca629d", border: "0" }}
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
                {/* <!-- /.card --> */}
              </div>
            </div>
            {/* <!-- /.row --> */}
          </div>
          {/* <!-- /.container-fluid --> */}
        </section>
        {/* <!-- /.content --> */}
      </div>
      {/* <!-- /.content-wrapper --> */}
    </div>
  </div>
  )
}

export default Adminhome