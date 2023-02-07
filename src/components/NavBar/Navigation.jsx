import NavLinks from "./NavLinks"
import styles from './NavBar.module.css'

const Navigation = ({ user, handleLogout }) => {
  return (
    <nav className={styles.navigation}>
      <NavLinks user={user} handleLogout={handleLogout} />
    </nav>
  )
}

export default Navigation