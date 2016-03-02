import {Component} from 'angular2/core';

//Components
import {Sidebar} from '../../components/sidebar/sidebar';

let template = require('./two-column-sidebar.html');

@Component({
    selector: 'two-column-sidebar',    
    template: template,
    directives: [Sidebar]
})
export class TwoColumnSidebar {    
    constructor() {        
    }
}