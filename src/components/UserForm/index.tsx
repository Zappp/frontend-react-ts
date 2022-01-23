import { useReducer } from 'react'
import InputUserCredentialWithLabel from '../InputUserCredentialWithLabel'
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
  const [userState, dispatchUser] = useReducer(userReducer, { // moge nie miec kontroli nad tym co wpisuje user w czasie rzeczywistym
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
      <InputUserCredentialWithLabel
        input='text'
        inputTextContent='imie'
        dispatchUser={dispatchUser}
        userPropName='name'
      />
      <br></br>
      <br></br>
      <InputUserCredentialWithLabel
        input='text'
        inputTextContent='nazwisko'
        dispatchUser={dispatchUser}
        userPropName='surname'
      />
      <br></br>
      <br></br>
      <InputUserCredentialWithLabel
        input='email'
        inputTextContent='email'
        dispatchUser={dispatchUser}
        userPropName='email'
      />
      <br></br>
      <br></br>
      <InputUserCredentialWithLabel
        input='text'
        inputTextContent='hasło'
        dispatchUser={dispatchUser}
        userPropName='password'
      />
      <br></br>
      <br></br>
      <InputUserCredentialWithLabel
        input='text'
        inputTextContent='numer telefonu'
        dispatchUser={dispatchUser}
        userPropName='telNumber'
      />
      <br></br>
      <br></br>
      <InputUserCredentialWithLabel
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
