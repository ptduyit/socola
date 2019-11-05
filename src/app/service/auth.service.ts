import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogin = false;
  constructor(private http: HttpClient) {}
  register(email: string, password: string) {
    var data = { email: email, password: password };
    return this.http.post(
      'https://localhost:44346/api/v1/identity/register',
      data
    );
  }

  login(email: string, password: string) {
    var data = { email: email, password: password };
    var reqHeader = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post(
      'https://localhost:44346/api/v1/identity/login',
      data,
      reqHeader
    );
  }
}
