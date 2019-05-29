import { LightningElement,track } from 'lwc';

export default class App extends LightningElement {
    @track todoList = [];
    index = 0;

    constructor(){
        super();
        this.addRow();
    }

    addRow(){
        this.todoList.push({
            key: this.index+''
        })

        this.index++;
    }
}
