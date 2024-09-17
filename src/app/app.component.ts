import { Component, inject } from '@angular/core';

import { DUMMY_USERS } from './dummy-users';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId?: string;
  router = inject(Router);

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }

  Routing(){
    // this.router.navigateByUrl("/app-second");
    this.router.navigate(["app-second"]);
  }
}
