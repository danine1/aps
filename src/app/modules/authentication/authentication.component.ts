import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from "@angular/router";

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
