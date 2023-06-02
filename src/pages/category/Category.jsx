import React from "react";
import "./category.scss";
import Sidebar from "../../components/sideBar/Sidebar";
import Navbar from "../../components/navBar/Navbar";
import Datatabel2 from "../../components/dataTabel/Datatabel2";
import Modal1 from "../../components/modals/Modal";
import Modal1Add from "../../components/modals/ModalAdd";

function Category({ setDark, dark }) {
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
          <Modal1Add/>
        </div>
        <Datatabel2 />
      </div>
    </div>
  );
}

export default Category;
