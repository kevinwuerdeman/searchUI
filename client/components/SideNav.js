import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { filterCommentsThunk, getCommentsThunk } from '../reducers/comments';


class SideNav extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      searchCriteria: "",
      searchParam: "",
      results: []
    }
  }

  setSearchParam = (e) => {
    this.setState({searchParam: e.target.value})
  }

  handleSearchChange = (e) => {
    this.setState({searchCriteria: e.target.value});
  }

  handleSearchSubmit = () => {
    this.props.fetchAllComments()
    setTimeout(() => {
      const re = new RegExp(_.escapeRegExp(this.state.searchCriteria), 'i');
      const isMatch = result => re.test(result[this.state.searchParam]);
      const filteredComments = _.filter(this.props.comments, isMatch);
      this.props.filterComments(filteredComments)
    }, 500);
  }

  handleClearSubmit = (e) => {
    this.setState({searchCriteria: ""});
    this.props.fetchAllComments();
  }

  render() {
      return (
        <div>
          <h4>Search</h4>
          <div>
            <label><strong>Search By: </strong></label>
            <select className="form-control" id="sel1" onChange={this.setSearchParam}>
              <option defaultValue>- Select -</option>
              <option>postId</option>
              <option>ECID</option>
              <option>CAS ID</option>
              <option>Ultimate Parent ID</option>
            </select>
          </div>
          <div className="search-input">
            <input className="form-control" type="text" placeholder="Enter search Input..." onChange={this.handleSearchChange} value={this.state.searchCriteria}></input>
          </div>
          <div className="search-btns">
            <button className="btn btn-primary" type="submit" onClick={this.handleSearchSubmit}>Search</button>
            <button className="btn btn-primary" type="submit" onClick={this.handleClearSubmit}>Clear</button>
          </div>
        </div>
      )
  }
}


const mapState = (state) => ({
  comments: state.comments
});

const mapDispatch = (dispatch) => {
  return {
    filterComments(arr) {
      dispatch(filterCommentsThunk(arr));
    },
    fetchAllComments() {
       dispatch(getCommentsThunk());
    }
  }
};

const container = connect(mapState, mapDispatch)(SideNav);

export default container;
