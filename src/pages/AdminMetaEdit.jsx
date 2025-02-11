import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import Cookies from "js-cookie";

const AdminMetaEdit = () => {
    const { id } = useParams(); // Extracting the id from URL parameters
    const [metaData, setMetaData] = useState({
      meta_url: "",
      meta_title: "",
      meta_keyword: "",
      meta_description: "",
    });
  
    const [loading, setLoading] = useState(true);
    
    const handleChange = (e) => {
      const { name, value } = e.target;
      setMetaData({
        ...metaData,
        [name]: value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const updatedMetaData = {
        ...metaData,
        id: id // Include the id in the metaData object
      };
      axios
        .post(`https://denticadentalstudio.com/webapp/api/meta/update/` ,
        updatedMetaData,{
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
            title: "Meta data updated successfully !",
            showConfirmButton: false,
            timer: 1000,
          })
          .then(() => {
            window.location.href = "/admin/meta";
          });
        })
        .catch((err) => {
          console.log(err);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Error saving meta data !",
            showConfirmButton: false,
            timer: 1000,
          });
        });
    };
  
    useEffect(() => {
      axios
        .post(`https://denticadentalstudio.com/webapp/api/show/meta`,{ id },{
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        })
        .then((response) => {
          setMetaData(response.data.data.meta);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        })
    }, [id]); // Fetching meta data when the id changes
  
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
        {/* Content Wrapper. Contains page content */}
        <div className="content-wrapper">
          {/* Content Header (Page header) */}
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6 text-left">
                  <h1>Meta Form</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <Link to="/admin/Meta">Meta</Link>
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
            {/* /.container-fluid */}
          </section>

          {/* Main content */}
          <section className="content">
            <div className="container-fluid">
              <div className="row">
                {/* left column */}
                <div className="col-md-4">
                  {/* general form elements */}
                  <div className="card card-primary">
                    <div
                      className="card-header"
                      style={{ backgroundColor: "#256f98" }}
                    >
                      <h3 className="card-title">Edit Meta data</h3>
                    </div>
                    {/* /.card-header */}
                    {/* form start */}
                    <form className="text-left" onSubmit={handleSubmit}>
                      <div className="card-body">
                        <div className="form-group">
                          <label for="exampleInputEmail1">Meta Url</label>
                          <input
                            type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                            placeholder="Title"
                            name="meta_url"
                            onChange={handleChange}
                            value={metaData.meta_url}
                          />
                        </div>
                        <div className="form-group">
                          <label for="exampleInputPassword1">Meta Title</label>
                          <input
                            type="text"
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Meta Title"
                            name="meta_title"
                            onChange={handleChange}
                            value={metaData.meta_title}
                          />
                        </div>
                        <div className="form-group">
                          <label for="exampleInputPassword1">
                            Meta Keyword
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Meta Keyword"
                            name="meta_keyword"
                            onChange={handleChange}
                            value={metaData.meta_keyword}
                          />
                        </div>
                        <div className="form-group">
                          <label>Meta Description</label>
                          <textarea
                            className="form-control"
                            rows="3"
                            placeholder="Enter ..."
                            name="meta_description"
                            onChange={handleChange}
                            value={metaData.meta_description}
                          ></textarea>
                        </div>
                      </div>
                      {/* /.card-body */}

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
                  {/* /.card */}
                </div>
                {/* /.col (left) */}
              </div>
              {/* /.row */}
            </div>
            {/* /.container-fluid */}
          </section>
          {/* /.content */}
        </div>
        {/* /.content-wrapper */}
      </div>
    </div>
  )
}

export default AdminMetaEdit