import React, { Component } from 'react';
import { Button, ButtonToolbar, Dropdown, Icon, IconButton, Item } from 'rsuite';

class HistoryBar extends Component {
    render() {

        return(
            <ButtonToolbar>
                <Dropdown 
                    title="History" 
                    trigger="hover"
                    placement="bottomEnd"
                    renderTitle={() => {
                    return <IconButton onClick={() => this.props.handleTableChangeBack(this.props.tableStack.size - 1)} icon={<Icon icon="angle-double-left"/>}>History</IconButton>;}}>
                    {this.props.tableStack.historyArr.map(historyItem => {
                    return(
                        <Dropdown.Item 
                        onSelect={() => this.props.handleTableChangeBack(historyItem.value)}>
                            {historyItem.label}
                        </Dropdown.Item>
                    )
                    })}
                </Dropdown>
            </ButtonToolbar>
        );
    }  
}

export default HistoryBar;