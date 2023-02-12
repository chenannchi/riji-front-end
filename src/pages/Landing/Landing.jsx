import styles from './Landing.module.css'
import { Link } from 'react-router-dom'
import Footer from "../../components/Footer/Footer"
import Button from '@mui/material/Button';

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <section id={styles.first}>
        <div>
          <div className={styles.title}>Welcome to Riji, <br />{user ? user.name : 'friend'}!</div>
        </div>
      </section>
      <section id={styles.second}>
        <div className={styles.title}>About</div>
        <p>Riji is a website that can let you write your diaries and share them with your love ones! Sounds great right? Let's share our daily life with our friends, our family, and whoever we want to share our stories with! The last but not the least, do you know what Riji stands for? It's actually the pronounce of "Diary" in Mandarin. Sounds cool right? Let's begin our diary sharing journey!</p>
      </section>
      <section id={styles.third}>
        {/* <img src='Images/woman.svg' alt="woman_avatar" className={styles.avatar} /> */}
        <div className={styles.hint}>
          Start your journey!
        </div>
        {
          user?
          <div className={styles.btns}>
            <Link to={`diaries/new`}>
              {/* <button>Add a Diary</button> */}
              <Button variant="contained" className={styles.button}>Add a Diary</Button>
            </Link>
            <Link to={`diarybooks/new`}>
              {/* <button>Add a Diarybook</button> */}
              <Button variant="contained" className={styles.button}>Add a Diarybook</Button>
            </Link>
          </div>
          :
          <div className={styles.btns}>
            <Link to="signup">
              {/* <button>Create Account</button> */}
              <Button variant="contained" className={styles.button}>Create Account</Button>
            </Link>
            <Link to="login">
              {/* <button>Log In</button> */}
              <Button variant="contained" className={styles.button}>Log In</Button>
            </Link>
          </div>
        }
      </section>
      <Footer/>
    </main>
  )
}

export default Landing
