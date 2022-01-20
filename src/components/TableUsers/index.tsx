import ToggleSpecificInfo from '../ToggleSpecificInfo'
import UserLoggedInOperations from '../UserLoggedOperations'

import { userProps, UserDispatchActionProps } from '../../types'

interface Props {
  usersState: userProps[]
  dispatchUser: React.Dispatch<UserDispatchActionProps>
  isAuth: boolean
}

const TableUsers: React.FC<Props> = ({ usersState, dispatchUser, isAuth }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Imię</th>
            <th>Nazwisko</th>
            <th>Email</th>
            <th>Hasło</th>
            <th>Kategoria</th>
            <th>Numer telefonu</th>
            <th>Data urodzenia</th>
          </tr>
        </thead>
        <tbody>
          {usersState.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.surname}</td>
              <td>{user.email}</td>
              <ToggleSpecificInfo user={user} dispatchUser={dispatchUser} />
              {isAuth && <UserLoggedInOperations userId={user.id} />}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
export default TableUsers
