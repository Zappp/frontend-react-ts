import { useEffect, useState } from 'react'
import UserBusinessSwitch from '../UserBusinessSwitch'
import { newUserDispatchActionProps } from '../../types'

interface Props {
  dispatchUser: React.Dispatch<newUserDispatchActionProps>
}

const UserSwitch: React.FC<Props> = ({ dispatchUser }) => {
  const [category, setCategory] = useState('PRIVATE') 
  const [subCategory, setSubCategory] = useState('')

  useEffect(() => { //powinno byc lepiej rozwiazane bo chaos
    dispatchUser({
      type: 'INPUT_USER_CREDENTIAL',
      payload: {
        newUserProps: {
          category: category,
          subCategory: subCategory
        }
      }
    })
  }, [subCategory])

  const UserCategorySwitch = (category: string) => {
    switch (category) {
      case 'BUSINESS':
        return (
          <UserBusinessSwitch
            subCategory={subCategory}
            setSubCategory={setSubCategory}
          />
        )
      case 'ELSE':
        return (
          <label>
            <input
              type='text'
              onChange={event => setSubCategory(event.target.value)}
            />
          </label>
        )
      case 'PRIVATE':
        return <span onChange={() => setSubCategory('')}></span>
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
      {UserCategorySwitch(category) /*move to different module*/}
    </>
  )
}

export default UserSwitch
