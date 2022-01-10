import { UserPrivateData } from '../../types'
import { useState } from 'react'

interface Props {
  userPrivateData: UserPrivateData
}

const SpecificInfo: React.FC<Props> = ({ userPrivateData }) => {
  const [isShown, setIsShown] = useState(false)
  return (
    <>
      {isShown ? (
        <>
          <td>{userPrivateData.password}</td>
          <td>{userPrivateData.category}</td>
        </>
      ) : null}
      <td>
        <button type='button' onClick={() => setIsShown(!isShown)}>
          Pokaż/Ukryj
        </button>
      </td>
    </>
  )
}

export default SpecificInfo
