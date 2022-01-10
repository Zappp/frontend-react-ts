import { useState } from 'react'
import { UserData } from '../../types'
import SpecificInfo from '../SpecificInfo'

interface Props {
  userData: UserData[]
}

const Home: React.FC<Props> = ({ userData }) => {
  const [isShown, setIsShown] = useState(false)
  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Imię</th>
          <th>Nazwisko</th>
          <th>Email</th>
          <th>Hasło</th>
          <th>Kategoria</th>
        </tr>
      </thead>
      <tbody>
        {userData.map((user, index) => (
          <tr key={index}>
            <td>
              <button type='button' onClick={() => setIsShown(!isShown)}>
                Pokaż/Ukryj
              </button>
            </td>
            <td>{user.name}</td>
            <td>{user.surname}</td>
            <td>{user.email}</td>
            {isShown ? <SpecificInfo userPrivateData={user} /> : null}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
export default Home
