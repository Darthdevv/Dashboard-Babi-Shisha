import React from "react";
import "./list.scss";
import Sidebar from "../../components/sideBar/Sidebar";
import Navbar from "../../components/navBar/Navbar";
import Datatabel from "../../components/dataTabel/Datatabel";
import AddList from "./AddList";
import { useNavigate } from "react-router-dom";


function List({ setDark, dark }) {
  const navigate = useNavigate();
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar setDark={setDark} dark={dark} />
        <div className="flex flex-row items-center justify-between">
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[400px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="search"
            placeholder="Search"
          />
          <button
            onClick={() => {
              navigate("/products/add");
            }}
            className="w-28 text-white  bg-indigo-700 hover:bg-indigo-800 active:bg-indigo-900 font-medium rounded-lg text-sm py-2 mt-2 ml-5"
          >
            Add
          </button>
        </div>
        <Datatabel />
      </div>
    </div>
  );
}

export default List;
