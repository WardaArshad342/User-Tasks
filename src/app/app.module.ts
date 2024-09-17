import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { TasksComponent } from "./tasks/tasks.component";
import { ParentComponent } from "./ParentChild/Parent/parent.component";
import { DetailsComponent } from "./PatientDetails/PatientDetails/details.component";
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import { CardComponent } from "./shared/card/card.component";
import { ChildComponent } from "./ParentChild/child/child.component";
import { PatientsComponent } from "./PatientDetails/patients/patients.component";
import { CommonModule, NgStyle } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { TaskComponent } from "./tasks/task/task.component";
import { NewTaskComponent } from "./tasks/new-task/new-task.component";

@NgModule({
    declarations: [AppComponent, HeaderComponent, UserComponent, TasksComponent, //User and its Tasks
        ParentComponent, ChildComponent, //Parent Child
        DetailsComponent, PatientsComponent, //Parent Child
        TaskComponent, NewTaskComponent,
        CardComponent
        ],
    bootstrap: [AppComponent],
    imports: [BrowserModule, CommonModule, NgStyle, FormsModule,
        RouterOutlet, RouterLink, RouterLinkActive //Routing
    ]
})
export class AppModule{}