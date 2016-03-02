import {Component, ElementRef, OnInit} from 'angular2/core';

//Components
import {Header} from '../../components/header/header';
import {Sidebar} from '../../components/sidebar/sidebar';

//Styles once its imported its applied
import './header-two-column.scss';

let template = require('./header-two-column.html');

@Component({
    selector: 'header-two-column',        
    template: template,
    directives: [Header, Sidebar]
})
export class HeaderTwoColumn implements OnInit {    

    constructor(private element: ElementRef) {        
    }

    ngOnInit() {
        this.resize();
    }

    onResize(event) {
        this.resize();
    }

    resize() {
        let height = window.innerHeight;
        //header = 75, padding around wrapper 10
        height = height - 108;
        //Aside

        this.element.nativeElement.children[0].children[1]
            .childNodes[1].style.minHeight = height + 'px';
        this.element.nativeElement.children[0].children[1]
            .childNodes[1].style.maxHeight = height + 'px';
        //Main
        this.element.nativeElement.children[0].children[1]
            .childNodes[3].style.minHeight = height + 'px';
        this.element.nativeElement.children[0].children[1]
            .childNodes[3].style.maxHeight = height + 'px';
    }
}
