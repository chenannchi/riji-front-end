import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import styles from './DiarybookDetails.module.css'
import DiaryCard from "../../components/DiaryCard/DiaryCard"
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai"

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
    <main className={styles.pageContainer}>
      <div className={styles.container}>
        <div id={styles.left} className={styles.area}>
          <div>
            <div id={styles.name}>
              <h2>{diarybook.name}</h2>
              <div className={styles.btns}>
                {diarybook.owner.filter(member => member._id === props.user.profile) &&
                  <div>
                    <Link to={`/diarybooks/${id}/edit`} state={diarybook}><AiOutlineEdit /></Link>
                    <div onClick={() => props.handleDeleteDiarybook(id)}><AiOutlineDelete /></div>
                  </div>
                }
              </div>
            </div>
            <div>{diarybook.description}</div>
            <div id={styles.owner}>
              <div>Owned by&nbsp;</div>
              {diarybook.owner.map(member => (
                <div key={member._id}>
                  <div><b>{member.name === props.user.name ? "You" : `${member.name}`}</b></div>
                  {member !== diarybook.owner[diarybook.owner.length - 1] ? <span>,</span> : null}
                </div>
              ))}
            </div>
          </div>
          
          <section>
            <h2>Diaries</h2>
            <div className={styles.diaryContainer}>
              {
                diarybook.diaries.length ?
                  diarybook.diaries.map(diary => (
                    <DiaryCard key={diary._id} diary={diary} />
                  ))
                  :
                  <div>No Diaries Yet!</div>
              }
            </div>
          </section>
        </div>
        <div id={styles.left} className={styles.area}>
          Diary Preview
        </div>
      </div>
    </main>
  )
}

export default DiarybookDetails