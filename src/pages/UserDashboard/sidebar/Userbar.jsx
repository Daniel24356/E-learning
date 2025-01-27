import React from 'react'
import "./userbar.css"
import { AiFillDashboard } from "react-icons/ai";
import { BsPersonFill } from "react-icons/bs";
import { FaBookmark } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { MdQuiz } from "react-icons/md";
import { IoSchool } from 'react-icons/io5';
import { FaShoppingCart } from "react-icons/fa";
import { FaPersonCircleQuestion } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { FaSignOutAlt } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Userbar = () => {
  return (
    <div className='userside'>
      <div className="usersideDiv">
      <NavLink 
      className= "link"
      to="/dashboard" 
        style={({isActive}) => {
          return isActive ?  {
            color: ' #553cde',
          } : {
            color: '#95929a'
        }
        }}>
         <AiFillDashboard />   Dashboard
            </NavLink>
      </div>

      <div className="usersideDiv">
      <NavLink 
      className= "link"
      to="/dashboard" 
        style={({isActive}) => {
          return isActive ?  {
            color: ' #553cde',
          } : {
            color: '#95929a'
        }
        }}>
        <BsPersonFill />  My Profile
            </NavLink>
      </div>

      <div className="usersideDiv">
      <NavLink 
      className= "link"
      to="/dashboard" 
        style={({isActive}) => {
          return isActive ?  {
            color: ' #553cde',
          } : {
            color: '#95929a'
        }
        }}>
         <IoSchool />   Enrolled Courses
            </NavLink>
      </div>

      <div className="usersideDiv">
      <NavLink 
      className= "link"
      to="/dashboard" 
        style={({isActive}) => {
          return isActive ?  {
            color: ' #553cde',
          } : {
            color: '#95929a'
        }
        }}>
         <FaBookmark />   Wishlist
            </NavLink>
      </div>

      <div className="usersideDiv">
      <NavLink 
      className= "link"
      to="/dashboard" 
        style={({isActive}) => {
          return isActive ?  {
            color: ' #553cde',
          } : {
            color: '#95929a'
        }
        }}>
         <FaStar />   Reviews
            </NavLink>
      </div>

      <div className="usersideDiv">
      <NavLink 
      className= "link"
      to="/dashboard" 
        style={({isActive}) => {
          return isActive ?  {
            color: ' #553cde',
          } : {
            color: '#95929a'
        }
        }}>
         <MdQuiz />  My Quiz Attempts
            </NavLink>
      </div>

      <div className="usersideDiv">
      <NavLink 
      className= "link"
      to="/dashboard" 
        style={({isActive}) => {
          return isActive ?  {
            color: ' #553cde',
          } : {
            color: '#95929a'
        }
        }}>
         <FaShoppingCart />   Order History
            </NavLink>
      </div>

      <div className="usersideDiv">
      <NavLink 
      className= "link"
      to="/dashboard" 
        style={({isActive}) => {
          return isActive ?  {
            color: ' #553cde',
          } : {
            color: '#95929a'
        }
        }}>
         <FaPersonCircleQuestion />   Question & Answer
            </NavLink>
      </div>

      <div className="usersideDiv">
      <NavLink 
       className= "link"
      to="/dashboard" 
        style={({isActive}) => {
          return isActive ?  {
            color: ' #553cde',
          } : {
            color: '#95929a'
        }
        }}>
        <IoMdSettings />   Settings
            </NavLink>
      </div>

      <div className="usersideDiv" style={{
        borderBottom: "none"
      }}>
      <NavLink 
      className= "link"
      to="/dashboard" 
        style={({isActive}) => {
          return isActive ?  {
            color: ' #553cde',
          } : {
            color: '#95929a'
        }
        }}>
         <FaSignOutAlt />   Logout
            </NavLink>
      </div>
    </div>
  )
}

export default Userbar
