import { Comment } from './model/comment';
import { Component } from '@angular/core';
import { Post } from './model/post';
import { HttpService } from './services/http.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'post-app';
  allPosts: Array<Post>;
  selectedPost: Post;
  selectedCommentList: Array<Comment>;
  isPostFormOpen = false;
  isCommentFormOpen = false;

  constructor(private httpService: HttpService) {
    this.getPosts();
  }
  toggleForm() {
    this.isPostFormOpen = !this.isPostFormOpen;
  }
  toggleComment() {
    this.isCommentFormOpen = !this.isCommentFormOpen;
  }
  closeForm(condition: boolean) {
    this.isPostFormOpen = condition;
  }
  closeComment(condition: boolean) {
    this.isCommentFormOpen = condition;
  }
  getPosts() {
    this.httpService.getPosts()
    .subscribe(posts => {
      this.allPosts = posts;
    },
    (error: HttpErrorResponse) => {
      console.log(error);
    });
  }
  selected(postId: number) {
    this.httpService.getPost(postId)
    .subscribe(post => {
      this.selectedPost = post;
    });
    this.httpService.getCommentsByPostId(postId)
    .subscribe(comment => {
      this.selectedCommentList = comment;
    });
  }
}
