import './category.css'
import box1 from "../../assets/box-1.svg"
import box2 from "../../assets/box-2.svg"
import box3 from "../../assets/box-3.svg"
import box4 from "../../assets/box-4.svg"
import { HiOutlineLightBulb } from 'react-icons/hi2'
import { MdChevronLeft } from "react-icons/md";
import { MdChevronRight } from "react-icons/md";
import { GoDotFill } from "react-icons/go";

const Category = () => {
    return (
        <>
        <section className='category-sec'>
        <div className='top-me'>
        <HiOutlineLightBulb className='bulb-icons'/>
        <p className='top-txt'>Top Category</p>
        </div>
        <div className='explore-num'>
            <h1 >Explore 2000+ Free Online Courses</h1>
            <p>You'll find something to spark your curiosity and enhance</p>
        </div>

        <div className='acc-div'>
            <div className='acc-box'>
                <img src={box1} alt="" />
                <h3>Accounting</h3>
                <p>02 Courses</p>
            </div>
            <div className='acc-box'>
                <img src={box2} alt="" />
                <h3>Accounting</h3>
                <p>02 Courses</p>
            </div>
            <div className='acc-box'>
                <img src={box3} alt="" />
                <h3>Accounting</h3>
                <p>02 Courses</p>
            </div>
            <div className='acc-box'>
                <img src={box4} alt="" />
                <h3>Accounting</h3>
                <p>02 Courses</p>
            </div>
            <div className='acc-box'>
                <img src={box1} alt="" />
                <h3>Accounting</h3>
                <p>02 Courses</p>
            </div>
            <div className='acc-box'>
                <img src={box2} alt="" />
                <h3>Accounting</h3>
                <p>02 Courses</p>
            </div>
        </div>
        <div className='icons-sign'>
           <MdChevronLeft className='arr-icons'/>
            <div>
               <GoDotFill className='dot-icons'/>
               <GoDotFill className='dot-icons'/>
               <GoDotFill className='dot-icons'/>
               <GoDotFill className='dot-iconss'/>
            </div>
           <MdChevronRight className='arr-icons'/>
        </div>
        </section>
       
       

        </>
    )
}

export default Category