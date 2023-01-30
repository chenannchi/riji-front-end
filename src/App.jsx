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

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
import * as diarybookService from './services/diarybookService'

// styles
import './App.css'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [diarybooks, setDiarybooks] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    const fetchAllDiarybooks = async () => {
      const data = await diarybookService.index()
      setDiarybooks(data)
    }
    fetchAllDiarybooks()
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
              <DiarybookDetails user={user} />
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
      </Routes>
    </>
  )
}

export default App
