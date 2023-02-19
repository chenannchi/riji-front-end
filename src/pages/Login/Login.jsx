import { useState } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import styles from './Login.module.css'

const LoginPage = props => {
  const [message, setMessage] = useState([''])

  const updateMessage = msg => {
    setMessage(msg)
  }

  return (
    <main className={styles.container}>
      <div id={styles.inner}>
        <h1>Log In</h1>
        <p>{message}</p>
        <div>
          <LoginForm
            handleSignupOrLogin={props.handleSignupOrLogin}
            updateMessage={updateMessage}
          />
        </div>
      </div>
    </main >
  )
}

export default LoginPage
