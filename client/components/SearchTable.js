import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';
import { getCommentsThunk } from '../reducers/comments';


class SearchTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageCount: 2,
      perPage: 2
    }

    this.handlePageClick = this.handlePageClick.bind(this);
  }

  componentDidMount() {
   
  }

  handlePageClick(data) {
    console.log(this.state)
    let selected = data.selected;
    let offset = Math.ceil(selected * this.state.perPage);

    console.log(selected, offset)
    // this.setState({offset: offset}, () => {
    //   this.loadCommentsFromServer();
    // });
  };

  render() {
    console.log(this.props.comments)
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
              <div className="row">
                <div className="col-sm-12">
                  <table width="100%" className="table table-bordered dataTable no-footer" id="dataTable" role="grid" aria-describedby="dataTable_info" style={{ width: "100%" }} cellSpacing="0">
                    <thead className="thead-inverse">
                      <tr role="row"><th tabIndex="0" className="sorting_asc" aria-controls="dataTable" style={{ width: "85px" }} aria-label="ECID: activate to sort column descending" aria-sort="ascending" rowSpan="1" colSpan="1">ECID</th><th tabIndex="0" className="sorting" aria-controls="dataTable" style={{width: "154px"}} aria-label="Account Number: activate to sort column ascending" rowSpan="1" colSpan="1">Account Number</th><th tabIndex="0" className="sorting" aria-controls="dataTable" style={{width: "66px"}} aria-label="Source: activate to sort column ascending" rowSpan="1" colSpan="1">Source</th><th tabIndex="0" className="sorting" aria-controls="dataTable" style={{width: "75px"}} aria-label="Product: activate to sort column ascending" rowSpan="1" colSpan="1">Product</th><th tabIndex="0" className="sorting" aria-controls="dataTable" style={{width: "77px"}} aria-label="Channel: activate to sort column ascending" rowSpan="1" colSpan="1">Channel</th><th tabIndex="0" className="sorting" aria-controls="dataTable" style={{width: "83px"}} aria-label="Amount: activate to sort column ascending" rowSpan="1" colSpan="1">Amount</th><th tabIndex="0" className="sorting" aria-controls="dataTable" style={{width: "117px"}} aria-label="Date: activate to sort column ascending" rowSpan="1" colSpan="1">Date</th><th tabIndex="0" className="sorting" aria-controls="dataTable" style={{width: "61px"}} aria-label="Status: activate to sort column ascending" rowSpan="1" colSpan="1">Status</th><th tabIndex="0" className="sorting" aria-controls="dataTable" style={{width: "98.99px"}} aria-label="Error Code: activate to sort column ascending" rowSpan="1" colSpan="1">Error Code</th><th tabIndex="0" className="sorting" aria-controls="dataTable" style={{width: "85px"}} aria-label=": activate to sort column ascending" rowSpan="1" colSpan="1"></th></tr>
                    </thead>
                  
                    <tbody>
                      <tr className="odd" role="row">
                        <td className="sorting_1">1242390815</td>
                        <td>1234567890</td>
                        <td>GFP</td>
                        <td>Wire</td>
                        <td>SWIFT</td>
                        <td>$100,000.00</td>
                        <td>DD-MMM-YYYY</td>
                        <td>Routed</td>
                        <td>&lt;Error Code&gt;</td>
                        <td><a href="#">View Details</a></td>
                      </tr>
                      {
                        this.props.comments.map(comment => {
                          return (
                            <tr key={comment.id}>
                              <td>{comment.postId}</td>
                              <td>{comment.id}</td>
                              <td>{comment.postId}</td>
                              <td>{comment.name}</td>
                              <td>{comment.email}</td>
                              <td> - </td>
                              <td>DD-MMM-YYYY</td>
                              <td>{comment.body.slice(0, 10)}</td>
                              <td>&lt;Error Code&gt;</td>
                              <td><a href="#">View Details</a></td>
                            </tr>
                          );
                        })
                      }

                    </tbody>
                  </table>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 col-md-5">
                  <div className="dataTables_info" id="dataTable_info" role="status" aria-live="polite">Showing 1 to 10 of 57 entries</div>
                </div>
                <div className="col-sm-12 col-md-7">
                  <div className="dataTables_paginate paging_simple_numbers" id="dataTable_paginate">
                    <ul className="pagination">
                      <li className="paginate_button page-item previous disabled" id="dataTable_previous">
                        <a tabIndex="0" className="page-link" aria-controls="dataTable" href="#" data-dt-idx="0">Previous</a>
                      </li>
                      <li className="paginate_button page-item active">
                        <a tabIndex="0" className="page-link" aria-controls="dataTable" href="#" data-dt-idx="1">1</a>
                      </li>
                      <li className="paginate_button page-item ">
                        <a tabIndex="0" className="page-link" aria-controls="dataTable" href="#" data-dt-idx="2">2</a>
                      </li>
                      <li className="paginate_button page-item ">
                        <a tabIndex="0" className="page-link" aria-controls="dataTable" href="#" data-dt-idx="3">3</a>
                      </li>
                      <li className="paginate_button page-item ">
                        <a tabIndex="0" className="page-link" aria-controls="dataTable" href="#" data-dt-idx="4">4</a>
                      </li>
                      <li className="paginate_button page-item ">
                        <a tabIndex="0" className="page-link" aria-controls="dataTable" href="#" data-dt-idx="5">5</a>
                      </li>
                      <li className="paginate_button page-item ">
                        <a tabIndex="0" className="page-link" aria-controls="dataTable" href="#" data-dt-idx="6">6</a>
                      </li>
                      <li className="paginate_button page-item next" id="dataTable_next">
                        <a tabIndex="0" className="page-link" aria-controls="dataTable" href="#" data-dt-idx="7">Next</a>
                      </li>
                    </ul>
                  </div>
                </div>
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
