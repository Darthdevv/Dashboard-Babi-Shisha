import React from "react";
import "./list.scss";
import Sidebar from "../../components/sideBar/Sidebar";
import Navbar from "../../components/navBar/Navbar";
import AddList from "./AddList";

function ListAdd({ setDark, dark }) {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar setDark={setDark} dark={dark} />
        <AddList />
      </div>
    </div>
  );
}

export default ListAdd;
