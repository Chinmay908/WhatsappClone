import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaEllipsisV } from "react-icons/fa";
import { ImAttachment } from "react-icons/im";
import { CgSmileMouthOpen } from "react-icons/cg";
import { FaMicrophone } from "react-icons/fa";
import data from "./data";
import bgimg from "./images/bgimg.png";

const Singleperson = ({ singlePeople }) => {
  const { name, image } = singlePeople;
  return (
    <div className="single-people">
      <div className="header-container">
        <img src={image} alt={name} className="profile-image" />
        <div className="people-name">
          <h3>{name}</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            fuga, ut aperiam illo quisquam amet commodi.
          </p>
        </div>
        <ul className="nav-list">
          <li>
            <button>
              <AiOutlineSearch className="search" />
            </button>
          </li>
          <li>
            <button>
              <FaEllipsisV className="icon" />
            </button>
          </li>
        </ul>
      </div>
      <img src={bgimg} alt="" className="bgimg" />
      <div className="footer-container">
        <button>
          <CgSmileMouthOpen className="footer-icon" />
        </button>
        <button>
          <ImAttachment className="footer-icon" />
        </button>
        <input
          type="text"
          placeholder="Type a message"
          className="message-input"
        />
        <button>

        <FaMicrophone className="footer-icon" />
        </button>
      </div>
    </div>
  );
};
export default Singleperson;
