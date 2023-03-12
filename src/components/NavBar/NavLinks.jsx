import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'

const NavBar = ({ user, handleLogout, closeMobileMenu, isMobile }) => {

  const logOut = () => {
    handleLogout()
    isMobile && closeMobileMenu()
  }

  return (
    <>
      {user
        ?  isMobile ?
        <ul>
          <Link to="/" onClick={() => isMobile && closeMobileMenu()}><li>Home</li></Link>
          <Link to="/profiles" onClick={() => isMobile && closeMobileMenu()}><li>Profiles</li></Link>
          <Link to="/diarybooks" onClick={() => isMobile && closeMobileMenu()}><li>Diarybooks</li></Link>
          <Link to="/diarybooks/new" onClick={() => isMobile && closeMobileMenu()}><li>New Diarybook</li></Link>
          <Link to="/diaries" onClick={() => isMobile && closeMobileMenu()}><li>Diaries</li></Link>
          <Link to="/diaries/new" onClick={() => isMobile && closeMobileMenu()}><li>New Diary</li></Link>
          <Link to="/" onClick={()=>logOut()}><li>Log Out</li></Link>
          <Link to="/changePassword" onClick={() => isMobile && closeMobileMenu()}><li>Change Password</li></Link>
        </ul>
        :
        <ul>
          <Link to="/"><img src='logo.png' alt='larger_logo' id={styles.logo} /></Link>
          <Link to="/profiles"><li>Profiles</li></Link>
          <Link to="/diarybooks"><li>Diarybooks</li></Link>
          <Link to="/diarybooks/new"><li>New Diarybook</li></Link>
          <Link to="/diaries"><li>Diaries</li></Link>
          <Link to="/diaries/new"><li>New Diary</li></Link>
          <Link to="/" onClick={handleLogout}><li>Log Out</li></Link>
          <Link to="/changePassword"><li>Change Password</li></Link>
        </ul>
      :
        <ul>
          <Link to="/"><li>Home</li></Link>
          <Link to="/login" onClick={() => isMobile && closeMobileMenu()}><li>Log In</li></Link>
          <Link to="/signup" onClick={() => isMobile && closeMobileMenu()}><li>Sign Up</li></Link>
        </ul>
      }
    </>
  )
}

export default NavBar
