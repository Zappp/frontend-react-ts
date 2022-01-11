import { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Home from './components/Home'
import Profile from './components/Profile'
import UserForm from './components/UserForm'

const userData = [
  {
    name: 'Andrzej',
    surname: 'Kowalski',
    email: 'abcdefgh@gmail.com',
    password: 'xyz',
    category: 'PRIVATE',
    telNumber: 'sssssssss',
    birthDate: 'dd-mm-yyyy'
  },
  {
    name: 'Andrzej2',
    surname: 'Kowalski2',
    email: 'a@gmail.com',
    password: 'zyx',
    category: 'BUSINESS',
    telNumber: 'sssssssss',
    birthDate: 'dd-mm-yyyy'
  }
]

const App = () => {
  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    const isAuthLocalStorage = localStorage.getItem('isAuth')
    isAuthLocalStorage && JSON.parse(isAuthLocalStorage)
      ? setIsAuth(true)
      : setIsAuth(false)
  }, [])

  useEffect(() => {
    localStorage.setItem('isAuth', String(isAuth))
  }, [isAuth])

  return (
    <Routes>
      {!isAuth && (
        <>
          <Route path='/' element={<Navigate to='/home' />} />
          <Route
            path='/home'
            element={
              <Home userData={userData} isAuth={isAuth} setIsAuth={setIsAuth} />
            }
          />
        </>
      )}
      {isAuth && (
        <>
          <Route
            path='/profile'
            element={
              <Profile
                isAuth={isAuth}
                setIsAuth={setIsAuth}
                userData={userData}
              />
            }
          />
          <Route path='/addUser' element={<UserForm />} />
          <Route path='/editUser' element={<UserForm />} />
        </>
      )}
      <Route
        path='*'
        element={<Navigate to={isAuth ? '/profile' : '/home'} />}
      />
    </Routes>
  )
}

export default App
