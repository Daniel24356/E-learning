import React from 'react'
import "./header.css"
import { GoDotFill } from "react-icons/go";

const Header = (props) => {
  return (
    <div className='sideheader'>
        <div className="sideheadercontent">
            <div className="sideProfile">
                <img src={props.img} alt={props.altImg} />
            </div>

            <div className="sideName">
                <h1>{props.name}</h1>
                <div className="sideName2">
               <p>{props.courseshead} Course Enrolled <GoDotFill 
               style={{
                    fontSize: "11px",
                    marginLeft: "5px",
                    marginRight: "5px"
               }}/> 
               {props.completedhead} Course Completed</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Header
