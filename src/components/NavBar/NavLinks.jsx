import { Link } from 'react-router-dom'
import styles from "./NavBar.module.css"

const NavBar = ({ user, handleLogout, closeMobileMenu, isMobile }) => {

  const logOut = () => {
    handleLogout()
    isMobile && closeMobileMenu()
  }

  return (
    <nav>
      {user
        ?  isMobile ?
        <ul>
          <Link to="/" onClick={() => isMobile && closeMobileMenu()}><li>Home</li></Link>
          <Link to="/profiles" onClick={() => isMobile && closeMobileMenu()}><li>Profiles</li></Link>
          <Link to="/diarybooks" onClick={() => isMobile && closeMobileMenu()}><li>DIARYBOOKS</li></Link>
          <Link to="/diarybooks/new" onClick={() => isMobile && closeMobileMenu()}><li>NEW DIARYBOOK</li></Link>
          <Link to="/diaries" onClick={() => isMobile && closeMobileMenu()}><li>DIARIES</li></Link>
          <Link to="/diaries/new" onClick={() => isMobile && closeMobileMenu()}><li>NEW DIARY</li></Link>
          <Link to="" onClick={()=>logOut()}><li>LOG OUT</li></Link>
          <Link to="/changePassword"><li>Change Password</li></Link>
        </ul>
        :
        <ul>
          <Link to="/"><li>Home</li></Link>
          <Link to="/profiles"><li>Profiles</li></Link>
          <Link to="/diarybooks"><li>DIARYBOOKS</li></Link>
          <Link to="/diarybooks/new"><li>NEW DIARYBOOK</li></Link>
          <Link to="/diaries"><li>DIARIES</li></Link>
          <Link to="/diaries/new"><li>NEW DIARY</li></Link>
          <Link to="" onClick={handleLogout}><li>LOG OUT</li></Link>
          <Link to="/changePassword"><li>Change Password</li></Link>
        </ul>
      :
        <ul>
          <Link to="/login" onClick={() => isMobile && closeMobileMenu()}><li>Log In</li></Link>
          <Link to="/signup" onClick={() => isMobile && closeMobileMenu()}><li>Sign Up</li></Link>
        </ul>
      }
    </nav>
  )
}

export default NavBar
