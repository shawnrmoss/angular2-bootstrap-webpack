import {Component} from 'angular2/core';
import {AuthService} from '../../services/auth.service';
import {LoginCard} from '../../components/login-card/login-card';

let template = require('./login.html');

@Component({
    selector: 'login',
    directives: [LoginCard],
    template: template
})
export class Login {
    constructor() {
    }
}
