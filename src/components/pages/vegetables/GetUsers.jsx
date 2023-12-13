import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./vegetableForm.css";

const GetUsers = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [users, setUsers] = useState([]);

  const accordion = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8080/api/v1/users/")
      .then((res) => {
        setUsers(res.data);
        console.log(res.data);
        toast.success("user sumoned Successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(users)
  if(!users) return null

  return (
    <div>
      <div>
        <div
          className="vegetable-container"
          style={{ height: isOpen ? "auto" : "100px" }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <h1 className="text">View Users</h1>
            <span onClick={accordion} className="gg-chevron-down-o"></span>
          </div>
          <div>
            {users.data.map((el, index) => (
              <div className="users" key={index}>
                <p>{el.name}</p>
                <p>{el.email}</p>
                <p>{el.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetUsers;
