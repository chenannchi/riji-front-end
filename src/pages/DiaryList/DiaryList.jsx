import styles from './DiaryList.module.css'
import DiaryCard from '../../components/DiaryCard/DiaryCard'

const DiaryList = (props) => {
  // console.log(props.diaries)
  return (
    <main className={styles.container}>
      {props.diaries.map((diary) => (
        <DiaryCard key={diary._id} diary={diary} />
      ))}
    </main>
  )
}

export default DiaryList