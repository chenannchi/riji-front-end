import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import styles from './DiarybookDetails.module.css'
import DiaryCard from "../../components/DiaryCard/DiaryCard"

// Services
import * as diarybookService from '../../services/diarybookService'

// Components
import Loading from "../Loading/Loading.jsx"

const DiarybookDetails = (props) => {
  const { id } = useParams()
  const [diarybook, setDiarybook] = useState(null)

  useEffect(() => {
    const fetchDiarybook = async () => {
      const data = await diarybookService.show(id)
      setDiarybook(data)
    }
    fetchDiarybook()
  }, [id])

  // Verify state with a console.log or React Dev Tools:
  // console.log('Diarybook State:', diarybook)

  if (!diarybook) return <Loading />

  return (
    <main className={styles.container}>
      {/* <article> */}
      <header>
        <h1>{diarybook.name}</h1>
        <div className={styles.btns}>
          {diarybook.owner.filter(member => member._id === props.user.profile) &&
            <div>
              <Link to={`/diarybooks/${id}/edit`} state={diarybook}>Edit</Link>
              <div onClick={() => props.handleDeleteDiarybook(id)}>Delete</div>
            </div>
          }
        </div>
        <div id={styles.owner}>
          <div>Owned by</div>
          {diarybook.owner.map(member => (
            <div key={member._id}>
              <div>{member.name}</div>
              {member !== diarybook.owner[diarybook.owner.length - 1] ? <span>,</span> : null}
            </div>
          ))}
        </div>
        
      </header>


      <p>{diarybook.description}</p>
      <section>
        <h1>Diaries</h1>
        <div className={styles.diaryContainer}>
          {diarybook.diaries.map(diary => (
            // <Link to={`/diarybooks/${id}/diaries/${diary._id}`} key={diary._id}>{diary.title}</Link>
            <DiaryCard key={diary._id} diary={diary} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default DiarybookDetails