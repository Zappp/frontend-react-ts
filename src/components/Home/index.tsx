import { useNavigate } from 'react-router-dom'

import TableUsers from '../TableUsers'

import { userProps, UserDispatchActionProps } from '../../types'

interface Props {
  usersState: userProps[]
  dispatchUser: React.Dispatch<UserDispatchActionProps>
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>
  isAuth: boolean
}

const Home: React.FC<Props> = ({
  usersState,
  dispatchUser,
  setIsAuth,
  isAuth
}) => {
  let navigate = useNavigate()
  const handleLogin = () => {
    setIsAuth(true)
    navigate('/profile')
  }
  return (
    <>
      <button onClick={() => handleLogin()}>Login</button>
      <TableUsers
        usersState={usersState}
        dispatchUser={dispatchUser}
        isAuth={isAuth}
      />
    </>
  )
}
export default Home
