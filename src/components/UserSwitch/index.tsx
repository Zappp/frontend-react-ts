import { useEffect, useState } from 'react'
import { newUserDispatchActionProps } from '../../types'
import CustomInputUser from '../CustomInputUser'
import UserBusinessSwitch from '../UserBusinessSwitch'

interface Props {
  dispatchUser: React.Dispatch<newUserDispatchActionProps>
}

const UserSwitch: React.FC<Props> = ({ dispatchUser }) => { //better (single) component can be build to render both user and business switch data 
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
        return <CustomInputUser input='text' dispatchUser={dispatchUser} userPropName='subCategory' />
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
      {UserCategorySwitch(category)}
    </>
  )
}

export default UserSwitch
