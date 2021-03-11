import React, { Component } from 'react';
import { ItemDataType } from 'rsuite';


/*Original implementation was a linked list, however this makes interfacing with RSuite difficult*/
class StackNode {
    constructor(tableName, value) {
        this.label = tableName;
        this.value = value;
    }
}


class Stack {
    constructor() {
        this.historyArr = [{label: 'startTable', value: 0}];
        this.size = 0;
    }

    push(name) {

        this.size++;
        let node = { label: name, value: this.size }
        this.historyArr.unshift(node);

        console.log(node.label + ' ' + this.historyArr.length);
    }
    
    pop() {
        if(this.historyArr.length == 0)
            return null;

        this.historyArr.shift();
        this.size--;
    }
}


export { Stack, StackNode };