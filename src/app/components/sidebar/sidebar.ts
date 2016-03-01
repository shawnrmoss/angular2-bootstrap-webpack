import {View, Component, ViewEncapsulation} from 'angular2/core';
import { Router, RouterLink } from 'angular2/router';

import './sidebar.scss';

@Component({
    selector: 'sidebar',
    template: require('./sidebar.html'),
    directives: [RouterLink],
    encapsulation: ViewEncapsulation.None
})
export class Sidebar {
    public activeTab: number;

    constructor() {
        this.activeTab = 1;
    }

    setActiveTab(tabIndex: number) {
        this.activeTab = tabIndex;
    }
}
