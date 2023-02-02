import { useState } from "react"
import { useLocation } from "react-router-dom"
import styles from './EditDiary.module.css'

const EditDiary = (props) => {
  const { state } = useLocation()
  const [form, setForm] = useState(state)

  console.log(state)
  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleUpdateDiary(form)
  }

  return (
    <main className={styles.container}>
      <form onSubmit={handleSubmit}>
        <h1>Edit Blog</h1>
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
    </main>
  )
}

export default EditDiary