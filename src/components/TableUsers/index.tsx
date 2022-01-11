import { UserData } from "../../types"
import SpecificInfo from '../SpecificInfo'

interface Props {
    userData: UserData[],
}

const TableUsers:React.FC<Props> = ({userData}) => {
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
          </tr>
        ))}
      </tbody>
    </table>
  )
}
export default TableUsers
