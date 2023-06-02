import React, { useState } from "react";
import "./new.scss";
import Sidebar from "../../components/sideBar/Sidebar";
import Navbar from "../../components/navBar/Navbar";
import image from "../../assets/images/WhatsApp Image 2023-03-13 at 2.19.34 AM.jpeg";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import noImage from "../../assets/images/no-image-icon-6.png";
function New({ inputs, title, setDark, dark }) {
  const [file, setFile] = useState("");
  console.log(file);

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar setDark={setDark} dark={dark} />
        <diV className="top">
          <h1>{title}</h1>
        </diV>
        <diV className="bottom">
          <div className="left">
            <img
              className="image"
              src={file ? URL.createObjectURL(file) : { noImage }}
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  image{<UploadFileIcon className="icon" />}
                </label>
                <input
                  type="file"
                  onClick={(e) => setFile(e.target.files[0])}
                  id="file"
                  style={{ display: "none" }}
                />
              </div>
              <div className="formInput">
                <label>Username</label>
                <input type="text" placeholder="Omar Othman" />
              </div>
              <div className="formInput">
                <label>Name And surname</label>
                <input type="text" placeholder="Omar Othman" />
              </div>
              <div className="formInput">
                <label>Email</label>
                <input type="email" placeholder="OmarOthman@gmail.com" />
              </div>
              <div className="formInput">
                <label>Phone</label>
                <input type="text" placeholder="+2 0155 2242 010" />
              </div>
              <div className="formInput">
                <label>Password</label>
                <input type="password" placeholder="" />
              </div>
              <div className="formInput">
                <label> Address</label>
                <input type="text" placeholder="" />
              </div>
              <div className="formInput">
                <label>Country</label>
                <input type="text" placeholder="Egypt" />
              </div>
              {inputs.map((input) => {
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>;
              })}
              <button className="w-[640px] text-white bg-indigo-700 hover:bg-indigo-800 active:bg-indigo-900 font-medium rounded-lg text-sm py-2">
                Update
              </button>
            </form>
          </div>
        </diV>
      </div>
    </div>
  );
}

export default New;
