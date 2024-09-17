import { Component } from '@angular/core';
import { Patient } from '../patient.model';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  selectedPatient?: Patient;
  patients: Patient[] = [
    {id: '01', name: 'Ali', age: 20},
    {id: '02', name: 'Ayesha', age: 25},
    {id: '03', name: 'Noor', age: 30}
  ]

  AddPatient(){
    this.patients.push({id: this.patients.length.toString(), name: 'Wow', age: 35 + this.patients.length});
  }

  handleChildResponse(id: string){
    this.selectedPatient = this.patients.find((patient) => patient.id === id);
  }

}
