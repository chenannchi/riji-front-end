import NavLinks from "./NavLinks"
import styles from './NavBar.module.css'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { useState } from "react"

const MobileNavBar = ({ user, handleLogout }) => {

  const [open, setOpen] = useState(false)

  const hamburgerIcon = <AiOutlineMenu
    className={styles.hamburger}
    size="30px"
    color="white"
    onClick={() => setOpen(!open)}
  />

  const closeIcon = <AiOutlineClose
    className={styles.hamburger}
    size="30px"
    color="white"
    onClick={() => setOpen(!open)} />

  const closeMobileMenu = () => setOpen(false)
  
  return (
    <nav className={styles.mobileNavigation}>
      {open
        ? closeIcon
        : hamburgerIcon}
      {open && <NavLinks user={user} handleLogout={handleLogout} 
      closeMobileMenu={closeMobileMenu} isMobile={true}/>}

    </nav>
  )
}

export default MobileNavBar