import { useReducer } from 'react'
import CustomInputUser from '../CustomInputUser'
import UserSwitch from '../UserSwitch'
import { newUserProps, newUserDispatchActionProps } from '../../types'

const userReducer = (
  userState: newUserProps, // lepsze typy danych user (polaczyc z userProps)
  action: newUserDispatchActionProps
) => {
  switch (action.type) {
    case 'ADD_NEW_USER_CREDENTIAL':
      return {...userState, ...action.payload.newUser}
    default:
      return userState
  }
}

const UserForm: React.FC = () => {
  const [userState, dispatchUser] = useReducer(userReducer, {
    name: '',
    surname: '',
    email: '',
    password: '',
    telNumber: '',
    birthDate: '',
    option: 'PRIVATE',
    optionValue: ''
  })
  console.log(userState)
  return (
    <form>
      <CustomInputUser
        input='text'
        inputTextContent='imie'
        dispatchUser={dispatchUser}
        userPropName='name'
      />
      <br></br>
      <br></br>
      <CustomInputUser
        input='text'
        inputTextContent='nazwisko'
        dispatchUser={dispatchUser}
        userPropName='surname'
      />
      <br></br>
      <br></br>
      <CustomInputUser
        input='email'
        inputTextContent='email'
        dispatchUser={dispatchUser}
        userPropName='email'
      />
      <br></br>
      <br></br>
      <CustomInputUser
        input='text'
        inputTextContent='hasło'
        dispatchUser={dispatchUser}
        userPropName='password'
      />
      <br></br>
      <br></br>
      <CustomInputUser
        input='text'
        inputTextContent='numer telefonu'
        dispatchUser={dispatchUser}
        userPropName='telNumber'
      />
      <br></br>
      <br></br>
      <CustomInputUser
        input='date'
        inputTextContent='data urodzenia'
        dispatchUser={dispatchUser}
        userPropName='birthDate'
      />
      <br></br>
      <br></br>
      <UserSwitch />
      <br></br>
      <br></br>
      <input type='submit' />
    </form>
  )
}

export default UserForm
