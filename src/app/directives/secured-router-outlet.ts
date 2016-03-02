import {Directive, Attribute, ElementRef, DynamicComponentLoader} from 'angular2/core';
import {Router, RouterOutlet, ComponentInstruction} from 'angular2/router';
import {Login} from './../views/login/login';
import {JwtHelper} from 'angular2-jwt';

@Directive({
    selector: 'router-outlet'
})
export class SecuredRouterOutlet extends RouterOutlet {
    public publicRoutes: any;
    private jwtHelper: JwtHelper = new JwtHelper();
    private parentRouter: Router;

    constructor(_elementRef: ElementRef, _loader: DynamicComponentLoader,
        _parentRouter: Router, @Attribute('name') nameAttr: string) {
        super(_elementRef, _loader, _parentRouter, nameAttr);

        this.parentRouter = _parentRouter;
        this.publicRoutes = {
            '/login': true,
            '/signup': true
        };
    }

    activate(instruction: ComponentInstruction) {
        var url = this.parentRouter.lastNavigationAttempt;

        if (!localStorage.getItem('jwt')) {
            console.log('No JWT Token Exists redirect');
            this.parentRouter.navigateByUrl('/login');
        } else if (this.jwtHelper.isTokenExpired(localStorage.getItem('jwt'))) {
            console.log('The Token exists but it is expired, redirect');
            this.parentRouter.navigateByUrl('/login');
        }
        return super.activate(instruction);
    }
}
