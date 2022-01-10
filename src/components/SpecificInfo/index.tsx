import { UserPrivateData } from '../../types'

interface Props {
  userPrivateData: UserPrivateData
}

const SpecificInfo: React.FC<Props> = ({ userPrivateData }) => {
  return (
    <>
      <td>{userPrivateData.password}</td>
      <td>{userPrivateData.category}</td>
    </>
  )
}

export default SpecificInfo
