import {Component} from 'angular2/core';

//Layout
import {HeaderTwoColumn} from '../../layouts/header-two-column/header-two-column';

let template = require('./home.html');

@Component({
    selector: 'home',    
    template: template,
    directives: [HeaderTwoColumn]
})
export class Home {

    public image: string;

    constructor() {
        this.image = './assets/img/languages.png';
    }
}