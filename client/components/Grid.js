import React, { Component } from 'react';
import { connect } from 'react-redux';
import { default as SearchTable } from './SearchTable';

class Grid extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>Hello Grid</h1>
        <SearchTable />
      </div>
    )
  }
}

const mapState = () => ({

});

const mapDispatch = () => ({

});

const container = connect(mapState, mapDispatch)(Grid);

export default container;
