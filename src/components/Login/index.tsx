import React from 'react'
import { useNavigate } from 'react-router-dom'

interface Props {
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>
}

const Login: React.FC<Props> = ({ setIsAuth }) => {
  let navigate = useNavigate()
  const handleLogin = () => {
    setIsAuth(true)
    navigate('/profile')
  }
  const handleNavigateMenu = () => {
      navigate('/home')
  }
  return (
    <>
      <button onClick={() => handleLogin()}>Login</button>
      <br></br>
      <button onClick={() => handleNavigateMenu()}>Powrót do menu</button>
    </>
  )
}

export default Login
