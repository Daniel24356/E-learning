import "./Sidebar.css";
import logo from "../../assets/logo.avif"
import { LuLayoutDashboard } from "react-icons/lu";
import { TiDocumentText } from "react-icons/ti";
import { IoPersonSharp } from "react-icons/io5";
import { LuWallet } from "react-icons/lu";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { AiOutlineSchedule } from "react-icons/ai";
import { MdLiveTv } from "react-icons/md";
import { MdOutlineSettings } from "react-icons/md";
const Sidebar = () => {
  return (
    <>
      <div className="toplogodiv">
        <img src={logo} alt="" className="logo" />
         <h2>Estudy</h2>
         <p className="smallertext">Learn from home</p>
      </div>

      <div className="sidebar-links">
        <div className="each-link"><a href="" className="each"> <LuLayoutDashboard className="icon"/> Dashboard</a></div>
        <div className="each-link"><a href="" className="each"> <TiDocumentText className="icon"/> Course</a></div>
        <div className="each-link"><a href="" className="each-green"> <IoPersonSharp className="icon"/> Student</a></div>
        <div className="each-link"><a href="" className="each"> <LuWallet className="icon"/> Transactions</a></div>
        <div className="each-link"><a href="" className="each"> <IoChatbubbleEllipsesOutline className="icon"/> Chat</a></div>
        <div className="each-link"><a href="" className="each"> <AiOutlineSchedule className="icon"/> Schedule</a></div>
        <div className="each-link"><a href="" className="each"> <MdLiveTv className="icon"/> Live Class</a></div>
        <div className="each-link"><a href="" className="each"> <MdOutlineSettings className="icon"/> Settings</a></div>
      </div>
    </>
  )
}

export default Sidebar