import { Link } from "react-router-dom"
import styles from './DiarybookCard.module.css'

// Components


const DiarybookCard = ({ diarybook }) => {
  return (
    <Link to={`/diarybooks/${diarybook._id}`}>
      <div className={styles.flip_card}>
        <div className={styles.flip_card_inner}>
          <div className={styles.flip_card_front}>
            <h1>{diarybook.name}</h1>
          </div>
          <div className={styles.flip_card_back}>
            <p>{diarybook.description}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default DiarybookCard