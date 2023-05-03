import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginService } from '../service/security/login.service';

@Injectable({
	providedIn: 'root',
})
export class AuthGuard implements CanActivate {
	constructor(private router: Router, private loginService: LoginService) {}

	canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> | boolean {
		const currentUser = this.loginService.storageService.getCurrentUser();
		if (!currentUser) {
			this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
			return true;
		} else {
			return false;
		}
	}
}
