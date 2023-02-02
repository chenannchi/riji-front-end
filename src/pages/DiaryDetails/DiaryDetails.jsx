import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import styles from './DiaryDetails.module.css'
import Loading from "../Loading/Loading"
import { modifyMusicLink } from "../../modifyMusicLink"

// Services
import * as diaryService from '../../services/diaryService'

const DiaryDetails = (props) => {
  const { id } = useParams()
  const [diary, setDiary] = useState(null)

  useEffect(() => {
    const fetchDiary = async () => {
      const data = await diaryService.show(id)
      setDiary(data)
    }
    fetchDiary()
  }, [id])

  // Verify state with a console.log or React Dev Tools:
  // console.log('Diary State:', diary)
  if (!diary) return <Loading />

  return (
    <main className={styles.container}>
      <article>
        <header>
          <h1>{diary.title}</h1>
          <span>
          {diary.author._id === props.user.profile &&
            <>
              <Link to={`/diaries/${id}/edit`} state={diary}>Edit</Link>
              {/* <button onClick={() => props.handleDeleteDiary(id)}>Delete</button> */}
            </>
          }
        </span>
        </header>
        <p>{diary.content}</p>
        <iframe src={modifyMusicLink(diary.music)} title={diary.title} width="420" height="315"></iframe>
      </article>
    </main>
  )
}

export default DiaryDetails