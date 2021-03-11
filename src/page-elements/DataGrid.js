import React, { Component } from 'react';
import { DataGrid } from '@material-ui/data-grid';


class DataGrid2 extends Component {
    render() {

        const rows: GridRowsProp = [
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
          
          const columns: GridColDef[] = [
            {
            headerName: "Column Name",
            field: "cname",
            width: 100
            },
            {
            headerName: "Field Name",
            field: "fname",
            width: 100
            },
            {
            headerName: "Data Type",
            field: "dtype",
            width: 50
            },
            {
            headerName: "Default Value",
            field: "defaultvalue",
            width: 100
            },
            {
            headerName: "Unique?",
            field: "unique",
            width: 25
            },
            {
            headerName: "Description",
            field: "description",
            width: 200
            },
          ];

        return (
            <div style = {{ height: 400, width: '65%' }}>
                <DataGrid rows={rows} columns={columns} />
            </div>
        );
    }
}

export default DataGrid2;