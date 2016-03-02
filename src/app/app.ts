/*
 * Angular 2 decorators and services
 */
import {Component, ElementRef, OnInit} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {FORM_PROVIDERS} from 'angular2/common';

//Directives
import {RouterActive} from './directives/router-active';
import {SecuredRouterOutlet} from './directives/secured-router-outlet';

//Services
import {AuthService} from './services/auth.service';

//Views
import {Home} from './views/home/home';
import {About} from './views/about/about';
import {Login} from './views/login/login';
import {MdComponents} from './views/md-components/md-components';

//Components
import {Header} from './components/header/header';
import {Sidebar} from './components/sidebar/sidebar';

//Styles
import '../assets/scss/main.scss';
import './app.scss';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  providers: [ ...FORM_PROVIDERS ],
  directives: [ ...ROUTER_DIRECTIVES, RouterActive, Header, Sidebar, SecuredRouterOutlet ],
  pipes: [],  
  template: `
    <div class="wrapper" (window:resize)="onResize($event)" >    
        <div class="row">
            <div class="col-md-12 header">
                <header></header>
            </div>
        </div>        
        <div class="row stage">
            <aside id="aside" class="col-md-2 aside visible-lg-block visible-md-block">           
                <sidebar></sidebar>
            </aside>
            <div id="main" class="col-md-10 main ">  
                <bread-crumb></bread-crumb>          
                <router-outlet></router-outlet>
            </div>
        </div>       
    </div>
  `
})
@RouteConfig([
  { path: '/', component: Home, name: 'Index' },
  { path: '/home', component: Home, name: 'Home' },
  { path: '/about', component: About, name: 'About' },
  { path: '/components', component: MdComponents, name: 'Components' },
  { path: '/login', component: Login, name: 'Login' },
  // Async load a component using Webpack's require with es6-promise-loader and webpack `require`
  //{ path: '/about', loader: () => require('es6-promise!./about/about')('About'), name: 'About' },
  { path: '/**', redirectTo: ['Index'] }
])
export class App implements OnInit {
  public loggedOn: boolean;

    constructor(private auth: AuthService,
        private element: ElementRef) {
        this.loggedOn = auth.isAuthenticated();
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
        height = height - 100;
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
