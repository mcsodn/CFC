import { Component } from 'react';

class Counter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  incCounter = () => {
    this.setState({ count: ++this.state.count });
  };

  decCounter = () => {
    this.setState({ count: --this.state.count });
  };

  render() {
    return <> 
      <h1>Счётчик</h1>
      <h2>{this.state.count}</h2>
      <input type="button" value="Увеличить" onClick={this.incCounter} />
      <input type="button" value="Уменьшить" onClick={this.decCounter} />
    </>
  };
}

export default Counter;