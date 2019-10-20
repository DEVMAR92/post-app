import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {
  @Output()
  eventCloseForm = new EventEmitter<boolean>();
  closeForm() {
    this.eventCloseForm.emit(false);
  }
}
