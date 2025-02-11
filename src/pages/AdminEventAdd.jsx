import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { TbArrowsVertical } from "react-icons/tb";
import { BiMoveHorizontal } from "react-icons/bi";
import Cookies from "js-cookie";
import axios from "axios";

const AdminEventAdd = () => {
  const [category_id, setCategory_id] = useState("");
  const [image, setImage] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const layout = document.querySelector('input[name="layout"]:checked').value;
    const formData = new FormData();
    formData.append("category", category_id);
    formData.append("image", image);
    formData.append("dimension", layout);
    // console.log("formdata", formData);
    axios
      .post(`https://denticadentalstudio.com/webapp/api/event/store`, formData, {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      })
      .then((res) => {
        // console.log(res.data);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Data Saved !",
          showConfirmButton: false,
          timer: 1000,
        }).then(() => {
          window.location.href = "/admin/event";
        });
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
  };

  useEffect(() => {
    axios
      .get(`https://denticadentalstudio.com/webapp/api/event_category`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      })
      .then((res) => {
        // console.log(res.data.data.event_category);
        setData(res.data.data.event_category); // Update the data state with the fetched data
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
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
                  <h1>Events</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <Link to="/admin/event">Events</Link>
                    </li>
                    <li
                      className="breadcrumb-item active"
                      style={{ color: "#ca629d" }}
                    >
                      Add
                    </li>
                  </ol>
                </div>
              </div>
            </div>
            {/* <!-- /.cont/ainer-fluid --> */}
          </section>

          {/* <!-- Main content --> */}
          <section className="content">
            <div className="container-fluid">
              <div className="row">
                {/* <!-- left column --> */}
                <div className="col-md-12">
                  {/* <!-- general form elements --> */}
                  <div className="card card-primary">
                    <div
                      className="card-header"
                      style={{ backgroundColor: "#256f98" }}
                    >
                      <h3 className="card-title">Add Events</h3>
                    </div>
                    {/* <!-- /.card-header --> */}
                    {/* <!-- form start --> */}
                    <form className="text-left" onSubmit={handleSubmit}>
                      <div className="card-body">
                        <div className="form-group">
                          <label for="exampleInputPassword1">
                            Catagory <span style={{ color: "red" }}>*</span>
                          </label>
                          <br />
                          <select
                            name="category"
                            id=""
                            className="w-100 p-2"
                            onChange={(e) => setCategory_id(e.target.value)}
                            value={category_id}
                          >
                            <option value="Select a Option">
                              Select a Option
                            </option>
                            {data.map((item) => (
                              <option key={item.id} value={item.id}>
                                {" "}
                                {/* Pass item.id instead of item.name */}
                                {item.name}
                              </option>
                            ))}
                          </select>
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
                                // value={image}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label for="exampleInputFile">
                            Image Dimension{" "}
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <div className="input-group">
                            <div className="custom-file" style={{ gap: "20px" }}>
                              <div className="radio-1 d-flex">
                                <input
                                  type="radio"
                                  name="layout"
                                  value="0"
                                  required
                                />
                                <label htmlFor="" style={{ marginLeft: "5px" }}>
                                  <span>
                                    <TbArrowsVertical />
                                  </span>{" "}
                                  Vertical
                                </label>
                              </div>
                              <div className="radio-2 d-flex">
                                <input type="radio" name="layout" value="1" />
                                <label htmlFor="" style={{ marginLeft: "5px" }}>
                                  <span>
                                    <BiMoveHorizontal />
                                  </span>{" "}
                                  Horizontal
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- /.card-body --> */}

                      <div className="card-footer">
                        <button
                          type="submit"
                          className="btn btn-primary text-light border-0 form-dlt-btn"
                          style={{ backgroundColor: "#ca629d" }}
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                  {/* <!-- /.card --> */}
                </div>
                {/* <!--/.col (left) --> */}
                {/* <!-- /.content --> */}
              </div>
              {/* <!-- /.row --> */}
            </div>
            {/* <!-- /.container-fluid --> */}
          </section>
          {/* <!-- /.content --> */}
        </div>
      </div>
    </div>
  )
}

export default AdminEventAdd