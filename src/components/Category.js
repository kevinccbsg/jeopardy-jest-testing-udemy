import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Clue from './Clue';

class Category extends Component {
  constructor() {
    super();
    this.state = {
      clues: [],
    };
  }

  async componentDidMount() {
    const { category } = this.props;
    const response = await fetch(`http://jservice.io/api/clues?category=${category.id}`);
    const body = await response.json();
    this.setState({ clues: body });
  }

  render() {
    const { clues } = this.state;
    const { category } = this.props;
    return (
      <div>
        <Link to="/"><h4>Home</h4></Link>
        <h2>{category.title}</h2>
        {clues.map(clue => (
          <Clue key={clue.id} clue={clue} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    category: state.category,
  }
);

export default connect(mapStateToProps)(Category);
