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
          <td style={{ cursor: 'pointer' }} onClick={() => editUser()}>
            Edytuj użytkownika
          </td>

          <td style={{ cursor: 'pointer' }} onClick={() => deleteUser()}>
            Usuń użytkownika
          </td>
        </>
      ) : null}
    </>
  )
}

export default UserLoggedInOperations
