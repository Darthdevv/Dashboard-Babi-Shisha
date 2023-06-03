import React from "react";
import "./sideBar.scss";
//importing material ui icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import InventoryIcon from "@mui/icons-material/Inventory";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import CategoryIcon from "@mui/icons-material/Category";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sideBar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Babi Shisha</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <Link to="/" style={{ textDecoration: "none" }}>
              <span>Dashboard</span>
            </Link>
          </li>
          <p className="title">LISTS</p>
          <Link to="/categories" style={{ textDecoration: "none" }}>
            <li>
              <CategoryIcon className="icon" />
              <span>Categories</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <InventoryIcon className="icon" />
              <span>Products</span>
            </li>
          </Link>
          <Link to="/coupons" style={{ textDecoration: "none" }}>
            <li>
              <ConfirmationNumberIcon className="icon" />
              <span>Coupons</span>
            </li>
          </Link>
          <Link to="/delivery" style={{ textDecoration: "none" }}>
            <li>
              <LocalShippingIcon className="icon" />
              <span>Delivery</span>
            </li>
          </Link>
        
          <p className="title">USER</p>

          <li>
            <AccountCircleIcon className="icon" />
            <Link to="/users/new" style={{ textDecoration: "none" }}>
              <span>Profile</span>
            </Link>
          </li>
          <li>
            <LogoutIcon className="icon" />
            <Link to="/login" style={{ textDecoration: "none" }}>
              <span>Login</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
}

export default Sidebar;
