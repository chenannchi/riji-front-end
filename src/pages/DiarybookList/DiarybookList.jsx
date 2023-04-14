import styles from './DiarybookList.module.css'
import DiarybookCard from '../../components/DiarybookCard/DiarybookCard'

const DiarybookList = (props) => {
  // console.log(props.diarybooks)
  return (
    <main className={styles.container}>
      {props.diarybooks.map((diarybook) => (
        // console.log(props.user.profile)
        diarybook.owner.includes(props.user.profile) ?
          <DiarybookCard key={diarybook._id} diarybook={diarybook} />
          : null
      ))}
    </main>
  )
}

export default DiarybookList