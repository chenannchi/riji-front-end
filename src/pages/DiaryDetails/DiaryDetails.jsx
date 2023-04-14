import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import styles from './DiaryDetails.module.css'
import Loading from "../Loading/Loading"
import { modifyMusicLink } from "../../modifyMusicLink"
// import PopUp from "../../components/PopUp/PopUp"

// Services
import * as diaryService from '../../services/diaryService'

const DiaryDetails = (props) => {
  const { id } = useParams()
  const [diary, setDiary] = useState(null)
  const [diarybookId, setDiarybookId] = useState(null)

  useEffect(() => {
    const fetchDiary = async () => {
      const data = await diaryService.show(id)
      setDiary(data)
    }
    fetchDiary()
  }, [id])

  const handleChange = (e) => {
    setDiarybookId(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleClick()
    props.handleAddDiaryToDiarybook(diarybookId, id)
  }

  const handleClick = () => {
    props.togglePop()
  }

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
                <div id={styles.shareBlock}>
                  <div className={styles.popup}>

                    <div className="btn" onClick={props.togglePop}>
                      <button>Share</button>
                    </div>
                    {props.seen ?
                      <div className="modal">
                        <div className="modal_content">
                          <span className="close" onClick={handleClick}>X</span>
                          <div>Share Your Diary</div>
                          <form id={styles.add_diary_to_diarybook} onSubmit={handleSubmit}>
                            <select name="diarybook_id" id="diarybook-input" onChange={handleChange}>
                              <option value="none">Select an Option</option>
                              {props.diarybooks.map(
                                diarybook => (
                                  diarybook.diaries.some(diary => diary === id) ? null : <option value={diarybook._id} key={diarybook._id}>{diarybook.name}</option>

                                )
                              )}
                            </select>
                            <button type="submit">Share</button>
                          </form>
                        </div>
                      </div>
                      :
                      null}



                  </div>
                </div>
                <button onClick={() => props.handleDeleteDiary(id)}>Delete</button>
              </>
            }
          </span>
        </header>
        <p>{diary.content}</p>
        {diary.music?
        <iframe src={modifyMusicLink(diary.music)} title={diary.title} width="420" height="315"></iframe>
        :
        null
        }
      </article>
    </main>
  )
}

export default DiaryDetails