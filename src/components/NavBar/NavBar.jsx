import styles from "./NavBar.module.css"
import MobileNavBar from './MobileNavBar'
import Navigation from "./Navigation"

const NavBar = ({ user, handleLogout }) => {
  return (
    <div className={styles.navbar}>
      <MobileNavBar user={user} handleLogout={handleLogout}/>
      <Navigation user={user} handleLogout={handleLogout}/>
    </div>
  )
}

export default NavBar
