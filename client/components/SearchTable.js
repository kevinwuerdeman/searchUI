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
      dataIndex: 'name',
      key: 'postId',
    }, {
      title: 'Account Number',
      dataIndex: 'name',
      key: 'id',
    }, {
      title: 'Source',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: 'Product',
      dataIndex: 'name',
      key: 'email',
    }, {
      title: 'Channel',
      dataIndex: 'name',
      key: 'body',
    }, {
      title: 'Amount',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: 'Status',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: 'Error Code',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: 'Details',
      key: 'action',
      render: () => (
        <span><a href='#'> See Details</a></span>
      ),
    }]
    return (
      <div className="container-fluid">
        <h3>Hello Table</h3>
        <div className="card-body">
          <div className="table-responsive">
            <div className="dataTables_wrapper container-fluid dt-bootstrap4 no-footer" id="dataTable_wrapper">
              <div className="row">
                <div className="col-sm-12 col-md-6">
                  <div className="dataTables_length" id="dataTables_length">
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
                </div>
                <div className="col-sm-12 col-md-6">
                  <div className="dataTables_filter" id="dataTable_filter">
                  <label>
                    Search:
                    <input className="form-control form-control-sm" aria-controls="dataTable" type="search" placeholder=""></input>
                  </label>
                  </div>
                </div>
              </div>
              <div className="row"> {/*TABLE GOES HERE */}
                <Table dataSource={this.props.comments} columns={columns} pagination={{pageSize: 18}}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  comments: state.comments
});

const mapDispatch = null;

const container = connect(mapState, mapDispatch)(SearchTable);

export default container;
