import "./Barchart.css"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
const Barchart = () => {

  const data = [
    { month: "Jan", Enrolled: 35, Left: 15 },
    { month: "Feb", Enrolled: 30, Left: 10 },
    { month: "Mar", Enrolled: 25, Left: 12 },
    { month: "Apr", Enrolled: 28, Left: 14 },
    { month: "May", Enrolled: 32, Left: 10 },
    { month: "Jun", Enrolled: 35, Left: 13 },
  ];
  return (
    <>
       <div className="top-intro">
        <h4 className="scrolled">Students enrolled and left</h4>
        <p className="year">Last Year</p>
       </div>

       <BarChart width={600} height={300} data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="month" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="Enrolled" fill="#8884d8" />
    <Bar dataKey="Left" fill="#82ca9d" />
  </BarChart>
    </>
  )
}

export default Barchart