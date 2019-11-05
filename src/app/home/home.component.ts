import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  RegisterLink = '/register';
  login = 'Đăng nhập';
  register = 'Đăng ký';
  constructor(private router: Router) {}

  ngOnInit() {}

  gotoLogin() {
    this.router.navigate(['login']);
  }
}
