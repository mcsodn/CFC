const LoginStatus = (props) => {
  return (
    <div>
      {props.isLoggedIn === 'true' ? <h1>Добро пожаловать!</h1> : <h1>Пожалуйста, войдите в систему.</h1>}
    </div>
  );
}

export default LoginStatus;