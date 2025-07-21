const UserInfo = ({isAdmin}) => {
  return (
    <div>
      {isAdmin ? <h1>Добро пожаловать, Администратор!</h1> : <h1>Добро пожаловать, Обычный пользователь!</h1>}
    </div>
  );
}

export default UserInfo;