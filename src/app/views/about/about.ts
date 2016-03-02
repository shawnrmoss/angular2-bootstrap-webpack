import {Component} from 'angular2/core';

//Layout
import {HeaderTwoColumn} from '../../layouts/header-two-column/header-two-column';

let template = require('./about.html');

@Component({
    selector: 'about',
    template: template,
    directives: [HeaderTwoColumn]
})
export class About {
    constructor() {

    }
}
