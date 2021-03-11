import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import data from './data.js';

import './App.css';
import './App.scss';

class BSTable extends Component {

    constructor() { /*Keep possibility of interactive tables that act within this element, not in App.js*/
      super();
      this.state = {
        data: "placeholder"
      };
    }

    

    render() {

        const columns = [
            {
                dataField: 'id',
                text: 'ID',
                formatter: (col, row) => { return <span style={{display: 'block', width: 25, overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}>{col}</span> },
                headerStyle: (column, colIndex) => {
                    return { 'white-space': 'nowrap', width: '25px' };
            }
            },
            {
                dataField: 'cname',
                text: 'Column Name'
            },
            {
                dataField: 'fname',
                text: 'Field Name'
            },
            {
                dataField: 'dtype',
                text: 'Data Type'
            },
            {
                dataField: 'defaultValue',
                text: 'Default Value'
            },
            {
                dataField: 'unique',
                text: 'Unique?',
                headerStyle: (column, colIndex) => {
                    return { 'white-space': 'nowrap', width: '25px' };
            }
            },
            {
                dataField: 'description',
                text: 'Description',
                formatter: (col, row) => { return <span style={{display: 'block', width: 500, whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}>{col}</span> },
                headerStyle: (column, colIndex) => {
                    return { 'white-space': 'nowrap', width: '600px' };
            }
            }
        ];


        return(
            <div>
                <BootstrapTable keyField='id' data={this.props.tableData} columns={columns} bootstrap4 rowClasses='text-nowrap' wrapperClasses='table-responsive' striped='true' hover='true' condensed='true'/>
            </div>
        );  
    }
}

export default BSTable;