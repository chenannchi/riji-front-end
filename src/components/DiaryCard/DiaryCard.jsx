import { Link } from "react-router-dom"
import styles from './DiaryCard.module.css'
const DiaryCard = ({ diary }) => {
  return (
    <div className={styles.container}>
      <Link to={`/diaries/${diary._id}`}>
        <div className={styles.diary_preview}>
          <div>{diary.title}</div>
          {/* <p>{diary.content}</p> */}
          <div>{diary.createdAt.slice(0, 10)}</div>
        </div>
      </Link>
    </div>
  )
}

export default DiaryCard