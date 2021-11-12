import React, { useState } from "react";
import data from "./data";
import Singleperson from "./Singleperson";
import { FaEllipsisV } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { FiBellOff } from "react-icons/fi";
import { BiChevronRight } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";

const Message = ({ value, setValue }) => {
  const [people, setPeople] = useState(data);
  const url =
    "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg";
  const singlePeople = people[value];
  console.log(singlePeople);
  return (
    <div className="main-container">
      <div className="message-container">
        <div className="combine">
          <div className="nav-container">
            <div>
              <img
                src={url}
                alt="profile"
                className="profile-image profile-img"
              />
            </div>
            <ul className="nav-list">
              <li></li>
              <li>
                <button>
                  <MdMessage className="icon" />
                </button>
              </li>
              <li>
                <button>
                  <FaEllipsisV className="icon" />
                </button>
              </li>
            </ul>
          </div>
          <div className="notifications">
            <FiBellOff className="bell" />
            <div className="bell-icon"></div>
            <div className="notifications-info">
              <h4>Get notified of new messages</h4>
              <p>
                Turn on desktop notifications
                <BiChevronRight />
              </p>
            </div>
          </div>
          <div className="search-container">
            <span>
              <AiOutlineSearch className="search" />
            </span>
            <input type="text" placeholder="Search or start new chat" />
          </div>
        </div>
        <div className="people-container">
          {people.map((person, index) => {
            const { id, name, image } = person;
            return (
              <div className="people" onClick={() => setValue(index)}>
                <img src={image} alt={name} className="profile-image" />
                <div className="people-name">
                  <h4>{name}</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="singleperson-container">
        <Singleperson singlePeople={singlePeople} />
      </div>
    </div>
  );
};

export default Message;
