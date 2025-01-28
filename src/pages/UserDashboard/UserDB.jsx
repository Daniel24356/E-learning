import React from 'react'
import "./userDB.css"
import Header from './header/Header'
import Profile from "../../assets/profile.png"
import Userbar from './sidebar/Userbar'
import UserDash from './userdash/UserDash'

const UserDB = () => {
  return (
    <div className='userDash'>
          <Header
          img = {Profile}
          // altImg
          name = "Korede Ezetah-Dare"
          courseshead = "0"
          completedhead = "0"
          />

          <div className="sidebyside">
            <Userbar/>
            <UserDash/>
          </div>
    </div>
  )
}

export default UserDB
