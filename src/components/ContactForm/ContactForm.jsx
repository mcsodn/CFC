import { Component } from 'react';

class ContactForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: ''
    };
  }

  handleChange = (e) => {

    //через setState надо проверять в каком поле изменения, захотелось упростить
    this.state[e.target.id] = e.target.value; 
    console.log("🚀 ~ ContactForm ~ this.state:", this.state)    
  }

  render() {
    return <form action="">
      <fieldset>
        <legend>Контакты</legend>
        <ul>
          <li>
            <label htmlFor="name">Имя:</label>
            <input type="text" name="name" id="name" placeholder="Иван Иванов" onChange={this.handleChange} />
          </li>
          <li>
            <label htmlFor="email">E-mail:</label>
            <input type="email" name="mail" id="email" placeholder="ivanov@gmail.com" onChange={this.handleChange} />
          </li>
        </ul>
      </fieldset>
    </form>
  };
}

export default ContactForm;