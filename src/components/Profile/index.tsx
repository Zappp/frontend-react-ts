import { useNavigate } from 'react-router-dom'
import { UserData } from '../../types'
import TableUsers from '../TableUsers'

interface Props {
  userData: UserData[]
  isAuth: boolean
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>
}

const Profile: React.FC<Props> = ({ isAuth, setIsAuth, userData }) => {
  let navigate = useNavigate()
  const handleLogout = () => {
    setIsAuth(false)
    navigate('/home')
  }
  const addUserData = () => {
    navigate('/addUser')
  }
  return (
    <>
      <button onClick={() => handleLogout()}>Wyloguj</button>
      <button onClick={() => addUserData()}>Dodaj użytkownika</button>
      <TableUsers userData={userData} isAuth={isAuth} />
    </>
  )
}

export default Profile
