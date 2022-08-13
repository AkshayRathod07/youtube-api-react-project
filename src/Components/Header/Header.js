import React from "react";
import "./_header.scss";

import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md";

const Header = ({ handleToggleSidebar }) => {
  return (
    <div className="border border-dark header">
      <FaBars
        className="header__menu"
        size={26}
        onClick={() => handleToggleSidebar()}
      />
       <span className="d-flex " >
     <h4>Akshay</h4> 

      <img
        src="/img/Youtube-logo.png"
        alt="YoutubeLogo"
        className="header__logo ml-2"
      />
      </span>

      <form>
        <input type="text" placeholder="search" />
        <button type="submit">
          <AiOutlineSearch size={22} />
        </button>
      </form>

      <dic className="header__icons">
        <MdNotifications size={28} />
        <MdApps size={28} />
        <img src="/img/avatar.png" alt="avatar" />
      </dic>
    </div>
  );
};

export default Header;
