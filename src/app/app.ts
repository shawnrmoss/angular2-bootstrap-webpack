/*
 * Angular 2 decorators and services
 */
import {Component} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {FORM_PROVIDERS} from 'angular2/common';

//Directives
import {SecuredRouterOutlet} from './directives/secured-router-outlet';

//Views
import {Home} from './views/home/home';
import {About} from './views/about/about';
import {Login} from './views/login/login';
import {MdComponents} from './views/md-components/md-components';

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
  directives: [ ...ROUTER_DIRECTIVES, SecuredRouterOutlet],
  pipes: [],  
  template: `
    <router-outlet></router-outlet>
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
export class App {  
    constructor() {        
    }
}
