import React, { Component } from 'react';
import { Navbar, Nav, Dropdown, Item } from 'rsuite';
import tusd_logo from '../TUSDBlk.png';

class DataNavbar extends Component {

    render () {


        return (
            <Navbar>
                <Navbar.Header href="http://tusd1.org/" ><img style={{height: "50px", width: "200px" }} src={tusd_logo} /></Navbar.Header>
                <Nav>
                    <Dropdown title="Databases">
                        <Dropdown.Item>Database 1</Dropdown.Item>
                        <Dropdown.Item>Database 2</Dropdown.Item>
                        <Dropdown.Item>Database 3</Dropdown.Item>
                        <Dropdown.Item>Database 4</Dropdown.Item>
                        <Dropdown.Menu title="Database 5">
                        <Dropdown.Item onClick={() => this.props.handleTableChange('table1')}>Table 1</Dropdown.Item>
                        <Dropdown.Item onClick={() => this.props.handleTableChange('table2')}>Table 2</Dropdown.Item>
                        <Dropdown.Item>Table 3</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Navbar>
        );
    }
}

export default DataNavbar;