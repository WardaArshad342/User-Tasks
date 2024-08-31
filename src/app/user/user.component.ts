import { Component, computed, input, Input } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // @Input({ required: true }) avatar! : string;
  // @Input({ required: true }) name! : string;
  // ImagePath(){
  //   return 'assets/' + this.avatar;
  // }


  avatarSignal = input.required<string>();
  nameSignal = input.required<string>();
  ImagePathSignal = computed(() => {
    return 'assets/' + this.avatarSignal();
  })

  
  onSelectUser() {}

}
