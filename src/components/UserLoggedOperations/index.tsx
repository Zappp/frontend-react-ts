import { useNavigate } from 'react-router-dom'

interface Props {
  isAuth: boolean
}

const UserLoggedInOperations: React.FC<Props> = ({ isAuth }) => {
  const navigate = useNavigate()
  const editUser = () => {
      navigate('/editUser')
  }
  const deleteUser = () => {
    //
  }

  return (
    <>
      {isAuth ? (
        <>
          <button onClick={() => editUser()}>edytuj użytkownika</button>
          <button onClick={() => deleteUser()}>usuń użytkownika</button>
        </>
      ) : null}
    </>
  )
}

export default UserLoggedInOperations
