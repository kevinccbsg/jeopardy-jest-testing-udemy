import React, { Component } from 'react';

class App extends Component {

  async componentDidMount() {
    const response = await fetch('http://jservice.io/api/categories?count=20')
    const body = await response.json();
    console.log(body);
  }

  render() {
    return (
      <div>
        <h2>Jeopardy!</h2>
      </div>
    );
  }
}

export default App;
