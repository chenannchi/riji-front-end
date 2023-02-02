// npm modules
import { useState, useEffect } from 'react'
// import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import { Routes, Route, useNavigate } from 'react-router-dom'

// page components
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import DiarybookList from './pages/DiarybookList/DiarybookList'
import DiarybookDetails from './pages/DiarybookDetails/DiarybookDetails'
import NewDiarybook from './pages/NewDiarybook/NewDiarybook'
import EditDiarybook from './pages/EditDiarybook/EditDiarybook'
import DiaryList from './pages/DiaryList/DiaryList'
import DiaryDetails from './pages/DiaryDetails/DiaryDetails'
import NewDiary from './pages/NewDiary/NewDiary'
import EditDiary from './pages/EditDiary/EditDiary'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
import * as diarybookService from './services/diarybookService'
import * as diaryService from "./services/diaryService"

// styles
import './App.css'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [diarybooks, setDiarybooks] = useState([])
  const [diaries, setDiaries] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    const fetchAllDiarybooks = async () => {
      const data = await diarybookService.index()
      setDiarybooks(data)
    }
    const fetchAllDiaries = async () => {
      const data = await diaryService.index()
      setDiaries(data)
    }

    fetchAllDiarybooks()
    fetchAllDiaries()
  }, [user])

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  const handleAddDiarybook = async (diarybookData) => {
    const newDiarybook = await diarybookService.create(diarybookData)
    setDiarybooks([newDiarybook, ...diarybooks])
    navigate('/diarybooks')
  }

  const handleUpdateDiarybook = async (diarybookData) => {
    const updatedDiarybook = await diarybookService.update(diarybookData)
    setDiarybooks(diarybooks.map((diarybook) => diarybookData._id === diarybook._id ? updatedDiarybook : diarybook))
    navigate('/diarybooks')
  }

  const handleDeleteDiarybook = async (id) => {
    const deletedDiarybook = await diarybookService.deleteDiarybook(id)
    setDiarybooks(diarybooks.filter(diarybook => diarybook._id !== deletedDiarybook._id))
    navigate('/diarybooks')
  }

  const handleAddDiary = async (diaryData) => {
    const newDiary = await diaryService.create(diaryData)
    setDiaries([newDiary, ...diaries])
    navigate('/diaries')
  }

  const handleUpdateDiary = async (diaryData) => {
    const updatedDiary = await diaryService.update(diaryData)
    setDiaries(diaries.map((diary) => diaryData._id === diary._id ? updatedDiary : diary))
    navigate('/diaries')
  }

  const handleDeleteDiary = async (id) => {
    const deletedDiary = await diaryService.deleteDiary(id)
    setDiaries(diaries.filter(diary => diary._id !== deletedDiary._id))
    navigate('/diaries')
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profiles"
          element={
            <ProtectedRoute user={user}>
              <Profiles />
            </ProtectedRoute>
          }
        />
        <Route
          path="/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/diarybooks"
          element={
            <ProtectedRoute user={user}>
              <DiarybookList diarybooks={diarybooks} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/diarybooks/:id"
          element={
            <ProtectedRoute user={user}>
              <DiarybookDetails user={user} handleDeleteDiarybook={handleDeleteDiarybook} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/diarybooks/new"
          element={
            <ProtectedRoute user={user}>
              <NewDiarybook handleAddDiarybook={handleAddDiarybook} user={user} />
            </ProtectedRoute>
          }
        />
        <Route path="/diarybooks/:id/edit" element={
          <ProtectedRoute user={user}>
            <EditDiarybook handleUpdateDiarybook={handleUpdateDiarybook} />
          </ProtectedRoute>
        } />
        <Route
          path="/diaries"
          element={
            <ProtectedRoute user={user}>
              <DiaryList diaries={diaries} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/diaries/:id"
          element={
            <ProtectedRoute user={user}>
              <DiaryDetails user={user} handleDeleteDiary={handleDeleteDiary} />
            </ProtectedRoute>
          }
        />
        <Route path="/diaries/new" element={
          <ProtectedRoute user={user}>
            <NewDiary handleAddDiary={handleAddDiary} />
          </ProtectedRoute>
        } />
        <Route path="/diaries/:id/edit" element={
          <ProtectedRoute user={user}>
            <EditDiary handleUpdateDiary={handleUpdateDiary} />
          </ProtectedRoute>
        } />
      </Routes>
    </>
  )
}

export default App
