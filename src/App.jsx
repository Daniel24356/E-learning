import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
// import Home from './pages/home'
import UserDB from './pages/UserDashboard/UserDB'

function App() {

  return (
    <>
       <Router>
        <Routes>
          <Route path="/" element={<UserDB/>} />
        </Routes>
       </Router>
    </>
  )
}

export default App
