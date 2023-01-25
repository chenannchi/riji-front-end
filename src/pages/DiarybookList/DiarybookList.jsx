import styles from './DiarybookList.module.css'

const DiarybookList = (props) => {
  console.log(props.diarybooks)
  return (
    <main className={styles.container}>
      {props.diarybooks.map((diarybook) => (
        <p key={diarybook._id}>
          {diarybook.name}
        </p>
      ))}
    </main>
  )
}

export default DiarybookList