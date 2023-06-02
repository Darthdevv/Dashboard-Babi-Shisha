import React from "react";
import "./delivery.scss";
import Sidebar from "../../components/sideBar/Sidebar";
import Navbar from "../../components/navBar/Navbar";
import Datatabel4 from "../../components/dataTabel/Datatable4";
import Modal4Add from "../../components/modals/Modal4Add";

function Delivery({ setDark, dark }) {
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
          <Modal4Add/>
        </div>
        <Datatabel4 />
      </div>
    </div>
  );
}

export default Delivery;
