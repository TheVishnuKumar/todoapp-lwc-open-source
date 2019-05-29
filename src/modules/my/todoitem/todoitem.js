import { LightningElement,api,track } from 'lwc';

export default class App extends LightningElement {
    @api todo;
    @track isDisableEditing = false;
    @track noteCss = 'height: 30px;width: 300px;';

    markUnmarkCompleted(event){
        let isChecked = event.target.checked;
        this.isDisableEditing = isChecked;
        this.noteCss = isChecked ? 'background: rgb(169, 247, 145);border: 0px;height: 30px;width: 300px;' : 'height: 30px;width: 300px;' ;
    }
}
