import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import styles from './DiarybookDetails.module.css'

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
        <span>
          {/* {console.log("owner",diarybook.owner)}
          {console.log("user", props.user.profile)}
          {console.log(diarybook.owner.includes(props.user.profile))} */}
          {diarybook.owner.filter(member => member._id === props.user.profile) &&
            <>
              <Link to={`/diarybooks/${id}/edit`} state={diarybook}>Edit</Link>
              <button onClick={() => props.handleDeleteDiarybook(id)}>Delete</button>
            </>
          }
        </span>
      </header>

      <div>Owned by
        {diarybook.owner.map(member => (
          <span key={member._id}>
            {member.name}
            {member !== diarybook.owner[diarybook.owner.length - 1] ? <span>,</span> : <span></span>}
          </span>
        ))}
      </div>
      {/* {console.log(diarybook.owner.length)} */}

      <p>{diarybook.description}</p>
      {/* </article> */}
      <section>
        <h1>Diaries</h1>
        {diarybook.diaries.map(diary => (
          <Link to={`/diarybooks/${id}/diaries/${diary._id}`} key={diary._id}>{diary.title}</Link>
        ))}
      </section>
    </main>
  )
}

export default DiarybookDetails