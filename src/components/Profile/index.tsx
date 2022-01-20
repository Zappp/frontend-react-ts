import { Outlet, useNavigate } from 'react-router-dom'

import TableUsers from '../TableUsers'

import { userProps, UserDispatchActionProps } from '../../types'

interface Props {
  usersState: userProps[]
  dispatchUser: React.Dispatch<UserDispatchActionProps>
  isAuth: boolean
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>
}

const Profile: React.FC<Props> = ({
  isAuth,
  setIsAuth,
  usersState,
  dispatchUser
}) => {
  let navigate = useNavigate()
  const handleLogout = () => {
    setIsAuth(false)
    navigate('/home')
  }
  const createNewUser = () => {
    navigate('/profile/addUser')
  }
  return (
    <>
      <button onClick={() => handleLogout()}>Wyloguj</button>
      <button onClick={() => createNewUser()}>Dodaj użytkownika</button>
      <TableUsers
        usersState={usersState}
        dispatchUser={dispatchUser}
        isAuth={isAuth}
      />
      <Outlet />
    </>
  )
}

export default Profile
