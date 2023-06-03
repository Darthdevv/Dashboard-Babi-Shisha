import React from "react";
import "./navBar.scss";
import me from "..//../assets/images/9bf1def1-90d9-48da-bcd8-178026dfc8a4.jpg";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";

function Navbar({ setDark, dark }) {
  const setDarkMode = () => {
    if (dark === false) {
      setDark(true);
    } else {
      setDark(false);
    }
  };
  return (
    <div className="navBar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search.." />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon" />
            English
          </div>
          <div className="item">
            <button onClick={setDarkMode} className="darkBtn">
              {!dark ? (
                <DarkModeOutlinedIcon className="icon" />
              ) : (
                <WbSunnyOutlinedIcon className="icon" />
              )}
            </button>
          </div>
          <div className="item">
            <NotificationsOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <img className="avatar" src={me} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
