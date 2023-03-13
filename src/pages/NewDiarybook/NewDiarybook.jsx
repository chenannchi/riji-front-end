import { useEffect, useState } from "react"
// import Loading from "../Loading/Loading"
import styles from './NewDiarybook.module.css'
// import Loading from "../Loading/Loading.jsx"

const NewDiarybook = (props) => {
  const [form, setForm] = useState({
    name: '',
    description: ''
  })

  const [newDiaryImg, setNewDiaryImg] = useState(null)
  // const [loaded, setLoaded] = useState(false)

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleAddDiarybook(form)
  }

  useEffect(() => {
    const diaryIds = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    setNewDiaryImg(Math.floor(Math.random() * (diaryIds.length)))
  }, [props.user])

  // if (!loaded) return <Loading /> 

  return (
    // loaded?
    <main className={styles.container}>
      <div className={styles.form_section}>
        <img src={`../../Images/DiaryImg/${newDiaryImg}.webp`} alt="new-diary"/>
        <form onSubmit={handleSubmit}>
          <h1>New Diarybook</h1>
          <label htmlFor="name-input">Name</label>
          <input
            required
            type="text"
            name="name"
            id="name-input"
            value={form.name}
            placeholder="Name"
            onChange={handleChange}
          />
          <label htmlFor="description-input">Description</label>
          <textarea
            required
            type="text"
            name="description"
            id="description-input"
            value={form.description}
            placeholder="Description"
            onChange={handleChange}
          />
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </main>
    // :
    // <Loading />

  )
}

export default NewDiarybook