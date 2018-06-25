import React, { Component } from 'react';
import { connect } from 'react-redux';
import { default as SearchTable } from './SearchTable';
import { getCommentsThunk } from '../reducers/comments';

class Grid extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchAllComments();
  }

  render() {
    return (
      <div>
        <h5>Hello Grid</h5>
        <SearchTable />
      </div>
    )
  }
}

const mapState = () => ({

});

const mapDispatch = dispatch => {
  return {
    fetchAllComments() {
      dispatch(getCommentsThunk());
    }
  }
};

const container = connect(mapState, mapDispatch)(Grid);

export default container;
