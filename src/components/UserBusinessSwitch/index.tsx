import { useEffect, useState } from 'react'
import { newUserDispatchActionProps } from '../../types'

interface Props {
  dispatchUser: React.Dispatch<newUserDispatchActionProps>
}

const UserBusinessSwitch: React.FC<Props> = ({ dispatchUser }) => {
  const [subCategory, setSubCategory] = useState('BOSS')

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
    <select
      value={subCategory}
      onChange={event => setSubCategory(event.target.value)}
    >
      <option value='CLIENT'>Klient</option>
      <option value='BOSS'>Szef</option>
      <option value='WORKER'>Pracownik</option>
    </select>
  )
}

export default UserBusinessSwitch
