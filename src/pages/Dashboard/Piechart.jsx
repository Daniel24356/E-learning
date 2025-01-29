import "./Piechart.css"
import { HiOutlineDotsVertical } from "react-icons/hi";
import { PieChart, Pie, Cell, Legend } from "recharts";
const Piechart = () => {

    const data = [
        { name: "Canada", value: 46, color: "#8884d8" },
        { name: "Brazil", value: 24, color: "#FF8042" },
        { name: "China", value: 16, color: "#82ca9d" },
        { name: "Australia", value: 14, color: "#003f5c" },
      ];
      const COLORS = data.map((entry) => entry.color);
  return (
   <>
      <div className="top-intro">
        <h4 className="scrolled">Students enrolled and left</h4>
        <p className="year"><HiOutlineDotsVertical/></p>
       </div>

       <PieChart width={400} height={300}>
    <Pie
      data={data}
      dataKey="value"
      cx="50%"
      cy="50%"
      innerRadius={70}
      outerRadius={100}
      fill="#8884d8"
      paddingAngle={5}
    >
      {data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index]} />
      ))}
    </Pie>
    <text
      x="40%"
      y="50%"
      textAnchor="middle"
      dominantBaseline="middle"
      style={{ fontSize: "24px", fontWeight: "bold" }}
    >
      72k
    </text>
    <text
      x="40%"
      y="60%"
      textAnchor="middle"
      dominantBaseline="middle"
      style={{ fontSize: "12px", fill: "#888" }}
    >
      Students
    </text>
    <Legend layout="vertical" align="right" verticalAlign="middle" />
  </PieChart>
   </>
  )
}

export default Piechart