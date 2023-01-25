import styles from './DiarybookList.module.css'
import DiarybookCard from '../../components/DiarybookCard/DiarybookCard'

const DiarybookList = (props) => {
  console.log(props.diarybooks)
  return (
    <main className={styles.container}>
      {props.diarybooks.map((diarybook) => (
        <DiarybookCard key={diarybook._id} diarybook={diarybook} />
      ))}
    </main>
  )
}

export default DiarybookList