import React, { Component } from 'react';


class Title extends Component {
    constructor(props) {
        super(props);
        this.state = {
            databaseName: '',
            tableName: ''
        };
    }


    render() {
        return (
            <h1>Database: {this.props.databaseName} | Table: {this.props.tableName}</h1>
        );
    }
}

export default Title;