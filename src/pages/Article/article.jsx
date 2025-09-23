import "./article.css"
import bulb1 from "../../assets/bulb-1.png"
import art1 from "../../assets/art-1.jpg"
import art2 from "../../assets/art-2.jpg"
import art3 from "../../assets/art-3.jpg"
import { FaRegCalendarDays } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import { GoArrowRight } from "react-icons/go";

const Article = () => {
    return(
        <>
        <section className="art-sec">
           <div className="bulb-ar">
            <img src={bulb1} alt="" />
            <p>News & Article</p>
           </div>
           <h1 className="read-txt">Read Our Latest News</h1>
           <p className="miss-txt">Our mission is to provide you with valuable insights</p>

            <div className="art-cont">
           <div className="art-box">
            <div className="story-div">
                <p>Story</p>
            </div>
            <img src={art1} alt="" />
            <div className="date-cont">
                <div>
                <FaRegCalendarDays className="cals-icons"/>
                <p> May 12, 2024</p>
                </div>
                 <div>
                <CiUser className="user-icons"/>
                <p>Jhon Sina</p>
                 </div>
            </div>
            <div className="max-txt">
                <h3>Maximizing Your Learning</h3>
                <h3>Potential: A Guide to</h3>
                <h3>StudyHub</h3>
            </div>
            <button>
                Read More
                <GoArrowRight className="go-icons"/>
            </button>
           </div>

           <div className="art-box">
           <div className="story-div">
                <p>Story</p>
            </div>
            <img src={art2} alt="" />
            <div className="date-cont">
                <div>
                <FaRegCalendarDays className="cals-icons"/>
                <p> May 12, 2024</p>
                </div>
                 <div>
                <CiUser className="user-icons"/>
                <p>Jhon Sina</p>
                 </div>
            </div>
            <div className="max-txt">
                <h3>Maximizing Your Learning</h3>
                <h3>Potential: A Guide to</h3>
                <h3>StudyHub</h3>
            </div>
            <button>
                Read More
                <GoArrowRight className="go-icons"/>
            </button>
           </div>

           <div className="art-box">
           <div className="story-div">
                <p>Story</p>
            </div>
            <img src={art3} alt="" />
            <div className="date-cont">
                <div>
                <FaRegCalendarDays className="cals-icons"/>
                <p> May 12, 2024</p>
                </div>
                 <div>
                <CiUser className="user-icons"/>
                <p>Jhon Sina</p>
                 </div>
            </div>
            <div className="max-txt">
                <h3>Maximizing Your Learning</h3>
                <h3>Potential: A Guide to</h3>
                <h3>StudyHub</h3>
            </div>
            <button>
                Read More
                <GoArrowRight className="go-icons"/>
            </button>
           </div>
           </div>
        </section>
        </>
    )
}

export default Article