import { View, Component } from 'angular2/core';
import { Router, RouterLink } from 'angular2/router';

import {MATERIAL_DIRECTIVES} from 'ng2-material/all';

//Layout
import {HeaderTwoColumn} from '../../layouts/header-two-column/header-two-column';

@Component({
    selector: 'md-components',
    template: require('./md-components.html'),
    directives: [MATERIAL_DIRECTIVES, HeaderTwoColumn]
})
export class MdComponents {    
     
    constructor() {           
    }
}
