import styles from './Landing.module.css'
import { Link } from 'react-router-dom'

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
        <p>Let me introduce Riji with you! <br/><br/>Riji is a website that can let you write your diaries and share them with your love ones! Sounds great right? Let's share our daily life with our friends, our family, and anyone who we want to share your stories with! The last but not the least, do you know what Riji stands for? It's actually the pronounce of diary in Mandarin. Sounds cool right? Let's begin our diary sharing journey!</p>
      </section>
      <section id={styles.third}>
        <div className={styles.hint}>
          Start your journey!
        </div>
        <div className={styles.btns}>
          <Link to={`diaries/new`}>
            <button>Add a Diary</button>
          </Link>
          <Link to={`diarybooks/new`}>
            <button>Add a Diarybook</button>
          </Link>
        </div>
      </section>
      <footer className={styles.footer} >
        <div>
          © 2023 Riji, Inc.
        </div>
      </footer>
    </main>
  )
}

export default Landing
