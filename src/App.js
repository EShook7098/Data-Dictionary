
/*Image Imports*/
import border from './border.jpg';
import data from './data.js';

/*CSS Imports*/
import './App.css';
import './App.scss';
import 'rsuite/dist/styles/rsuite-default.css';

/*External Component and React Imports*/
import React, { Component } from 'react';
import { Card, NavDropdown, DropdownButton } from 'react-bootstrap';
import { Container, Grid, Row, Col} from 'rsuite';

/*Custom Component Imports*/
import BSTable from './BSTable.js';
import DataNavbar from './components/Navbar.js';
import { Stack, StackNode } from './components/HistoryStack.js';
import HistoryBar from './components/HistoryBar.js';



class App extends Component {

  /*Overall shared data state should be maintained here, ensuring that all components are acting off a centralized state. Less chance for 'funny business'.*/
  constructor(props) { /*Keep possibility of interactive tables that act within this element, not in App.js*/
    super(props);
    this.state = {
        tableStack: new Stack(),
        tableData: data.startTable
    };
    this.handleTableChange = this.handleTableChange.bind(this);
    this.handleTableChangeBack = this.handleTableChangeBack.bind(this);
  }

  handleTableChange(table) {
    /*Prevent population of history with the same table over and over contiguously*/
    if(data[table] === this.state.tableData)
      return null;

    let stackCopy = this.state.tableStack;
    stackCopy.push(table);

    this.setState({
        tableStack: stackCopy
      });

      this.setState({
        tableData: data[table], /*This allows us to pass a string easily and not have to manage a props JSON in child component Navbar*/
      });
  }

  /*This will need refactoring*/
  handleTableChangeBack(value) {
    /*Return if function is either: Is at the starting table | Not passed a value | Passed the value of the starting table - may need to be changed*/
    if(value === null || value < 0)
    { console.log("Returned: " + value); return; }

    let stackCopy = this.state.tableStack;
    /*Handle special case*/
    console.log("Value: " + value);
    /*This is much easier to debug, despite increased memory usage. Array should not be that significantly large anyhow.*/

    var index = stackCopy.historyArr.length - 1;
    for(index; index > value; --index)
    {
      stackCopy.pop();
      console.log(index);
    }

    this.setState({
      tableData: data[stackCopy.historyArr[0].label], 
    });

    this.setState({
        tableStack: stackCopy
      });
  }

  render() {

    return (
      /*Rules: Keep UI elements mostly here, keep functional elements within components*/
      <div className="App">
        <Container>
          <DataNavbar handleTableChange={this.handleTableChange} data={this.fullData}/>
        </Container>

        <Container fluid>
              <Row className='justify-content-center tableRow'>
                <Col xs={2}>
                  <HistoryBar tableStack={this.state.tableStack} handleTableChangeBack={this.handleTableChangeBack}/>
                </Col>
                <Col xs={20}>
                  <BSTable tableData={this.state.tableData}/>
                </Col>
              </Row>
        </Container>
        
      </div>
    );
  }
}

export default App;
