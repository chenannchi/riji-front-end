import { Link } from "react-router-dom"
import styles from './DiarybookCard.module.css'

// Components


const DiarybookCard = ({ diarybook }) => {
  return (
    <Link to={`/diarybooks/${diarybook._id}`}>
      <article className={styles.container}>
        <header>
          <h1>{diarybook.name}</h1>
        </header>
        <p>{diarybook.description}</p>
      </article>
    </Link>
  )
}

export default DiarybookCard