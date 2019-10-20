import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../model/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent{
  title = 'lista postów';

  @Input()
  postList: Array<Post> = [];
  @Output()
  eventPost = new EventEmitter<number>();

  select(postId: number) {
    this.eventPost.emit(postId);
  }
}
