import { useEffect, useState } from 'react'
import { newUserDispatchActionProps } from '../../types'
import UserBusinessSwitch from '../UserBusinessSwitch'
import UserInputSwitch from '../UserInputSwitch'

interface Props {
  dispatchUser: React.Dispatch<newUserDispatchActionProps>
}

const UserSwitch: React.FC<Props> = ({ dispatchUser }) => {
  const [category, setCategory] = useState('PRIVATE')

  useEffect(() => {
    dispatchUser({
      type: 'INPUT_USER_CREDENTIAL',
      payload: {
        newUserProps: {
          category: category
        }
      }
    })
  }, [category])

  const UserCategorySwitch = (category: string) => {
    switch (category) {
      case 'BUSINESS':
        return <UserBusinessSwitch dispatchUser={dispatchUser} />
      case 'ELSE':
        return <UserInputSwitch dispatchUser={dispatchUser} />
    }
  }
  return (
    <>
      <label>Wybierz kategorię użytkownika</label>
      <select
        value={category}
        onChange={event => setCategory(event.target.value)}
      >
        <option value='PRIVATE'>Prywatna</option>
        <option value='BUSINESS'>Biznesowa</option>
        <option value='ELSE'>Inna</option>
      </select>
      {UserCategorySwitch(
        category
      ) /*move to different module to separate logic??*/}
    </>
  )
}

export default UserSwitch
