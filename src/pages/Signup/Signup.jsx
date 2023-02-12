import { useState } from 'react'
import SignupForm from '../../components/SignupForm/SignupForm'
import styles from './Signup.module.css'

const Signup = props => {
  // const [message, setMessage] = useState([''])

  // const updateMessage = msg => {
  //   setMessage(msg)
  // }

  return (
    <main className={styles.container}>
      {/* <p>{message}</p> */}
      {/* <SignupForm {...props} updateMessage={updateMessage} /> */}
      <div id={styles.inner}>
        <div id={styles.imgContainer} >
          <div id={styles.top_img}>
            <img src='Images/friend4.jpg' alt="signup" id={styles.signup_image} />
          </div>
          <div id={styles.rect} />
          <div id={styles.bottom_img}>
            <img src="Images/diarybook.jpg" alt="signup" id={styles.signup_image2} />
          </div>
        </div>
        <SignupForm {...props} />
      </div>
    </main>
  )
}

export default Signup
