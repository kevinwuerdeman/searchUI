import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCommentsThunk } from '../reducers/comments';
import { Table, Icon, Divider, Button, Modal, Popconfirm, message } from 'antd';

class SearchTable extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {

    const columns = [{
      title: 'ECID',
      dataIndex: 'postId',
      key: 'postId',
      width: 50,
    }, {
      title: 'Account Number',
      dataIndex: 'name',
      key: 'id',
      width: 50,
    }, {
      title: 'Source',
      dataIndex: 'name',
      key: 'name',
      width: 50,
    }, {
      title: 'Product',
      dataIndex: 'name',
      key: 'email',
      width: 50,
    }, {
      title: 'Channel',
      dataIndex: 'name',
      key: 'body',
      width: 50,
    }, {
      title: 'Amount',
      dataIndex: 'name',
      key: 'name',
      width: 50,
    }, {
      title: 'Status',
      dataIndex: 'name',
      key: 'name',
      width: 50,
    }, {
      title: 'Error Code',
      dataIndex: 'name',
      key: 'name',
      width: 50,
    }, {
      title: 'Details',
      key: 'action',
      width: 50,
      render: () => (
        <span><a href="#">See Details</a></span>
      ),
    }];
    return (
      <div className="container-fluid">
        <h3>Hello Table</h3>
        <div className="card-body">
          <div className="row">
            <label>
              Show
              <select name="dataTable_length" className="form-control form-control-sm" aria-controls="dataTable">
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
              entries
              </label>
          </div>
          <div className="">
            <div className="dataTables_filter" id="dataTable_filter">
            <label>
              Search:
              <input className="form-control form-control-sm" aria-controls="dataTable" type="search" placeholder="" />
            </label>
            </div>
          </div>
        </div>
        <div className="components-table-demo-nested"> {/*TABLE GOES HERE */}
          <Table dataSource={this.props.comments} columns={columns} pagination={{pageSize: 18}} />
        </div>
      </div>
    );
  }
}

const mapState = state => ({
  comments: state.comments
});

const mapDispatch = null;

const container = connect(mapState, mapDispatch)(SearchTable);

export default container;
