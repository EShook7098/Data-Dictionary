import React, { Component } from 'react';
import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import 'rsuite-table/lib/less/index.less';

class RTable extends Component {
    render() {

        const rows = [
            { id: 1, cname: "City", fname: "City", dtype: "Varchar(50)", defaultValue: "", unique: "n", description: "The city of an employee's home address."},
            { id: 2, cname: "State", fname: "State", dtype: "Varchar(20)", defaultValue: "", unique: "n", description: "The state of an employee's home address."},
            { id: 3, cname: "FirstName", fname: "First Name", dtype: "Varchar(25)", defaultValue: "", unique: "n", description: "The given name of an employee."},
            { id: 4, cname: "LastName", fname: "Last Name", dtype: "Varchar(35)", defaultValue: "", unique: "n", description: "The surname of an employee."},
            { id: 5, cname: "Sex", fname: "Sex", dtype: "Varchar(1)", defaultValue: "", unique: "n", description: "The sex of an employee."},
            { id: 6, cname: "Position", fname: "Job Title", dtype: "Varchar(50)", defaultValue: "", unique: "n", description: "The position an employee fulfills within the organization."},
            { id: 7, cname: "EmpID - PK", fname: "Employee ID", dtype: "Number(10)", defaultValue: "", unique: "y", description: "A unique numerical identifier for an employee."},
            { id: 8, cname: "SSN", fname: "Social Security Number", dtype: "Number(10)", defaultValue: "", unique: "y", description: "An employee's federal social security number."},
            { id: 9, cname: "DoB", fname: "Date of Birth", dtype: "Date", defaultValue: "", unique: "n", description: "An employee's date of birth."},
            { id: 10, cname: "DepNum", fname: "Department Number", dtype: "Number(10)", defaultValue: "", unique: "n", description: "The department number of the department an employee works within."},
          ];
          
          const ImageCell = ({rowData, dataKey, ...rest }) => (
              <Cell {...rest}>
                  <img src={rowData[dataKey]} width="50"  />
              </Cell>
          );
         

        return (
            <Table data ={rows}>
                <Column width={50}>
                    <HeaderCell>ID</HeaderCell>
                    <Cell datakey="id" />
                </Column>

                <Column width={50}>
                    <HeaderCell>Column Name</HeaderCell>
                    <Cell datakey="cname" />
                </Column>

                <Column width={50}>
                    <HeaderCell>Field Name</HeaderCell>
                    <Cell datakey="fname" />
                </Column>

                <Column width={50}>
                    <HeaderCell>Data Type</HeaderCell>
                    <Cell datakey="dtype" />
                </Column>

                <Column width={50}>
                    <HeaderCell>Default Value</HeaderCell>
                    <Cell datakey="defaultValue" />
                </Column>

                <Column width={50}>
                    <HeaderCell>Unique?</HeaderCell>
                    <Cell datakey="unique" />
                </Column>

                <Column width={50}>
                    <HeaderCell>Description</HeaderCell>
                    <Cell datakey="description" />
                </Column>
            </Table>
        );
    }
}

export default RTable;