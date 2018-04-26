import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { setCategories, pickCategory } from '../actions';

class App extends Component {

  async componentDidMount() {
    const { categories } = this.props;
    if (categories.length === 0) {
      const response = await fetch('http://jservice.io/api/categories?count=20')
      const body = await response.json();
      this.props.setCategories(body);
    }
  }

  render() {
    const { categories } = this.props;
    return (
      <div>
        <h2>Jeopardy!</h2>
        {categories.map(category => (
          <Link
            key={category.id}
            to="/category"
            onClick={() => this.props.pickCategory(category)}
          >
            <h4>{category.title}</h4>
          </Link>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    categories: state.categories,
  }
);
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setCategories,
    pickCategory,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
