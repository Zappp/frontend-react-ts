import { newUserProps, newUserDispatchActionProps } from '../../types'

interface Props {
  input: React.HTMLInputTypeAttribute
  inputTextContent: string
  dispatchUser: React.Dispatch<newUserDispatchActionProps>
  userPropName: keyof newUserProps
}

const setPropToDispatch = (
  objectPropName: keyof newUserProps,
  event: React.ChangeEvent<HTMLInputElement>
) => {
  let customObject = Object.defineProperty({}, objectPropName, {
    value: event.target.value,
    enumerable: true,
    writable: true,
    configurable: false
  })
  return customObject
}

const CustomInputUser: React.FC<Props> = ({
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
            type: 'INPUT_USER_CREDENTIAL',
            payload: {
              newUserProps: setPropToDispatch(userPropName, event)
            }
          })
        }
      ></input>
      <br></br>
      {inputTextContent}
    </label>
  )
}

export default CustomInputUser
