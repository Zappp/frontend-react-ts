import { useNavigate } from 'react-router-dom'
import { UserData } from '../../types'
import TableUsers from '../TableUsers'


interface Props {
  userData: UserData[],
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>,
  isAuth: boolean
}

const Home: React.FC<Props> = ({ userData, setIsAuth, isAuth }) => {
  let navigate = useNavigate()
  const handleLogin = () => {
    setIsAuth(true)
    navigate('/profile')
  }
  return (
    <>
      <button onClick={() => handleLogin()}>Login</button>
      <TableUsers userData={userData} isAuth={isAuth} />
    </>
  )
}
export default Home
