import { View, Component } from 'angular2/core';
import { Router, RouterLink } from 'angular2/router';

import {MATERIAL_DIRECTIVES} from 'ng2-material/all';

@Component({
    selector: 'md-components',
    template: require('./md-components.html'),
    directives: [MATERIAL_DIRECTIVES]
})
export class MdComponents {    

    constructor() {
        
    }
}
