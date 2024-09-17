import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import { CommonModule, NgStyle } from "@angular/common";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";

import { ParentComponent } from "./ParentChild/Parent/parent.component";
import { DetailsComponent } from "./PatientDetails/PatientDetails/details.component";
import { ChildComponent } from "./ParentChild/child/child.component";
import { PatientsComponent } from "./PatientDetails/patients/patients.component";
import { SharedModule } from "./shared/shared.module";
import { TasksModule } from "./tasks/tasks.module";

@NgModule({
    declarations: [AppComponent, HeaderComponent, UserComponent,
        ParentComponent, ChildComponent, //Parent Child
        DetailsComponent, PatientsComponent, //Parent Child
        ],
    bootstrap: [AppComponent],
    imports: [BrowserModule, CommonModule, NgStyle, SharedModule, TasksModule,
        RouterOutlet, RouterLink, RouterLinkActive //Routing
    ]
})
export class AppModule{}