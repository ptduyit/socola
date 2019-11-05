import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { PostsComponent } from './posts/posts.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: 'post',
    component: PostsComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          { path: 'post-list', component: PostListComponent },
          { path: '', redirectTo: 'post-list', pathMatch: 'full' }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule {}
