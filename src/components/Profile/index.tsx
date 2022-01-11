import { useNavigate } from 'react-router-dom'
import { UserData } from '../../types'
import TableUsers from '../TableUsers'

interface Props {
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>,
  userData: UserData[]
}

const Profile: React.FC<Props> = ({ setIsAuth, userData }) => {
  let navigate = useNavigate()
  const handleLogout = () => {
    setIsAuth(false)
    navigate('/home')
  }
  return (
    <>
      <button onClick={() => handleLogout()}>Logout</button>
      <TableUsers userData={userData} />
    </>
  )
}

export default Profile
