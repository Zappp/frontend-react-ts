import { useNavigate } from 'react-router-dom'

import UserForm from '../UserForm'

const AddUser = () => {
  let navigate = useNavigate()
  const hideForm = () => {
    navigate('/profile')
  }
  return (
    <>
      <h1>dodaj uzytkownika</h1>
      <UserForm />
      <br></br>
      <button onClick={hideForm}>ukryj formularz</button>
    </>
  )
}
export default AddUser
