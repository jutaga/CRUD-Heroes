import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
    `
    .login{
      padding: 50px;
      border-radius: 20px ;
      box-shadow: inset 0 -3em 3em rgba(0,0,0,0.1),
             0 0  0 2px rgb(255,255,255),
             0.3em 0.3em 1em rgba(0,0,0,0.3);
    }
    `
  ]
})
export class LoginComponent {

  constructor(private router: Router,
    private authService: AuthService
  ) { }

  login() {


    //ir al backend
    //un usuario

    this.authService.login()
      .subscribe(resp => {
        console.log(resp);

        if (resp.id) {
          this.router.navigate(['/heroes'])

        }
      })
  }

  ingresarSinLogin() {
    this.authService.logout();
    this.router.navigate(['/heroes']);
  }

}
