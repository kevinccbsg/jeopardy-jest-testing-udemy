import React, { Component } from 'react';

export class Clue extends Component {
  constructor() {
    super();
    this.state = {
      showed: false,
    };
  }

  handleClick() {
    this.setState({ showed: true });
  }
  render() {
    const { showed } = this.state;
    const { answer, question, value } = this.props.clue;
    return (
      <div className="clue" onClick={() => this.handleClick()}>
        <h4>{value || 'unknown'}</h4>
        <hr />
        <h5>{question}</h5>
        <hr />
        <h5
          className={showed ? "answer text-revealed" : "answer text-hidden"}
        >{answer}</h5>
      </div>
    );
  }
}

export default Clue;
