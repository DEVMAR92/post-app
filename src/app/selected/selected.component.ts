import { Component, Input } from '@angular/core';
import { Post } from '../model/post';

@Component({
  selector: 'app-selected',
  templateUrl: './selected.component.html',
  styleUrls: ['./selected.component.css']
})
export class SelectedComponent {
  @Input()
  activePost: Post;
}
