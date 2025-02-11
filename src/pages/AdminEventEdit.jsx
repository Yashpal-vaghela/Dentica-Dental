import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { TbArrowsVertical } from "react-icons/tb";
import { BiMoveHorizontal } from "react-icons/bi";
import Cookies from "js-cookie";

const AdminEventEdit = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [formData, setFormData] = useState({
      category_id: "",
      image: "",
      dimension: "",
    });
  
    useEffect(() => {
      // Fetch event categories
      axios
        .get(`https://denticadentalstudio.com/webapp/api/event_category`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        })
        .then((res) => {
          // console.log("Category data:", res.data.data.event_category);
          setData(res.data.data.event_category); // Update state with category data
        })
        .catch((err) => {
          console.log("Error fetching categories:", err);
        })
        .finally(() => {
          setLoading(false);
        });
  
      // Fetch event data for the specified ID
      axios
        .post(
          `https://denticadentalstudio.com/webapp/api/show/event`,
          { id },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${Cookies.get("token")}`,
            },
          }
        )
        .then((res) => {
          const eventData = res.data.data.event;
          setFormData({
            category_id: eventData.category_id,
            image: eventData.image,
            dimension: eventData.dimension,
          });
          // console.log(eventData);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }, [id]);
  
    const handleChange = (e) => {
      const { name, value, type } = e.target;
      if (type === "radio" || name === "dimension") {
        // For radio buttons and dimension field
        setFormData({
          ...formData,
          [name]: value,
        });
      } else if (name === "image") {
        // For file input
        setFormData({
          ...formData,
          [name]: e.target.files[0], 
        });
      } else if (name === "category_id") {
        // For category select input
        const category_id = e.target.value; // Extract the value of the selected option
        setFormData({
          ...formData,
          category_id: category_id, // Update category_id
        });
      }
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const formDataToSend = new FormData();
      formDataToSend.append("category", formData.category_id); // Updated to category_id
      formDataToSend.append("image", formData.image);
      formDataToSend.append("id", id);
      formDataToSend.append("dimension", formData.dimension);
      // console.log(formData);
      axios
        .post(
          `https://denticadentalstudio.com/webapp/api/event/update`,
          formDataToSend,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${Cookies.get("token")}`,
            },
          }
        )
        .then((res) => {
          // console.log(res.data);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Data Updated Successfully !",
            showConfirmButton: false,
            timer: 1000,
          })
            .then(() => {
              window.location.href = "/admin/event";
            });
        })
        .catch((err) => {
          console.log(err);
        });
    };
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
        <div className="content-wrapper">
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
                      Edit
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </section>

          <section className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <div className="card card-primary">
                    <div
                      className="card-header"
                      style={{ backgroundColor: "#256f98" }}
                    >
                      <h3 className="card-title">Edit Events</h3>
                    </div>
                    <form className="text-left" onSubmit={handleSubmit}>
                      <div className="card-body">
                        <div className="form-group">
                          <label for="exampleInputPassword1">
                            Category <span style={{ color: "red" }}>*</span>
                          </label>
                          <br />
                          <select
                            name="category_id"
                            className="w-100 p-2"
                            onChange={handleChange}
                            value={formData.category_id} // Ensure this value is correctly bound
                          >
                            <option value="">Select a Option</option>
                            {data.map((ele) => (
                              <option key={ele.id} value={ele.id}>
                                {ele.name}
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
                                name="image"
                                onChange={handleChange}
                                // Do not set value attribute for file input
                              />
                            </div>
                          </div>
                          {formData.image &&
                            typeof formData.image !== "string" && (
                              <img
                                src={URL.createObjectURL(formData.image)}
                                alt="Uploaded Image"
                                style={{ maxWidth: "100px", marginTop: "10px" }}
                              />
                            )}
                          {formData.image &&
                            typeof formData.image === "string" && (
                              <img
                                src={formData.image}
                                alt="Pre-saved Image"
                                style={{ maxWidth: "100px", marginTop: "10px" }}
                              />
                            )}
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
                                  name="dimension"
                                  value="1"
                                  onChange={() =>
                                    setFormData({ ...formData, dimension: "1" })
                                  }
                                  checked={formData.dimension === "1"}
                                  required
                                />
                                <label htmlFor="" style={{ marginLeft: "5px" }}>
                                  <span>
                                    <TbArrowsVertical />
                                  </span>{" "}
                                  Vertical
                                </label>
                                <input
                                  type="radio"
                                  name="dimension"
                                  value="0"
                                  onChange={() =>
                                    setFormData({ ...formData, dimension: "0" })
                                  }
                                  checked={formData.dimension === "0"}
                                />
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
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default AdminEventEdit