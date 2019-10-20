import { Component, Input } from '@angular/core';
import { Comment } from '../model/comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  @Input()
  postCommentList: Array<Comment>;

  addComment() {
    console.log(this.postCommentList);
  }
}
