import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  selectedUser = DUMMY_USERS[randomIndex];

  get ImagePath(){
    return 'assets/' + this.selectedUser.avatar;
  }

  onSelectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser = DUMMY_USERS[randomIndex];
    }


  selectedUserSignal = signal(DUMMY_USERS[randomIndex]); //using signals
  onSelectSignalUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUserSignal.set(DUMMY_USERS[randomIndex]);
    }
ImagePathSignal = computed(() => 'assets/' + this.selectedUserSignal().avatar);

}
