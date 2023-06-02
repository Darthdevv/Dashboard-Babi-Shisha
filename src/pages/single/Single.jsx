import React from "react";
import "./single.scss";
import Sidebar from "../../components/sideBar/Sidebar";
import Navbar from "../../components/navBar/Navbar";
import me from "../../assets/images/9bf1def1-90d9-48da-bcd8-178026dfc8a4.jpg";
import Chart from "../../components/charts/Chart";
import List from "../../components/tabel/Tabel";
function Single({ setDark, dark }) {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar setDark={setDark} dark={dark} />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>

            <h1 className="title">Information</h1>
            <div className="item">
              <img src={me} className="itemImg" />

              <div className="details">
                <h1 className="itemTitle">Omar Othman</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">OmarOthman@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+2 0155 224 2010</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">cairo , egypt</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title={"User Spending (Last 6 month)"} />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <List />
        </div>
      </div>
    </div>
  );
}

export default Single;
