import React from "react";
import "./coupon.scss";
import Sidebar from "../../components/sideBar/Sidebar";
import Navbar from "../../components/navBar/Navbar";
import Datatabel3 from "../../components/dataTabel/Datatabel3";
import Modal3Add from "../../components/modals/Modal3Add";

function Coupon({ setDark, dark }) {
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
        <Modal3Add/>
        </div>
        <Datatabel3 />
      </div>
    </div>
  );
}

export default Coupon;
