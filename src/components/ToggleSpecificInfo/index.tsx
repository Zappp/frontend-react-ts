import { UserDispatchActionProps, userProps } from '../../types'

interface Props {
  dispatchUser: React.Dispatch<UserDispatchActionProps>
  user: userProps
}

const ToggleSpecificInfo: React.FC<Props> = ({ dispatchUser, user }) => {
  return (
    <>
      {user.isVisible ? (
        <>
          <td>{user.password}</td>
          <td>{user.category}</td>
          <td>{user.telNumber}</td>
          <td>{user.birthDate}</td>
        </>
      ) : (
        <>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </>
      )}
      <td
        style={{ cursor: 'pointer' }}
        onClick={() =>
          dispatchUser({
            type: 'TOGGLE_USER_VISIBLE_BY_ID',
            payload: { user: user }
          })
        }
      >
        Pokaż/Ukryj
      </td>
    </>
  )
}

export default ToggleSpecificInfo
