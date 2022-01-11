import { UserData } from '../../types'
import SpecificInfo from '../SpecificInfo'
import UserLoggedInOperations from '../UserLoggedOperations'

interface Props {
  userData: UserData[]
  isAuth: boolean
}

const TableUsers: React.FC<Props> = ({ userData, isAuth }) => {
  return (
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
        {userData.map((user, index) => (
          <tr key={index}>
            <td>{user.name}</td>
            <td>{user.surname}</td>
            <td>{user.email}</td>
            <SpecificInfo userPrivateData={user} />
            <UserLoggedInOperations isAuth={isAuth} />
          </tr>
        ))}
      </tbody>
    </table>
  )
}
export default TableUsers
