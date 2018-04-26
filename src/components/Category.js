import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Category extends Component {
  render() {
    const { category } = this.props;
    return (
      <div>
        <Link to="/"><h4>Home</h4></Link>
        <h2>{category.title}</h2>
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
