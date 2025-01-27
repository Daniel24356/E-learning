import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
// import Home from './pages/home'
import Userbar from './pages/UserDashboard/sidebar/Userbar'
import Header from './pages/UserDashboard/header/Header'
import UserDash from './pages/UserDashboard/userdash/UserDash'

function App() {

  return (
    <>
       <Router>
        <Routes>
          <Route path="/" element={<UserDash/>} />
        </Routes>
       </Router>
    </>
  )
}

export default App
