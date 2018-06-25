import React, { Component } from 'react';
import { connect } from 'react-redux';
//https://github.com/AdeleD/react-paginate/blob/master/demo/js/demo.js bootstrap table
class SearchTable extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>Hello Table</h1>
        <table className="footable" data-page-size="2" data-first-text="FIRST" data-next-text="NEXT" data-previous-text="PREVIOUS" data-last-text="LAST">
          <thead>
            <tr>
                <th>Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Age</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>John</td>
              <td>Doe</td>
              <td>21</td>
            </tr>
            <tr>
              <td>1</td>
              <td>John</td>
              <td>Doe</td>
              <td>21</td>
            </tr>
            <tr>
              <td>1</td>
              <td>John</td>
              <td>Doe</td>
              <td>21</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

const mapState = () => ({

});

const mapDispatch = () => ({

});

const container = connect(mapState, mapDispatch)(SearchTable);

export default container;
