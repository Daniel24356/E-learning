import './header.css'
import logo from "../../assets/logo-1.svg"
import { IoIosArrowDown } from "react-icons/io";
import { CgMail } from "react-icons/cg";
import { LuPhone } from "react-icons/lu";
import { MdLocationPin } from "react-icons/md";
import { MdOutlineApps } from "react-icons/md";
import { useEffect, useState } from 'react';


const Header = () => {

  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.scrollY;
      if (scrollHeight > 200) { // Adjust this value as needed
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

    return(
        <>
        <div className={`head-all ${isFixed ? "fixed" : ""}`}>
         <div className='header'>
          <div className='header-left'>
          <div className='gmail-h'>
            <CgMail className='mail-icons'/>
            <p>info@studyhub.com</p>
          </div>
          <div className='num-h'>
           <LuPhone className='ph-icons'/>
            <p>+61 012 012 445</p>
          </div>
          </div>

          <div className='add-h'>
           <MdLocationPin className='loc-icons'/>
            <p> 684 West College St. Sun City, USA</p>
          </div>
         </div>

         <nav className='nav'>
          <div className='nav-left'>
          <img className='logo-img' src={logo} alt="" />
          <div className='cat-div'>
            <MdOutlineApps className='out-icons'/>
            <p>Category</p>
            <IoIosArrowDown className='down-icons'/>
          </div>
          </div>
          
          <div className='nav-mid'>
            <div>
              <p>Home</p>
               <IoIosArrowDown/>
            </div>
            <div>
              <p>Pages</p>
              <IoIosArrowDown/>
            </div>
            <div>
              <p>Courses</p>
              <IoIosArrowDown/>
            </div>
            <div>
              <p>Dashboard</p>
            </div>
            <div>
              <p>Blog</p>
              <IoIosArrowDown/>
            </div>
          </div>

          <div className='nav-right'>
            <button className='log-btn'>Logout</button>
            <button className='dashboard-btn'>Dashboard</button>
          </div>
         </nav>
         </div>
        </>
    )
}

export default Header