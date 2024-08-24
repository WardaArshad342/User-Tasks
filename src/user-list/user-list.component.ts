import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../dummy-users';
import { AsyncPipe } from '@angular/common';
 
@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [HttpClientModule, AsyncPipe],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
http = inject(HttpClient);
 
users$ = this.getUserList();
 
 
private getUserList(): Observable<User[]> {
  return this.http.get<User[]>('https://localhost:7252/User');
}
 
}