import React from "react";
import "./home.scss";
import Sidebar from "../../components/sideBar/Sidebar";
import Navbar from "../../components/navBar/Navbar";
import Widget from "../../components/widget/Widget";
import Feature from "../../components/features/Feature";
import Chart from "../../components/charts/Chart";
import Tabel from "../../components/tabel/Tabel";

function Home({ setDark, dark }) {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar setDark={setDark} dark={dark} />
        <div className="widgets">
          <Widget type={"user"} />
          <Widget type={"order"} />
          <Widget type={"earning"} />
          <Widget type={"balance"} />
        </div>
        <div className="charts">
          <Feature />
          <Chart aspect={2 / 1} title={"User Spending (Last 6 month)"} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Tabel />
        </div>
      </div>
    </div>
  );
}

export default Home;
