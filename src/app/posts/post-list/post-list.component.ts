import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/service/posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  data: any;
  constructor(private postsService: PostsService) { }

  ngOnInit() {
  }
  getData() {
    this.postsService.getPosts().subscribe(
      (data: any) => {
        this.data = data;
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );
  }
}
