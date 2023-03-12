import { Link } from "react-router-dom"
import styles from './DiaryCard.module.css'
const DiaryCard = ({ diary }) => {
  return (
    <Link to={`/diaries/${diary._id}`}>
      <div className={styles.container}>
        <div className={styles.diary_preview}>
          <div>{diary.title}</div>
          {/* <p>{diary.content}</p> */}
          <div>{diary.createdAt.slice(0,10)}</div>
        </div>
      </div>
    </Link>
  )
}

export default DiaryCard