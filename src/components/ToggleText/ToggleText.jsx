import { Component } from 'react';

class ToggleText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    };
  };

  toggleVisibility = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };

  render() {
    return <> 
      <p>{this.state.isVisible ? "Скрыть":"Показать"}</p>
      <input type="button" value="Изменить текст" onClick={this.toggleVisibility} />
    </>
  };
}

export default ToggleText;