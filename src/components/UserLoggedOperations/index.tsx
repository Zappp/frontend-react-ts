import { useNavigate } from 'react-router-dom'

interface Props {
  userId: number | undefined
}

const UserLoggedInOperations: React.FC<Props> = ({ userId }) => {
  const navigate = useNavigate()
  const editUser = () => {
    navigate(`/profile/editUser/${userId}`)
  }
  const deleteUser = () => {
    //
  }

  return (
    <>
      <td style={{ cursor: 'pointer' }} onClick={() => editUser()}>
        Edytuj użytkownika
      </td>

      <td style={{ cursor: 'pointer' }} onClick={() => deleteUser()}>
        Usuń użytkownika
      </td>
    </>
  )
}

export default UserLoggedInOperations
