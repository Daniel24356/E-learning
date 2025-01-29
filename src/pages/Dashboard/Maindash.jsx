import "./Maindash.css"
import Navbar from "./Navbar"
import Piechart from "./Piechart"
import Table from "./Table"
import Sidebar from "./Sidebar"
import Barchart from "./Barchart"
const Maindash = () => {
  return (
    <>
       <div className="totaldiv">
    <div className="leftdiv">
      <Sidebar/>
      </div>

      <div className="rightside">
         <Navbar/>
         <div className="barandpie">
            <div className="bar-div"><Barchart/></div>
            <div className="pie-div"><Piechart/></div>
         </div>
         <div className="table-div">
          <Table/>
         </div>
      </div>
    </div>
    </>
  )
}

export default Maindash