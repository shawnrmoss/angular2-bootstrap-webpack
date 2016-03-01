import { Component } from 'angular2/core';
import { Http } from 'angular2/http';
import { Router } from 'angular2/router';

import { Credential } from '../../datatypes/credential';
import { AuthService } from '../../services/auth.service';

import './login-form.scss';

@Component({
  selector: 'login-form',
  template: require('./login-form.html'),
  directives: [],
  providers: [AuthService]
})
export class LoginForm {
    public message: string;
    public loading: boolean;
    public credential:  Credential;

    constructor(
        public http: Http,
        public router: Router,
        public auth: AuthService) {

        this.loading = false;
        this.credential = new Credential(null, null);
    }

    onSubmit() {
        this.loading = true;
        this.auth.signIn(this.credential)
        .subscribe(
            data => {
            this.loading = false;
            this.router.navigate(['Home']);
            },
            err => {
            this.loading = false;
            this.message = 'Your username or password were incorrect.'; //Log the error to console
            }
        );
    }
}
