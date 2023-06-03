import React from "react";
import "./list.scss";
import Sidebar from "../../components/sideBar/Sidebar";
import Navbar from "../../components/navBar/Navbar";
import Datatabel from "../../components/dataTabel/Datatabel";
import AddList from "./AddList";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useNavigate } from "react-router-dom";


function List({ setDark, dark }) {
  const navigate = useNavigate();
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
            <button
              onClick={() => {
                navigate("/products/add");
              }}
              className="  text-pink-600 border-[1px] border-pink-600 hover:bg-pink-600 hover:text-white px-3 py-1 rounded-[3px]"
            >
              Add
            </button>
          </div>
        </div>
        <Datatabel />
      </div>
    </div>
  );
}

export default List;
