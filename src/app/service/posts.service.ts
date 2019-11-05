import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private http: HttpClient) {}
  getPosts() {
    const token = localStorage.getItem('token');
    var reqHeader = {
      headers: new HttpHeaders({ Authorization: 'Bearer ' + token })
    };
    return this.http.get('https://localhost:44346/api/v1/posts', reqHeader);
  }
}
