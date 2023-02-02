import { useState } from "react"
import styles from './NewDiary.module.css'

const NewDiary = (props) => {
  const [form, setForm] = useState({
    title: '',
    content: '',
    music: '',
  })

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
		props.handleAddDiary(form)
  }

  return (
    <main className={styles.container}>
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
    </main>
  )
}

export default NewDiary