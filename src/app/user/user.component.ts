import { Component, computed, EventEmitter, input, Input, Output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({ required: true }) user! : {
    id: string;
    avatar: string;
    name: string;
  }
  @Output() select = new EventEmitter();

  ImagePath(){
    return 'assets/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }

}
