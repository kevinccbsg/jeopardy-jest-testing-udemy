import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setCategories } from '../actions';

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
    return (
      <div>
        <h2>Jeopardy!</h2>
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
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
