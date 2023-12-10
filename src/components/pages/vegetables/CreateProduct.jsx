import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./vegetableForm.css";

const CreateProduct = () => {
  const [data, setData] = useState({
    name: "",
    price: "",
    photo_url: "",
  });

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (err) => {
        reject(err);
      };
    });
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://127.0.0.1:8080/api/v1/products/", data);
      toast.success("Vegetable Uploaded Successfully");
    } catch (error) {
      console.error("Error is" + error);
    }
  };

  const handle = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(data);
    if (!data) {
      toast.warning("Please fill out this input", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  const uploadImage = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const base64 = await convertBase64(file);
      setData((prevData) => ({
        ...prevData,
        photo_url: base64,
      }));
      toast("Vegetable image Uploaded Successfully");
    }
  };

  return (
    <div>
      <div className="vegetable-container">
        <h1 className="text">Create new Vegetable</h1>
        <form action="#">
          <div className="form-row">
            <button className="upload-area">
              <span className="upload-area-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="340.531"
                  height="419.116"
                  viewBox="0 0 340.531 419.116"
                >
                  <g id="files-new" clip-path="url(#clip-files-new)">
                    <path
                      id="Union_2"
                      data-name="Union 2"
                      d="M-2904.708-8.885A39.292,39.292,0,0,1-2944-48.177V-388.708A39.292,39.292,0,0,1-2904.708-428h209.558a13.1,13.1,0,0,1,9.3,3.8l78.584,78.584a13.1,13.1,0,0,1,3.8,9.3V-48.177a39.292,39.292,0,0,1-39.292,39.292Zm-13.1-379.823V-48.177a13.1,13.1,0,0,0,13.1,13.1h261.947a13.1,13.1,0,0,0,13.1-13.1V-323.221h-52.39a26.2,26.2,0,0,1-26.194-26.195v-52.39h-196.46A13.1,13.1,0,0,0-2917.805-388.708Zm146.5,241.621a14.269,14.269,0,0,1-7.883-12.758v-19.113h-68.841c-7.869,0-7.87-47.619,0-47.619h68.842v-18.8a14.271,14.271,0,0,1,7.882-12.758,14.239,14.239,0,0,1,14.925,1.354l57.019,42.764c.242.185.328.485.555.671a13.9,13.9,0,0,1,2.751,3.292,14.57,14.57,0,0,1,.984,1.454,14.114,14.114,0,0,1,1.411,5.987,14.006,14.006,0,0,1-1.411,5.973,14.653,14.653,0,0,1-.984,1.468,13.9,13.9,0,0,1-2.751,3.293c-.228.2-.313.485-.555.671l-57.019,42.764a14.26,14.26,0,0,1-8.558,2.847A14.326,14.326,0,0,1-2771.3-147.087Z"
                      transform="translate(2944 428)"
                      fill="var(--c-action-primary)"
                    />
                  </g>
                </svg>
              </span>
              <span className="upload-area-title">
                Drag file(s) here to upload.
              </span>
              <span className="upload-area-description">
                Alternatively, you can select a file by <br />
                <strong>clicking here</strong>
              </span>
            </button>
          </div>
          <div className="form-row">
            <div className="input-data">
              <input type="text" required />
              <div className="underline"></div>
              <label htmlFor="">Name</label>
            </div>
          </div>
          <div className="form-row">
            <div className="input-data">
              <input type="text" required />
              <div className="underline"></div>
              <label htmlFor="">Price</label>
            </div>
          </div>
          <button type="submit">Create</button>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;