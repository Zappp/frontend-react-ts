import { useNavigate } from 'react-router-dom'

interface Props {
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>
}

const Profile: React.FC<Props> = ({ setIsAuth }) => {
  let navigate = useNavigate()
  const handleLogout = () => {
    setIsAuth(false)
    navigate('/login')
  }
  return <button onClick={() => handleLogout()}>Logout</button>
}

export default Profile
