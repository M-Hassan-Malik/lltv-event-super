import "./Posts.css";
import React, { useState, useEffect } from "react";
import { Container, Table, Button } from "reactstrap";
import axios from "axios";
import { ServerURL } from "../../../url";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
const Posts = () => {
  const history = useHistory();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [blogs, setBlogs] = useState([
    {
      title: "",
      details: "",
      updated_at: "",
    },
  ]);
  useEffect(() => {
    let user_id = "6152b4e2a70d300016a5c08f";
    axios
      .get(`${ServerURL}/api/blogs/get-blogs-by-userid/${user_id}`)
      .then((res) => {
        if (res.data.result.length > 0) {
          setBlogs(res.data.result);
        } else if (res.data.error) {
          alert(res.data.error);
        } else console.log(res.data);
      });
  }, []);

  const handleActions = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    switch (name) {
      case "view":
        history.push("/blog");
        break;

      case "delete":
        axios
          .delete(`${ServerURL}/api/blogs/delete-blog/${value}`)
          .then((res) => {
            if (res.data.result.deletedCount === 1) {
              alert("Blog deleted!");
              history.go(0);
            } else if (res.data.result.deletedCount === 0) {
              alert("Not deleted, please refresh page");
            } else if (res.data.error) {
              alert(res.data.error);
            } else console.log(res.data);
          });
        break;
    }
  };

  return (
    <div lg="md" className="main-post-blogs">
      {blogs[0].title === "" ? (
        <h1 style={{ position: "absolute", top: "40vh", left: "40vw" }}>
          No Data!
        </h1>
      ) : (
        <>
        <h3>
          Manage Blogs
        </h3>
        <Table className="table">
          <thead>
            <tr id="thead-row">
              <th>#</th>
              <th>Title</th>
              <th>Publish</th>
              <th>Updated At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs !== null &&
              blogs.map((data, i) => (
                <tr key={i} id="table-row" style={{ textAlign: "center" }}>
                  <td>{++i}</td>
                  <td>{data.title}</td>
                  <td>Published</td>
                  <td>{data.updated_at.split("T")[0]}</td>
                  <td>
                    <div lg="auto" sx="auto" id="container">
                      <button
                        id="btn-view"
                        size="sm"
                        name="view"
                        value={data._id}
                        onClick={handleActions}
                      >
                        View
                      </button>
                      <button
                        id="btn-delete"
                        size="sm"
                        name="delete"
                        value={data._id}
                        onClick={handleActions}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
        </>
      )}
    </div>
  );
};

export default Posts;
