import { useState } from 'react';

const LoginForm = () => {
  
  const [authData,setAuthData] = useState({
    login: '',
    password: ''
  });
  
  const handleChange = () => {
    setAuthData({
      login: document.getElementById('login').value,
      password: document.getElementById('password').value
    })    
  }

  return <form action="">
      <fieldset>
        <legend>Авторизация</legend>
        <ul style={{listStyleType: 'none', padding: '5px', margin: '0'}}>
          <li>
            <label htmlFor="login">Логин:</label><br />
            <input type="text" name="login" id="login" placeholder="login" onChange={handleChange} />
          </li>
          <li style={{paddingTop: '5px'}}>
            <label htmlFor="email">Пароль:</label><br />
            <input type="password" name="password" id="password" placeholder="password" onChange={handleChange} />
          </li>
          <li style={{paddingTop: '15px'}}>
            <input type="button" value="Войти" style={{width: '100%'}} onClick={() => {console.log(authData);
            }} />
          </li>
        </ul>
      </fieldset>
    </form>
}

export default LoginForm;