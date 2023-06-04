import React from "react";
import "./coupon.scss";
import Sidebar from "../../components/sideBar/Sidebar";
import Navbar from "../../components/navBar/Navbar";
import Datatabel3 from "../../components/dataTabel/Datatabel3";
import Modal3Add from "../../components/modals/Modal3Add";
import FilterListIcon from "@mui/icons-material/FilterList";


function Coupon({ setDark, dark }) {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar setDark={setDark} dark={dark} />
        <div className="flex flex-row items-center justify-between">
          <div className="line">
            <div className="search">
              <input type="text" placeholder="Filter.." />
              <FilterListIcon />
            </div>
            <Modal3Add />
          </div>
        </div>
        <Datatabel3 />
      </div>
    </div>
  );
}

export default Coupon;
