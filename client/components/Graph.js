import React, { Component } from 'react';
import { connect } from 'react-redux';


class Graph extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>Hello Graph</h1>
      </div>
    )
  }
}

const mapState = () => ({

});

const mapDispatch = () => ({

});

const container = connect(mapState, mapDispatch)(Graph);

export default container;
