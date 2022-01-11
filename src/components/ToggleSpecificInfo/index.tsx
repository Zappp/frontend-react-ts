import { UserPrivateData } from '../../types'
import { useState } from 'react'

interface Props {
  userPrivateData: UserPrivateData
}

const ToggleSpecificInfo: React.FC<Props> = ({ userPrivateData }) => {
  const [isShown, setIsShown] = useState(false)
  return (
    <>
      {isShown ? (
        <>
          <td>{userPrivateData.password}</td>
          <td>{userPrivateData.category}</td>
          <td>{userPrivateData.telNumber}</td>
          <td>{userPrivateData.birthDate}</td>
        </>
      ) : (
        <>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </>
      )}
      <td style={{cursor:'pointer'}} onClick={() => setIsShown(!isShown)}>Pokaż/Ukryj</td>
    </>
  )
}

export default ToggleSpecificInfo
