import { useEffect, useState } from "react"
import styles from './NewDiary.module.css'
import Loading from "../Loading/Loading"

const NewDiary = (props) => {
  const [form, setForm] = useState({
    title: '',
    content: '',
    music: '',
  })

  const [newDiaryImg, setNewDiaryImg] = useState(null)

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
		props.handleAddDiary(form)
  }

  useEffect(() => {
    const diaryIds = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    setNewDiaryImg(Math.floor(Math.random()*(diaryIds.length)))    
  }, [props.user])

  // if (!newDiaryImg) return <Loading /> 

  return (
    <main className={styles.container}>
      <div className={styles.form_section}>

        <form onSubmit={handleSubmit}>
          <label htmlFor="title-input">Title</label>
          <input
            required
            type="text"
            name="title"
            id="title-input"
            value={form.title}
            placeholder="Title"
            onChange={handleChange}
          />
          <label htmlFor="content-input">Content</label>
          <textarea
            required
            type="text"
            name="content"
            id="content-input"
            value={form.content}
            placeholder="Text"
            onChange={handleChange}
          />
          <label htmlFor="music-input">Music</label>
          <input
            required
            name="music"
            id="music-input"
            value={form.music}
            onChange={handleChange}
          >
          </input>
          <button type="submit">SUBMIT</button>
        </form>
        {
          <img src={`../../Images/DiaryImg/${newDiaryImg}.webp`} alt="new-diary" />
        }
      </div>
    </main>
  )
}

export default NewDiary