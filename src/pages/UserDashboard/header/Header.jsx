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
                <h1>{props.name}Korede Anunusor Ezetah</h1>
                <div className="sideName2">
               <p>{props.courses} Course Enrolled <GoDotFill 
               style={{
                    fontSize: "11px",
                    marginLeft: "5px",
                    marginRight: "5px"
               }}/> 
               {props.completed} Course Completed</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Header
