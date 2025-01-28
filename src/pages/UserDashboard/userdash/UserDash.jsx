import React from "react";
import "./dash.css";
import { IoSchool } from "react-icons/io5";
import { FaBookOpen } from "react-icons/fa6";
import { FaTrophy } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md";

const UserDash = (props) => {
  return (
    <div className="dashboard">
      <div className="selectPic">
        <div className="dashleft">
        <MdErrorOutline
         style={{
            color: "#553cde",
            fontSize: "33px",
          }}/>

          <p>Set Your Profile Photo</p>
        </div>

        <button>
            Click Here
        </button>
      </div>

      <h3>Dashboard</h3>
      <div className="sequenceDiv">
        <div className="sequenceContent">
          <div className="center">
            <div className="sideIcon">
              <FaBookOpen
                style={{
                  color: "#553cde",
                  fontSize: "27px",
                }}
              />
            </div>
            <h2>{props.enrolled}</h2>
            <p>Enrolled Courses</p>
          </div>
        </div>
        <div className="sequenceContent">
          <div className="center">
            <div className="sideIcon">
              <IoSchool
                style={{
                  color: "#553cde",
                  fontSize: "27px",
                }}
              />
            </div>
            <h2>{props.active}</h2>
            <p>Active Courses</p>
          </div>
        </div>
        <div className="sequenceContent">
          <div className="center">
            <div className="sideIcon">
              <FaTrophy
                style={{
                  color: "#553cde",
                  fontSize: "27px",
                }}
              />
            </div>
            <h2>{props.completed}</h2>
            <p>Completed Courses</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDash;
