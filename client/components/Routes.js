import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Grid from './Grid';
import Graph from './Graph';
import { connect } from 'react-redux';


class Routes extends Component {
  constructor() {
    super();
  }

  render () {
    return (
      <div>
      <h2>Hello Routes</h2>
        <Switch>
          <Route path="/grid" component={Grid} />
          <Route path="/graph" component={Graph} />
          <Route component={Grid} />
        </Switch>
      </div>
    )
  }
}

const mapState = () => ({

});

const mapDispatch = () => ({

});

const container = connect(mapState, mapDispatch)(Routes);

export default container;
