import React, { Component } from 'react';
import { connect } from 'react-redux';


class SideNav extends Component {
  constructor(props) {
      super(props);
  }


  render() {
      return (
        <div>
          <h4>Search</h4>
          <div>
            <label><strong>Search By: </strong></label>
              <select className="form-control" id="sel1">
              <option defaultValue>- Select -</option>
              <option>Account Number</option>
              <option>ECID</option>
              <option>CAS ID</option>
              <option>Ultimate Parent ID</option>
            </select>
          </div>
          <div className="input-group">
            <input className="form-control" type="text" placeholder="Enter search Input..."></input>
          </div>
          <div className="search-btns">
            <button className="btn btn-primary" type="submit">Search</button>
            <button className="btn btn-primary" type="submit">Clear</button>
          </div>
        </div>
      )
  }
}


const mapState = () => ({

});

const mapDispatch = () => ({

});

const container = connect(mapState, mapDispatch)(SideNav);

export default container;