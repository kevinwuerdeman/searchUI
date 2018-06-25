import React, { Component } from 'react';
import { connect } from 'react-redux';
import { default as SearchTable } from './SearchTable';
import { default as SideNav } from './SideNav';
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
      <div className="gridPage-container">
        <div className="sidebar">
          <SideNav />
        </div>
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
