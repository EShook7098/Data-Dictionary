import React, { Component } from 'react';
import MaterialTable from "material-table"


class DictTable extends Component {
    render() {

        const data = [
            { cname: "City", fname: "City", dtype: "Varchar(50)", defaultValue: "", unique: "n", description: "The city of an employee's home address."},
            { cname: "State", fname: "State", dtype: "Varchar(20)", defaultValue: "", unique: "n", description: "The state of an employee's home address."},
            { cname: "FirstName", fname: "First Name", dtype: "Varchar(25)", defaultValue: "", unique: "n", description: "The given name of an employee."},
            { cname: "LastName", fname: "Last Name", dtype: "Varchar(35)", defaultValue: "", unique: "n", description: "The surname of an employee."},
            { cname: "Sex", fname: "Sex", dtype: "Varchar(1)", defaultValue: "", unique: "n", description: "The sex of an employee."},
            { cname: "Position", fname: "Job Title", dtype: "Varchar(50)", defaultValue: "", unique: "n", description: "The position an employee fulfills within the organization."},
            { cname: "EmpID - PK", fname: "Employee ID", dtype: "Number(10)", defaultValue: "", unique: "y", description: "A unique numerical identifier for an employee."},
            { cname: "SSN", fname: "Social Security Number", dtype: "Number(10)", defaultValue: "", unique: "y", description: "An employee's federal social security number."},
            { cname: "DoB", fname: "Date of Birth", dtype: "Date", defaultValue: "", unique: "n", description: "An employee's date of birth."},
            { cname: "DepNum", fname: "Department Number", dtype: "Number(10)", defaultValue: "", unique: "n", description: "The department number of the department an employee works within."},
            { cname: "DepNum", fname: "Department Number", dtype: "Number(10)", defaultValue: "", unique: "n", description: "The department number of the department an employee works within."},
            { cname: "DepNum", fname: "Department Number", dtype: "Number(10)", defaultValue: "", unique: "n", description: "The department number of the department an employee works within."},
            { cname: "DepNum", fname: "Department Number", dtype: "Number(10)", defaultValue: "", unique: "n", description: "The department number of the department an employee works within."},
            { cname: "DepNum", fname: "Department Number", dtype: "Number(10)", defaultValue: "", unique: "n", description: "The department number of the department an employee works within."},
            { cname: "DepNum", fname: "Department Number", dtype: "Number(10)", defaultValue: "", unique: "n", description: "The department number of the department an employee works within."},
            { cname: "DepNum", fname: "Department Number", dtype: "Number(10)", defaultValue: "", unique: "n", description: "The department number of the department an employee works within."},
            { cname: "DepNum", fname: "Department Number", dtype: "Number(10)", defaultValue: "", unique: "n", description: "The department number of the department an employee works within."},
            { cname: "DepNum", fname: "Department Number", dtype: "Number(10)", defaultValue: "", unique: "n", description: "The department number of the department an employee works within."},
            { cname: "DepNum", fname: "Department Number", dtype: "Number(10)", defaultValue: "", unique: "n", description: "The department number of the department an employee works within."},
            { cname: "DepNum", fname: "Department Number", dtype: "Number(10)", defaultValue: "", unique: "n", description: "The department number of the department an employee works within."},
          ];
          
          const columns = [
            {
              title: "Column Name",
              field: "cname",
              width: "15%",
              cellStyle: {
                whiteSpace: 'nowrap',
                paddingLeft: '2em',
                paddingRight: '2em'
              },
            headerStyle: {
                whiteSpace: 'nowrap',
                paddingLeft: '2em',
                paddingRight: '2em'
              }
            },
            {
              title: "Field Name",
              field: "fname",
              width: "15%",
              cellStyle: {
                whiteSpace: 'nowrap',
                paddingLeft: '2em',
                paddingRight: '2em'
              },
            headerStyle: {
                whiteSpace: 'nowrap',
                paddingLeft: '2em',
                paddingRight: '2em'
              }
            },
            {
              title: "Data Type",
              field: "dtype",
              width: "15%",
              cellStyle: {
                whiteSpace: 'nowrap',
                paddingLeft: '2em',
                paddingRight: '2em'
              },
            headerStyle: {
                whiteSpace: 'nowrap',
                paddingLeft: '2em',
                paddingRight: '2em'
              }
            },
            {
              title: "Default Value",
              field: "defaultvalue",
              width: "15%",
              cellStyle: {
                whiteSpace: 'nowrap',
                paddingLeft: '2em',
                paddingRight: '2em'
              },
            headerStyle: {
                whiteSpace: 'nowrap',
                paddingLeft: '2em',
                paddingRight: '2em'
              }
            },
            {
              title: "Unique?",
              field: "unique",
              width: "5%",
              cellStyle: {
                whiteSpace: 'nowrap',
                paddingLeft: '3em', /*Centers element, since options are 'y' and 'n'*/
                paddingRight: '2em'
              },
            headerStyle: {
                whiteSpace: 'nowrap',
                paddingLeft: '2em',
                paddingRight: '2em'
              }
            },
            {
              title: "Description",
              field: "description",
              width: "35%",
              cellStyle: {
                whiteSpace: 'nowrap',
              }
            },
          ];
        
        
        return (
            <MaterialTable  
              title="Employee Details" 
              data={data} 
              columns={columns} 
              options = {{
                fixedColumns: {
                  left: 1,
                  right: 0
                },
                paging: false,
                tableLayout: "fixed",
                padding: "dense",
                maxBodyHeight: '500px'
              }}
              />
          );
    }
}

export default DictTable;

  



