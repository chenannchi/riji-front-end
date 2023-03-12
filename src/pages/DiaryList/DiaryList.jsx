import styles from './DiaryList.module.css'
import DiaryCard from '../../components/DiaryCard/DiaryCard'

const DiaryList = (props) => {
  // console.log(props.diaries)
  return (
    <main className={styles.page_container}>
      <div>Search Bar</div>
      <div className={styles.container}>
        {props.diaries.map((diary) => (
          <DiaryCard key={diary._id} diary={diary} />
        ))}
      </div>
    </main>
  )
}

export default DiaryList