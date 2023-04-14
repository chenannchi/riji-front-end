import styles from './DiaryList.module.css'
import DiaryCard from '../../components/DiaryCard/DiaryCard'

const DiaryList = (props) => {
  // console.log(props.diaries)
  return (
    <main className={styles.page_container}>
      <div>Search Bar</div>
      <div className={styles.container}>
        {props.diaries.map((diary) => (
          diary.author._id === props.user.profile?
          <DiaryCard key={diary._id} diary={diary} />
          :null
        ))}
      </div>
    </main>
  )
}

export default DiaryList