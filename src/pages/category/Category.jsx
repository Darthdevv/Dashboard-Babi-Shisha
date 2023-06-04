import React from "react";
import "./category.scss";
import Sidebar from "../../components/sideBar/Sidebar";
import Navbar from "../../components/navBar/Navbar";
import Datatabel2 from "../../components/dataTabel/Datatabel2";
import Modal1 from "../../components/modals/Modal";
import Modal1Add from "../../components/modals/ModalAdd";
import FilterListIcon from "@mui/icons-material/FilterList";


function Category({ setDark, dark }) {
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
            <Modal1Add />
          </div>
        </div>
        <Datatabel2 />
      </div>
    </div>
  );
}

export default Category;
