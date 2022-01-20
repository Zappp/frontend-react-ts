import { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useReducer } from 'react'

import Home from './components/Home'
import Profile from './components/Profile'
import AddUser from './components/AddUser'
import EditUser from './components/EditUser'

import { userProps, UserDispatchActionProps } from './types'

const usersData = [
  {
    id: 1,
    name: 'Andrzej',
    surname: 'Kowalski',
    email: 'abcdefgh@gmail.com',
    password: 'xyz',
    category: 'PRIVATE',
    telNumber: 'sssssssss',
    birthDate: 'dd-mm-yyyy',
    isVisible: false
  },
  {
    id: 2,
    name: 'Andrzej2',
    surname: 'Kowalski2',
    email: 'a@gmail.com',
    password: 'zyx',
    category: 'BUSINESS',
    telNumber: 'sssssssss',
    birthDate: 'dd-mm-yyyy',
    isVisible: false
  }
]

const usersReducer = (
  usersState: userProps[],
  action: UserDispatchActionProps
) => {
  switch (action.type) {
    case 'TOGGLE_USER_VISIBLE_BY_ID':
      let newUsersState = usersState.map(user => {
        if (user.id === action.payload.user.id) {
          return { ...user, isVisible: !user.isVisible }
        }
        return user
      })
      return newUsersState
    default:
      return usersState
  }
}

const App = () => {
  const [isAuth, setIsAuth] = useState(false)
  const [usersState, dispatchUser] = useReducer(usersReducer, usersData)

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
          <Route path='/' element={<Navigate to='home' />} />
          <Route
            path='home'
            element={
              <Home
                usersState={usersState}
                dispatchUser={dispatchUser}
                isAuth={isAuth}
                setIsAuth={setIsAuth}
              />
            }
          />
        </>
      )}
      {isAuth && (
        <Route
          path='profile'
          element={
            <Profile
              isAuth={isAuth}
              setIsAuth={setIsAuth}
              usersState={usersState}
              dispatchUser={dispatchUser}
            />
          }
        >
          <Route path='addUser' element={<AddUser />} />
          <Route path='editUser/:userId' element={<EditUser />} />
        </Route>
      )}
      <Route path='*' element={<Navigate to={isAuth ? 'profile' : 'home'} />} />
    </Routes>
  )
}

export default App
