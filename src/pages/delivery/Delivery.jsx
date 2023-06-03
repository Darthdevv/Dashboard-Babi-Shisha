import React from "react";
import "./delivery.scss";
import Sidebar from "../../components/sideBar/Sidebar";
import Navbar from "../../components/navBar/Navbar";
import Datatabel4 from "../../components/dataTabel/Datatable4";
import Modal4Add from "../../components/modals/Modal4Add";
import FilterListIcon from "@mui/icons-material/FilterList";


function Delivery({ setDark, dark }) {
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
            <Modal4Add/>
          </div>
        </div>
        <Datatabel4 />
      </div>
    </div>
  );
}

export default Delivery;
