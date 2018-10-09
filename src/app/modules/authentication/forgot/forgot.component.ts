import { Component } from "@angular/core";
import { RouterModule, Routes, Router } from "@angular/router";
import { AuthService } from 'src/app/auth.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  providers: [AuthService],
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent {
  private user = {};
  constructor(private authService: AuthService, private router: Router) { }
  onClick() {
    this.authService.forgot(this.user).subscribe();
    this.router.navigate(['auth/checkmail']);
  }

}