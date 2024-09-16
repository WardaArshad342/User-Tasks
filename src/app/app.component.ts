import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';
import { PatientsComponent } from "./PatientDetails/patients/patients.component";
import { DetailsComponent } from './PatientDetails/PatientDetails/details.component';
import { ChildComponent } from './ParentChild/child/child.component';
import { ParentComponent } from './ParentChild/Parent/parent.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [HeaderComponent, UserComponent, TasksComponent, ParentComponent, ChildComponent, PatientsComponent, DetailsComponent]
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}
