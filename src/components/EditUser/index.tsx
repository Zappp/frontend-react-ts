import { useNavigate, useParams } from 'react-router-dom'
import UserForm from '../UserForm'

const EditUser = () => {
  let { userId } = useParams()
  let navigate = useNavigate()
  const hideForm = () => {
    navigate('/profile')
  }
  return (
    <>
      <h1>edytuj użytkownika (id = {userId})</h1>
      <UserForm />
      <br></br>
      <button onClick={hideForm}>ukryj formularz</button>
    </>
  )
}
export default EditUser
