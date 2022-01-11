interface Props {
  isAuth: boolean
}

const UserLoggedInOperations: React.FC<Props> = ({ isAuth }) => {
  const handleEditUser = () => {
    //
  }
  const handleDeleteUser = () => {
    //
  }

  return (
    <>
      {isAuth ? (
        <>
          <button onClick={() => handleEditUser()}>edytuj użytkownika</button>
          <button onClick={() => handleDeleteUser()}>usuń użytkownika</button>
        </>
      ) : null}
    </>
  )
}

export default UserLoggedInOperations
