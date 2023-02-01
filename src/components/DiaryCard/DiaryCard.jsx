import { Link } from "react-router-dom"
import styles from './DiaryCard.module.css'
const DiaryCard = ({ diary }) => {
  return (
    <Link to={`/diaries/${diary._id}`}>
      <article className={styles.container}>
        <header>
          <h1>{diary.title}</h1>
        </header>
        <p>{diary.content}</p>
      </article>
    </Link>
  )
}

export default DiaryCard