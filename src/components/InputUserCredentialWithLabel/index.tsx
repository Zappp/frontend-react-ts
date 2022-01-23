import { newUserProps, newUserDispatchActionProps } from '../../types'

interface Props {
  input: React.HTMLInputTypeAttribute
  inputTextContent: string
  dispatchUser: React.Dispatch<newUserDispatchActionProps>
  userPropName: keyof newUserProps
}

const createUserDispatchPropWithValue = (
  userPropNameToDispatch: string,
  event: React.ChangeEvent<HTMLInputElement>
): newUserProps => {
  let newUserPropToDispatch = {}
  Object.defineProperty(newUserPropToDispatch, userPropNameToDispatch, {
    value: event.target.value,
    enumerable: true,
    writable: true,
    configurable: false
  })
  return newUserPropToDispatch
}

const InputUserCredentialWithLabel: React.FC<Props> = ({
  input,
  inputTextContent,
  dispatchUser,
  userPropName
}) => {
  return (
    <label>
      <input
        type={input}
        onChange={event =>
          dispatchUser({
            type: 'ADD_NEW_USER_CREDENTIAL',
            payload: {
              newUser: createUserDispatchPropWithValue(userPropName, event)
            }
          })
        }
      ></input>
      <br></br>
      {inputTextContent}
    </label>
  )
}

export default InputUserCredentialWithLabel
