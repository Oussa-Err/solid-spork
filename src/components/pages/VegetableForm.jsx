import React, { useEffect, useState } from "react";
import "./vegetableForm.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import Arrow from "../../assets/Arrow.png";
import axios from "axios";

export default function UploadImage() {
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState("");

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  function uploadSingleImage(base64) {
    setLoading(true);
    axios
      .post("http://localhost:8080/products", { image: base64 })
      .then((res) => {
        setUrl(res.data);
        alert("Image uploaded Succesfully");
      })
      .then(() => setLoading(false))
      .catch(console.log);
  }

  function uploadMultipleImages(images) {
    setLoading(true);
    axios
      .post("http://localhost:5000/uploadMultipleImages", { images })
      .then((res) => {
        setUrl(res.data);
        alert("Image uploaded Succesfully");
      })
      .then(() => setLoading(false))
      .catch(console.log);
  }

  const uploadImage = async (event) => {
    const files = event.target.files;
    console.log(files.length);

    if (files.length === 1) {
      const base64 = await convertBase64(files[0]);
      uploadSingleImage(base64);
      return;
    }

    const base64s = [];
    for (var i = 0; i < files.length; i++) {
      var base = await convertBase64(files[i]);
      base64s.push(base);
    }
    uploadMultipleImages(base64s);
  };

  function UploadInput() {
    return (
      <div class="flex justify-center flex-col m-8">
        <div>
          <h2 class="mb-4 upload-heading">Upload Photo</h2>
        </div>
        <div>
          {url && (
            <div>
              Access your file at{" "}
              <a href={url} target="_blank" rel="noopener noreferrer">
                {url}
              </a>
            </div>
          )}
        </div>
        <div>
          {loading ? (
            <div class="flex items-center justify-center">
              <img src={assets} alt="Loading" class="upload-icon" />
            </div>
          ) : (
            <div class="upload-container">
              <label
                htmlFor="dropzone-file"
                class={`upload-label ${darkMode ? "upload-label-dark" : ""}`}
              >
                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    aria-hidden="true"
                    class="w-10 h-10 mb-3 upload-icon"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    ></path>
                  </svg>
                  <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span class="font-semibold">Click to upload</span> or drag
                    and drop
                  </p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input
                  onChange={uploadImage}
                  id="dropzone-file"
                  type="file"
                  class="hidden"
                  multiple
                />
              </label>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div class="flex justify-center flex-col m-8">
      <div>
        <h2 class="mb-4 upload-heading">Upload Photo</h2>
      </div>
      <div>
        {url && (
          <div>
            Access your file at{" "}
            <a href={url} target="_blank" rel="noopener noreferrer">
              {url}
            </a>
          </div>
        )}
      </div>
      <div>
        {loading ? (
          <div class="flex items-center justify-center">
            <img src={assets} alt="Loading" class="upload-icon" />
          </div>
        ) : (
          <div class="upload-container">
            <label
              htmlFor="dropzone-file"
              class={`upload-label ${"upload-label-dark"}`}
            >
              <div class="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  aria-hidden="true"
                  class="w-10 h-10 mb-3 upload-icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  ></path>
                </svg>
                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span class="font-semibold">Click to upload</span> or drag and
                  drop
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input
                onChange={uploadImage}
                id="dropzone-file"
                type="file"
                class="hidden"
                multiple
              />
            </label>
          </div>
        )}
      </div>
    </div>
  );
}
