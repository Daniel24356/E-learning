import "./Navbar.css"
import { CiSearch } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa6";
import man from "../../assets/e-logo.jpeg"
const Navbar = () => {
  return (
    <>
    <div className="main-div">
        <div className="first-div">
             <h2 className="students">Students</h2>
             <CiSearch className="search"/>
        </div>

        <div className="second-div">
            <FaRegBell className="bell"/>
            <img src={man} alt="" className="man" />
            <p className="will">William</p>
        </div>
    </div>
    </>
  )
}

export default Navbar