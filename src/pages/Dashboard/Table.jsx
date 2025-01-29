import "./Table.css"
import { FaAngleDown } from "react-icons/fa6";
import img from "../../assets/man.avif"
const Table = () => {
    const data = [
        {
          id: 1,
          student: "Walter Osborne",
          studentId: "#54358",
          courseName: "History of Graphic Design",
          enrolledDate: "12 July, 2020",
          status: "Running",
          statusColor: "status-running",
        },
        {
          id: 2,
          student: "Walter Osborne",
          studentId: "#55663",
          courseName: "App Design Course",
          enrolledDate: "12 July, 2020",
          status: "Complete",
          statusColor: "status-complete",
        },
        {
          id: 3,
          student: "Walter Osborne",
          studentId: "#38195",
          courseName: "Logo Design",
          enrolledDate: "10 April, 2020",
          status: "Closed",
          statusColor: "status-closed",
        },
      ];
  return (
    <>
      <div className="top-part">
        <div className="left-tableshi">
        <h4 className="list">Students List</h4>
        <p className="sort">Sort by: All Students <FaAngleDown/></p>
        </div>
          <p className="sort">Search</p>
      </div>

      <div className="table-container">
      <table className="custom-table">
        <thead>
          <tr>
            <th>Student</th>
            <th>Student ID</th>
            <th>Course Name</th>
            <th>Enrolled Date</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td className="student-info">
                <img
                  src={img}
                  alt="Student Avatar"
                  className="student-avatar"
                />
                {item.student}
              </td>
              <td>{item.studentId}</td>
              <td>{item.courseName}</td>
              <td>{item.enrolledDate}</td>
              <td>
                <span className={`status-badge ${item.statusColor}`}>
                  {item.status}
                </span>
              </td>
              <td>...</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
}

export default Table