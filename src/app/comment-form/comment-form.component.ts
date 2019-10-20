import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent {
  @Output()
  eventCloseComment = new EventEmitter<boolean>();

  closeComment() {
    this.eventCloseComment.emit(false);
  }
}
