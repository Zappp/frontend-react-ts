import { useEffect, useState } from 'react'
import { newUserDispatchActionProps } from '../../types'

interface Props {
  dispatchUser: React.Dispatch<newUserDispatchActionProps>
}

const UserInputSwitch: React.FC<Props> = ({ dispatchUser }) => {
  const [subCategory, setSubCategory] = useState('')

  useEffect(() => {
    dispatchUser({
      type: 'INPUT_USER_CREDENTIAL',
      payload: {
        newUserProps: {
          subCategory: subCategory
        }
      }
    })
  }, [subCategory])

  useEffect(() => {
    return () => {
      dispatchUser({
        type: 'INPUT_USER_CREDENTIAL',
        payload: {
          newUserProps: {
            subCategory: ''
          }
        }
      })
    }
  }, [])

  return (
    <label>
      <input
        type='text'
        onChange={event => setSubCategory(event.target.value)}
      />
    </label>
  )
}

export default UserInputSwitch
